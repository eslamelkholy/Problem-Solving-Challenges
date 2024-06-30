class Node {
  constructor(name, time) {
    this.name = name;
    this.time = time;
  }

  getName() {
    return this.name;
  }

  getTime() {
    return this.time;
  }
}

class AnimalShelter {
  static DOG = 1;
  static CAT = 0;

  constructor() {
    this.tot = 0;
    this.dogs = [];
    this.cats = [];
  }

  enqueue(name, type) {
    this.tot += 1;
    const newNode = new Node(name, this.tot);
    if (type === AnimalShelter.DOG) {
      this.dogs.push(newNode);
    } else {
      this.cats.push(newNode);
    }
  }

  dequeueAny() {
    if (this.cats.length === 0) {
      return this.dequeueDog();
    } else if (this.dogs.length === 0) {
      return this.dequeueCat();
    } else {
      const dogTime = this.dogs[0].getTime();
      const catTime = this.cats[0].getTime();
      if (catTime < dogTime) {
        return this.dequeueCat();
      } else {
        return this.dequeueDog();
      }
    }
  }

  dequeueDog() {
    const name = this.dogs[0].getName();
    this.dogs.shift();
    return name;
  }

  dequeueCat() {
    const name = this.cats[0].getName();
    this.cats.shift();
    return name;
  }
}
const CAT = 0;
const DOG = 1;

const animal = new AnimalShelter();
animal.enqueue("james", DOG);
animal.enqueue("tom", DOG);
animal.enqueue("mimi", CAT);
console.log(animal.dequeueAny()); // should return "james"
console.log(animal.dequeueCat()); // should return "mimi"
console.log(animal.dequeueDog()); // should return "tom"
