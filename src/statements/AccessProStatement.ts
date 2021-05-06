import { OperatorStatement } from "./OperatorStatement";
import { Statement } from "./Statement";

export class AccessProStatement extends Statement {
    type = 'AccessProStatement';
    constructor(public owner?: Statement, public propertyName?: Statement) {
        super()
        this.loc.start = owner.loc.start;
    }
}