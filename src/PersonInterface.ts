export interface Person {
    name: string;
    age: number;
    sex: string;
    retired: boolean;
    getName(): string;
    getAge(): number;
    getSex(): string;
    getRetired(): boolean;
    setName(name: string): void;
    setAge(age: number): void;
    setSex(sex: string): void;
    setRetired(retired: boolean): void;
}