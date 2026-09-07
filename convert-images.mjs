#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, 'public', 'projects');

async function convertToWebP() {
  try {
    const files = fs.readdirSync(projectsDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    console.log(`Encontradas ${pngFiles.length} imágenes PNG. Convirtiendo...`);

    for (const file of pngFiles) {
      const inputPath = path.join(projectsDir, file);
      const outputPath = path.join(projectsDir, file.replace('.png', '.webp'));

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`✓ Convertido: ${file} → ${file.replace('.png', '.webp')}`);
    }

    console.log('\n✅ Conversión completada');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

convertToWebP();
