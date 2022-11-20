const nearley = require("nearley");
const grammar = require("./small.js");
const fs = require ("mz/fs");


async function main() {

// Create a Parser object from our grammar.
const filename = process.argv[2];
if (!filename) {
    console.log("Provide a small file");
    return;
    
}
const code = (await fs.readFile(filename)).toString();
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed(code);
if (parser.results.length > 1 )
{
    console.log("Error: ambigous grammar detected");

} else if (parser.results.length == 1) {
    const ast = parser.results [0];
    const outputFilename = filename.replace(".small", ".ast");
    await fs.writeFile(outputFilename, JSON.stringify(ast, null, " "));
    console.log(`Wrote ${outputFilenmae}.`);
} else {
    console.log("Error: no parse found");
}
}
// Parse something!

// parser.results is an array of possible parsings.

main().catch(err => console.log(err.stack));