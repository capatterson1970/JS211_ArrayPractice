let cars = ["Ford", "Honda", "Chevy", "BMW"];
let moreCars = ["GMC", "Jaguar", "Bently", "Honda"];
let totalCars = cars.concat(moreCars);
let stringOfCars = totalCars.join();
let carsInReverse = totalCars.reverse();
let removedCars = [];


console.log(cars.length);
//console.log(totalCars);
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));
console.log(stringOfCars);

totalCars = stringOfCars.split(',');

console.log(totalCars);
console.log(carsInReverse.sort());
console.log(carsInReverse.indexOf('BMW'));

removedCars.push(totalCars.slice(0, 2));
removedCars.push(totalCars.slice(7));

console.log(removedCars);

console.log(carsInReverse);
carsInReverse.splice(1, 3, "Ford", "Honda");
console.log(carsInReverse);

carsInReverse.push("Bently", "Chevy");
console.log(carsInReverse);

console.log(carsInReverse.pop());
console.log(carsInReverse.shift());
console.log(carsInReverse.unshift("Bronco"));

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

const addTwo = (a) => {
    return a + 2;
}

numbers.forEach(element => addTwo(element));

