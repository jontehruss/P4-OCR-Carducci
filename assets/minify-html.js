const fs = require('fs');
const minify = require('html-minifier').minify;

// Lire le fichier HTML
const html = fs.readFileSync('../index.html', 'utf8');

// Minifier le contenu HTML
const minifiedHtml = minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeAttributeQuotes: true,
});

// Écrire le fichier minifié
fs.writeFileSync('../index-min.html', minifiedHtml);

console.log('Minification terminée : index-min.html créé.');
