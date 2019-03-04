const fs = require("fs");
const MarkdownIt = require("markdown-it");
const MarkdownItAnchor = require("markdown-it-anchor");
const uslug = require("uslug");

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(MarkdownItAnchor, {
  slugify: uslug
});

const mdContents = fs.readFileSync("source.md", "latin1");
const mdHTML = md.render(mdContents);

const template = fs.readFileSync("template.html", "latin1");
var finalHTML = template.replace(/{MD-RESULT}/g, mdHTML);

fs.writeFileSync("index.html", finalHTML, { flag: "w" });

console.log("Success!");
