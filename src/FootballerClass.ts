import {Sportsman} from "./SportsmanClass";

class Footballer extends Sportsman {
    constructor(name: string, age: number, sex: string, sport: string, retired ?: boolean){
        super(name, age, sex, sport, retired);
    }
}

var person: Sportsman = new Footballer("Lionel Messi", 28, "Male", "Football", false);
console.log("\n" + person.getName() + " Details:\n");
console.log(`Age: ${person.getAge()}
Sex: ${person.getSex()}
Sport: ${person.getSport()}
Retired: ${person.getRetired()}`);

if (window && document) {
    let playerElement: any = document.getElementById("playername");
    playerElement.innerHTML = "<h3>Name: " + person.getName() + "</h3>" +
        "<h3>Age: " + person.getAge() + "</h3>" +
        "<h3>Sex: " + person.getSex() + "</h3>" +
        "<h3>Sport: " + person.getSport() + "</h3>" +
        "<h3>Retired: " + person.getRetired() + "</h3>";
}

