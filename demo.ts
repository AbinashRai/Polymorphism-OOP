class Person {
    constructor(protected name: string, protected age: number) {
    }

    public introduce() {
        return `My name is ${this.name} and my age is ${this.age}`
    }
}

 class Student extends Person {

    constructor(name: string, age: number, protected grade: string) {
        super(name, age);
    }

    
    public introduce(): string {
        return `${super.introduce()}. ${this.introduceYourGrade()}`;
    }

    public introduceYourGrade(): string {
        return `I'm studing in ${this.grade} grade`
        
    }

    public study() {

    }
}

class WorkingProfessional extends Student {
    constructor(name: string, age: number, protected designation: string, protected company: string) {
        super(name, age, "10")
    }

    public introduce(): string {
        return `I'm working as ${this.designation} at ${this.company}. ${super.introduce()}`
    }

    public doWork() {
        
    }
}

function introduceYourself(person: Person) {
    console.log(person.introduce())
}


let person = new Person("Deepankar", 29)
introduceYourself(person)  // S: Yes A: Yes
// My name is Deepankar and my age is 29



let student = new Student("Deepankar", 30, "10")
introduceYourself(student) // S: Yes A: No
// My name is Deepankar and my age is 30 My Grade is 10   : 
// My name is Deepankar and my age is 30                  : S A

let wp = new WorkingProfessional("Deepankar", 29, "Founder", "Smaitic Labs")
introduceYourself(wp)