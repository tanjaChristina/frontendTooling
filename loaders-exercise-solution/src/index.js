console.log('Hello world');

const testTranspile = () => console.log(`I am an ES6 arrow function`);

import "./styles.scss";


/* 

EXERCISE TODO:
exercise 1: add image to the dependency tree, then add loader configuration so it can be processed
Tip: see asset management (Asset Modules) in webpack documentation [https://webpack.js.org/guides/asset-management/]

exercise 2: if you finish fast, here's an additional challenge for you :)
    1: add additional images to our little project
    2: create a .html file, where you reference/ use those new images so they show would show up
    3: add the html file to your dependency tree (+ configure a fitting loader). Make sure the html file is outputted to the dist directory (You may need to use a plugin for that - hint: HtmlWebpackPlugin)
    4: watch your new images be outputted to your dist directory
    5: load your example with the dev server and check if everything works as expected. try out hot reloading with altering the styles.scss file and watch the changes in the browser

*/

//exercise 1
import "./images/frontend-ninja.jpg";

//exercise 2
import html from "./index.html";