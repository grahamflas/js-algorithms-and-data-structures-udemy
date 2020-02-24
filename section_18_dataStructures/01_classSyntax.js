document.addEventListener("DOMContentLoaded", () => {

  let ul = document.getElementById("linked");
  let li = document.createElement("li");
  li.innerText = "01_classSyntax.js";

  ul.append(li)
});


/*
+ The method used to create a new class MUST be called `constructor`
+ A class is a pattern for creating an instance of a class

====================
Instance Methods
====================
+ These are methods that only work on an instance of a class-- as opposed to working at the class level


*/

class Student {
  constructor(firstName, lastName, year){
    this.firstName = firstName, 
    this.lastName = lastName,
    this.grade = year,
    this.tardies = 0, 
    this.scores = [];
  }

  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  markLate(){
    this.tardies += 1;
    return `${this.fullName()} has been late ${this.tardies} ${this.tardies > 1 ? "times" : "time"}.`;
  }

  addScore(score){
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage(){
    let sum = this.scores.reduce((a,b) => a + b)
    return sum / this.scores.length
  }
}

/*
Whenever we want to create a new INSTANCE of a class, use the `new` keyword.
*/
let graham = new Student("Graham", "Flaspoehler");
let ada = new Student("Ada", "Lovelace");

/*
====================
Static Methods
====================
+ Static methods are called without instantiating their class and CANNOT be called through a class instance
+ Most often used to create utility functions for an application

+ Use case for a static method would be one that calculates the distance between two points of a Point class
  ++ It wouldn't make sense to make this an instance method, because you need TWO INSTANCES of Point to calculate the distance
*/

class Point {
  constructor(x, y){
    this.x = x; 
    this.y = y;
  }

  static distance(pointA, pointB){
    let dx = pointA.x - pointB.x;
    let dy = pointA.y - pointB.y;

    return Math.hypot(dx, dy);
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(10,10);
