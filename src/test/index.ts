import { JavascriptAstParsser } from "../JavascriptAstParser";

debugger;
let ast = new JavascriptAstParsser(`
    function aa bb (a, b) {
        console.log(a + b);
        console.log('sssss');
    }
`).parse();

console.log(ast);

function aa () {}