import { JavascriptAstParsser } from "../JavascriptAstParser";

debugger;
let ast = new JavascriptAstParsser(`
    do {
        let a = console.log('dd')
    } while(a++) {}
`).parse();

console.log(ast);

function aa () {}
try {

} finally {
    
}