// waka-sim.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Pour obtenir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Liste des fichiers à modifier
const files = [
  'src/App.jsx',
  'src/App.css'
];

// Générer un commentaire aléatoire
function randomComment() {
  const comments = [
    '/* auto update */',
    '// waka boost',
    '<!-- fake edit -->',
    '/* productivity hack */'
  ];
  return comments[Math.floor(Math.random() * comments.length)];
}

// Modifier un fichier en y ajoutant un faux commentaire
function touchFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  const timestamp = new Date().toISOString();
  const comment = `\n\n// ${timestamp} ${randomComment()}`;
  fs.appendFile(fullPath, comment, (err) => {
    if (err) {
      console.error(`❌ Erreur en modifiant ${filePath}:`, err);
    } else {
      console.log(`✅ Modifié: ${filePath}`);
    }
  });
}

// Modifier tous les fichiers listés
function loopEdit() {
  files.forEach(file => touchFile(file));
}

// Simulation en boucle
const interval = 60 * 1000; // toutes les 1 minute
console.log('🔥 Simulation WakaTime en cours... Ctrl+C pour arrêter.');

loopEdit(); // Première exécution
setInterval(loopEdit, interval); // Répéter toutes les minutes
