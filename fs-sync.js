const { readFileSync, WriteFileSync, writeFileSync } = require ('fs')

// Read file using the inbuilt module
const first = readFileSync ('./content/first.txt', 'utf8');
const second = readFileSync ('./content/second.txt', 'utf8');

console.log(first, second);

// write file using the "FS" in built module
writeFileSync (
    './content/result-sync.txt', `This is the first result: ${first}, ${second}`
)
