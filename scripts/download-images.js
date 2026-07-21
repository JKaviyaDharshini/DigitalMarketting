import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../src');
const PUBLIC_IMG_DIR = path.resolve(__dirname, '../public/images');

// Ensure public/images exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
  fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

const unsplashRegex = /https:\/\/images\.unsplash\.com\/[^"'\s\)]+/g;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return https.get(response.headers.location, res => resolve(handleResponse(res))).on('error', reject);
      }
      resolve(handleResponse(response));
    }).on('error', reject);
    
    function handleResponse(res) {
      const data = [];
      res.on('data', chunk => data.push(chunk));
      return new Promise((resolveInner) => {
        res.on('end', () => resolveInner(Buffer.concat(data)));
      });
    }
  });
}

async function main() {
  console.log('Scanning files...');
  const files = walk(SRC_DIR);
  
  const urlMap = new Map();
  let imageCounter = 1;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(unsplashRegex);
    if (matches) {
      for (const match of matches) {
        if (!urlMap.has(match)) {
          urlMap.set(match, `img_${imageCounter.toString().padStart(3, '0')}.webp`);
          imageCounter++;
        }
      }
    }
  }

  console.log(`Found ${urlMap.size} unique Unsplash images. Starting download & conversion...`);

  let current = 1;
  for (const [url, filename] of urlMap.entries()) {
    const destPath = path.join(PUBLIC_IMG_DIR, filename);
    console.log(`[${current}/${urlMap.size}] Downloading -> ${filename}`);
    try {
      const buffer = await downloadImage(url);
      await sharp(buffer)
        .webp({ quality: 80 })
        .toFile(destPath);
    } catch (e) {
      console.error(`Failed to process ${url}:`, e);
    }
    current++;
  }

  console.log('Updating source files...');
  let updatedFiles = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    for (const [url, filename] of urlMap.entries()) {
      if (content.includes(url)) {
        content = content.split(url).join(`/images/${filename}`);
        hasChanges = true;
      }
    }
    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      updatedFiles++;
    }
  }

  console.log(`Migration complete! Updated ${updatedFiles} files.`);
}

main().catch(console.error);
