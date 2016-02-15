import {Person} from "./PersonInterface";
class Sportsman implements Person {
    name: string;
    age: number;
    sex: string;
    retired: boolean = false;
    sport: string;

    constructor(name: string, age: number, sex: string, sport: string, retired ?: boolean) {
        if (name) this.name = name || "Unknown";
        if (age) this.age = age || undefined;
        if (sex) this.sex = sex || "Unknown";
        this.retired = retired;
        if (sport) this.sport = sport;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getSex(): string {
        return this.sex;
    }

    getRetired(): boolean {
        return this.retired;
    }

    getSport(): string {
        return this.sport;
    }

    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setSex(sex: string): void {
        this.sex = sex;
    }

    setRetired(retired: boolean): void {
        this.retired = retired;
    }

    setSport(sport: string): void {
        this.sport = sport;
    }
}

var person: Sportsman= new Sportsman("A.B. Devillers", 32, "Male", "Cricket", false);
console.log("\n" + person.getName() + " Details:\n");
console.log(`Age: ${person.getAge()}
Sex: ${person.getSex()}
Sport: ${person.getSport()}
Retired: ${person.getRetired()}`);