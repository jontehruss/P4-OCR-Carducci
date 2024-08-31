const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const rootDir = './images';

// Fonction pour s'assurer que le dossier de sortie existe
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
}

// Fonction pour convertir un fichier image en WebP
async function convertToWebp(filePath) {
    const outputFilePath = filePath.replace(/\.(png|jpg|jpeg|gif)$/, '.webp');
    ensureDirectoryExistence(outputFilePath);
    try {
        await sharp(filePath)
            .toFormat('webp')
            .toFile(outputFilePath);
        console.log(`Image convertie avec succès: ${outputFilePath}`);
    } catch (err) {
        console.error(`Erreur lors de la conversion de ${filePath}:`, err);
    }
}

// Fonction pour trouver et convertir les fichiers
function convertAllImagesToWebp() {
    try {
        // Motif glob pour rechercher les formats d'images spécifiés
        const pattern = `${rootDir}/**/*.{png,jpg,jpeg,gif}`;
        console.log(`Recherche avec le motif: ${pattern}`);
        const options = {
            nodir: true, // Ignore les répertoires dans les résultats
        };
        const files = glob.sync(pattern, options);
        console.log(`Fichiers trouvés: ${files.length}`);
        files.forEach(async (file) => {
            console.log(`Conversion de: ${file}`);
            await convertToWebp(file);
        });
    } catch (err) {
        console.error('Erreur lors de la recherche des fichiers:', err);
    }
}

// Exécuter la conversion
convertAllImagesToWebp();
