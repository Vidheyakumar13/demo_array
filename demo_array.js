let pets= ['dogs', 'cats', 'rats'];

// Accessing an array Element

let dogs = pets[0];
console.log(dogs);

// Array Length Property

let len = pets.length;
console.log(len);

// Access the Last element of the array

let last = pets[pets.length - 1];
console.log(last);

// Loop over an Array Item

pets.forEach((item, index, array) => { 
    console.log(item, index);
})

// Array Methods

// 1. toString()

let str = pets.toString();
console.log(str);

// 2. pop()

let remove = pets.pop();
console.log(remove)

// 3. push()

let add = pets.push('Lion')
console.log(add)

// 4. shift()

let first = pets.shift();
console.log(first);

// 5. unshift()

let addFirst = pets.unshift('Tiger')
console.log(addFirst);

// 6. concat()

let wildAnimals = ['Cheetha', 'Black Panther', 'Wild Boar']
let merge = pets.concat(wildAnimals);
console.log(merge);

// 7. Sort()

let arrange = pets.sort();
console.log(arrange);

// 8. reverse()
let arrangeBack = pets.reverse();
console.log(arrangeBack);

//9. map()

let num1 = [1,3,4,6,8,9,2];
let num2 = num1.map(multiply)
function multiply(value){
    return value*2; 
}
console.log(num2);

// 10. filter()

let num3 = num2.filter(comp)
function comp(value){
    return value>2;
}
console.log(num3);

// 11. reduce()

let num4 = num1.reduce(less)
function less(total, value){
    return total+value; 
}
console.log(num4);