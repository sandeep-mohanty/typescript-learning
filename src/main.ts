export enum Lang {
    C,
    Haskell,
    Scala,
    Clojure,
    Unknown,
    Fortran
}

export class Language {

    private name: string = "Fortran";
    private description: string = " is a programming language !";

    constructor(name ?: string , description ?: string) {
        if (name) this.name = name;
        if (description) this.description = description;
    }

    getName():string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }
}
