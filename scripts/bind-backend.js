#!/usr/bin/env node
/*
 * Backend binding script
 *
 * This script scans the `src/` directory for React component files and looks
 * for annotations of the form `// @fetch:<source>` followed by an optional
 * hint describing the backend path (e.g. `backend: firestore.collection("users")`).
 * When it finds such an annotation, it inserts a placeholder for fetching
 * data from the backend into the component.  The placeholder includes
 * comments guiding you on how to integrate your chosen backend.
 *
 * The script is intentionally conservative: it does not overwrite existing
 * fetch logic; it only adds placeholder code if none is present immediately
 * after the annotation.
 */

const fs = require('fs');
const path = require('path');

async function scanFile(filePath) {
  const code = await fs.promises.readFile(filePath, 'utf8');
  const lines = code.split(/\r?\n/);
  let modified = false;
  const newLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);
    const match = line.match(/\/\/\s*@fetch:([a-zA-Z0-9_-]+)(.*)/);
    if (match) {
      const source = match[1];
      const hint = match[2] ? match[2].trim() : '';
      const nextLine = lines[i + 1] || '';
      if (!nextLine.includes('Automatically generated fetch')) {
        const placeholder = [
          `// Automatically generated fetch for ${source}`,
          `// TODO: Replace the following with your backend integration code.`,
          `// The "${source}" annotation suggests this component should load data from ${hint || source}.`,
          `// Provide loading and error states so the UI can react to backend connectivity issues.`,
          `// Example (Firebase Firestore):`,
          `// import { getFirestore, collection, getDocs } from 'firebase/firestore';`,
          `// const db = getFirestore();`,
          `// const querySnapshot = await getDocs(collection(db, '${source}'));`,
          `// setState(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));`,
          `//`,
          `// Example (Supabase):`,
          `// import { createClient } from '@supabase/supabase-js';`,
          `// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);`,
          `// const { data, error } = await supabase`,
          `//   .from('${source}')`,
          `//   .select('*');`,
          `// if (error) {`,
          `//   console.error(error);`,
          `// } else {`,
          `//   setState(data);`,
          `// }`,
          `//`,
          `// Example (REST API with fetch):`,
          `// try {`,
          `//   const response = await fetch('/api/${source}');`,
          `//   if (!response.ok) throw new Error(\`Request failed with ${response.status}\`);`,
          `//   const payload = await response.json();`,
          `//   setState(payload);`,
          `// } catch (err) {`,
          `//   console.error(err);`,
          `//   setError(err);`,
          `// }`,
          `//`,
          `// Keep your data access in a dedicated hook or service so it can be reused by other components.`,
          '',
        ];
        placeholder.forEach((pl) => newLines.push(pl));
        modified = true;
      }
    }
  }
  if (modified) {
    await fs.promises.writeFile(filePath, newLines.join('\n'), 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

async function walkDir(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (
      entry.name.endsWith('.js') ||
      entry.name.endsWith('.jsx') ||
      entry.name.endsWith('.ts') ||
      entry.name.endsWith('.tsx') ||
      entry.name.endsWith('.mjs')
    ) {
      await scanFile(fullPath);
    }
  }
}

async function main() {
  const srcDir = path.join(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    console.error('No src/ directory found.  Please run this script in the root of your generated project.');
    process.exit(1);
  }
  await walkDir(srcDir);
  console.log('Backend binding complete.  Remember to import your backend modules and replace the placeholders with working code.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
