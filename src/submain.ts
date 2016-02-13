import {Lang, Language} from "./main";
import os = require('os');

console.log("This application is running on the host: "  + os.hostname() + " \n");
class FunctionalLanguage extends Language {
    constructor(name ?: string , description ?: string) {
        super(name, description);
    }

    getName(): string { return super.getName(); }
}

var p1: Language = new Language();
var p2: Language = new FunctionalLanguage();
var p3: Language = new Language(Lang[0]," belongs to the family of imperative programming languages.");
var p4: Language = new FunctionalLanguage(Lang[1], " belongs to the family of functional programming languages.");

//console.log("Proceduaral Language: " + p1.getName() + " !");
console.log(`${p1.getName()}${p1.getDescription()}`);
//console.log(p2.getName() + " !");
console.log(`${p2.getName()}${p2.getDescription()}`);
//console.log("Proceduaral Language: " + p3.getName() + " !");
console.log(`${p3.getName()}${p3.getDescription()}`);
//console.log(p4.getName() + " !");
console.log(`${p4.getName()}${p4.getDescription()}`);