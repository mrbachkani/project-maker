#!/usr/bin/env node
/*
 * Interactive script for generating a new project from one of the templates.
 *
 * When run from the root of this repository, the script lists all available
 * templates in the `templates/` folder, asks the user for a project name and
 * which template to use, then copies the chosen template to a new folder.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const templatesDir = path.join(__dirname, '..', 'templates');

const SKIP_DIRECTORIES = new Set(['node_modules']);

async function copyDir(src, dest) {
  await fs.promises.mkdir(dest, { recursive: true });
  const entries = await fs.promises.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_DIRECTORIES.has(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isSymbolicLink()) {
      const linkTarget = await fs.promises.readlink(srcPath);
      await fs.promises.symlink(linkTarget, destPath);
    } else if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  // Read available templates
  let templates;
  try {
    templates = await fs.promises.readdir(templatesDir);
  } catch (err) {
    console.error('Could not read templates directory:', err);
    process.exit(1);
  }

  if (templates.length === 0) {
    console.error('No templates found in the templates directory.');
    process.exit(1);
  }

  console.log('Available templates:');
  templates.forEach((tpl, idx) => console.log(`${idx + 1}) ${tpl}`));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const question = (q) =>
    new Promise((resolve) => {
      rl.question(q, (answer) => resolve(answer));
    });

  const projectName = (await question('Enter the name of your new project: ')).trim();
  if (!projectName) {
    console.error('Project name cannot be empty.');
    rl.close();
    process.exit(1);
  }

  let templateChoice;
  while (!templateChoice) {
    const choice = await question('Choose a template by number: ');
    const index = parseInt(choice, 10) - 1;
    if (templates[index]) {
      templateChoice = templates[index];
    } else {
      console.log('Invalid choice, try again.');
    }
  }
  rl.close();

  const targetDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(templatesDir, templateChoice);

  try {
    await copyDir(templateDir, targetDir);
    console.log(`Project "${projectName}" created from template "${templateChoice}".`);
    console.log(`Navigate into the project folder and run "npm install" to install dependencies.`);
  } catch (err) {
    console.error('Error generating project:', err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});