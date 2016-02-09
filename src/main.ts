class Language {
    static defaultName: string = "Unknown";
    private name: string;

    constructor(name: string) {
        this.name = name || Language.defaultName;
    }

    getName(): string { return this.name }
}

class FunctionalLanguage extends Language {
    constructor(name: string) {
        super(name);
    }

    getName(): string { return "Functional Language: " + super.getName(); }
}


var p1 = new Language("C");
var p2 = new FunctionalLanguage("Haskell");
console.log("Proceduaral Language: " + p1.getName() + " !");
console.log(p2.getName() + " !");