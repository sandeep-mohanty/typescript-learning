export enum Lang {
    C,
    Haskell,
    Scala,
    Clojure,
    Unknown,
    Fortran
}

export class Language {
    static defaultName: string = Lang[4];
    private name: string;
    private description: string = " is a programming language !"

    constructor(name: string = Lang[5], description: string) {
        this.name = name || Language.defaultName;
        if (description) this.description = description;
    }

    getName(): string { return this.name }
    getDescription(): string { return this.description}
}
