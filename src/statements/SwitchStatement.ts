import { Block } from "../Block";
import { CaseStatement } from "./CaseStatement";
import { Statement } from "./Statement";

export class SwitchStatement extends Statement {
    type = 'switchStatement';
    case: CaseStatement[] = [];
    default: Block;
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start;
    }
}