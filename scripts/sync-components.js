#!/usr/bin/env node
/*
 * Component synchronisation script
 *
 * This script scans the `src/` directory of a generated project for React
 * components (files starting with an uppercase letter and ending in .js or
 * .jsx).  When it finds a component that does not already exist in the
 * central `components-library/` it copies the file into the library.  Use
 * this script when you identify a component that could be reused across
 * projects.  Components that already exist in the library will not be
 * overwritten.
 */

const fs = require('fs');
const path = require('path');

const libraryDir = path.join(__dirname, '..', 'components-library');

async function copyComponent(srcFile) {
  const fileName = path.basename(srcFile);
  const destFile = path.join(libraryDir, fileName);
  try {
    await fs.promises.access(destFile);
    console.log(`${fileName} already exists in components library, skipping.`);
  } catch (err) {
    await fs.promises.copyFile(srcFile, destFile);
    console.log(`Copied ${fileName} to components library.`);
  }
}

async function walkAndSync(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkAndSync(fullPath);
    } else if (/^[A-Z].*\.jsx?$/.test(entry.name)) {
      await copyComponent(fullPath);
    }
  }
}

async function main() {
  const projectSrc = path.join(process.cwd(), 'src');
  if (!fs.existsSync(projectSrc)) {
    console.error('No src/ directory found.  Please run this script from the root of your generated project.');
    process.exit(1);
  }
  await walkAndSync(projectSrc);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});