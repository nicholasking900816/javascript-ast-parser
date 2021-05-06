import { Block } from "../Block";
import { Statement } from "./Statement";

export class WitchStatement extends Statement {
    type = 'WitchStatement';
    withContext: Statement;
    body: Block;
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start
    }
}