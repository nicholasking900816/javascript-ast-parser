import { Block } from "../Block";
import { Statement } from "./Statement";

export class CaseStatement extends Statement {
    type = 'CaseStatement';
    body: Block;
    condition: Statement;
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start;
    }
}