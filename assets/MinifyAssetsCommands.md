**Minification**

1. *CSS* using ***postcss / cssnano*** 
<!-- **assets\postcss.config.js** -->
npx postcss style.css -o style-min.css
npx postcss bootstrap\bootstrap.css -o bootstrap\bootstrap-min.css


2. *JS* using ***terser***
<!-- **no\file** -->
npx terser scripts.js -o scripts-min.js --compress --mangle
npx terser maugallery.js -o maugallery-min.js --compress --mangle
npx terser bootstrap\bootstrap.bundle.js -o bootstrap\bootstrap.bundle-min.js --compress --mangle

3. *HTML* using ***html-minifier***
<!-- **assets\minify-html.js** -->
node minify-html.js