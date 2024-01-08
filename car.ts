class Car {
  speed: number;
  make: string;
  constructor(speed: number, make: string) {
    this.make = make;
    this.speed = speed;
  }

  showInfo(): string {
    return `The car is from ${this.make} and it has speed of ${this.speed}km/hr`;
  }
}

class Viper extends Car {
  milage: number;
  constructor(speed: number, make: string, milage: number) {
    super(speed, make);
    this.milage = milage;
  }

  showInfo(): string {
    return `The car is from ${this.make}, it has a speed of ${this.speed} and a milage of ${this.milage}`;
  }
}

const car1 = new Car(70, "Ford");
console.log(car1.showInfo());

const car2 = new Viper(90, "Dodge", 30);
console.log(car2.showInfo());

console.log(car2.milage);
