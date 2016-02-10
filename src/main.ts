enum Lang {
     C,
     Haskell,
     Scala,
     Clojure,
      Unknown,
     Fortran
}

class Language {
    static defaultName: Lang = Lang[4];
    private name: Lang;
    private description: string = " is a programming language !"

    constructor(name: Lang = Lang[5], description) {
        this.name = name || Language.defaultName;
        if (description) this.description = description;
    }

    getName(): Lang { return this.name }
    getDescription(): string { return this.description}
}

class FunctionalLanguage extends Language {
    constructor(name: Lang = Lang[2], description: string) {
        super(name, description);
    }

    getName(): Lang { return super.getName(); }
}

var p1 = new Language();
var p2 = new FunctionalLanguage();
var p3 = new Language(Lang[0]," belongs to the family of imperative programming languages.");
var p4 = new FunctionalLanguage(Lang[1], " belongs to the family of functional programming languages.");

//console.log("Proceduaral Language: " + p1.getName() + " !");
console.log(`${p1.getName()}${p1.getDescription()}`);
//console.log(p2.getName() + " !");
console.log(`${p2.getName()}${p2.getDescription()}`);
//console.log("Proceduaral Language: " + p3.getName() + " !");
console.log(`${p3.getName()}${p3.getDescription()}`);
//console.log(p4.getName() + " !");
console.log(`${p4.getName()}${p4.getDescription()}`);