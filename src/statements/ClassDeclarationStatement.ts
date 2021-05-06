import { FunDeclarationStatement } from "./FunDeclarationStatement";
import { IdentifierLiteratureStatement } from "./IdentifierLiteratureStatement";
import { Statement } from "./Statement"

export class ClassDeclarationStatement extends Statement {
    type = 'ClassDeclarationStatement';
    extend: IdentifierLiteratureStatement;
    methods: FunDeclarationStatement[] = [];
    constructor(currentToken: any) {
        super();
        this.loc.start = currentToken.loc.start;
    }
} 