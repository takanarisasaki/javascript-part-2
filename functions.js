//Questions on Functions and Object

//Q1: Sort 
function compare(inputString1, inputString2) {
    if (inputString1 > inputString2) {
        return 1;
    }
    else if(inputString1 < inputString2) {
        return -1;
    }
    else {
        return 0;
    }
}

var string1 = "Hello";
var string2 = "Bye";
console.log(compare(string1,string2));
//Create an array of strings and try to get it sorted using your new function.
var arrayOfString = ["Hello", "Food", "Computer", "Coding"];
//sort method takes two strings at random and compare them with the function compare.
//Then if 1 is returned, string1 is placed to the right, and vice-versa. 
//It does this for all combinations of arrayOfString, ending up with sorted array
//using compare function.
arrayOfString.sort(compare);
//arrayOfSTring is now already sorted with arrayOfSTring.sort(compare)
console.log("Sorted String:", arrayOfString);


var numbers = [1,2,4,1,3]

//Question 2: Sort Object Properties
var arrayOfObject = [

    {
        name: "Takanari",
        email: "takanari.s@hotmail.com"
    },
    
    {
        name: "Bob",
        email: "bob@yahoo.ca"
    },
    
    {
        name: "John",
        email: "john@gmail.com"
    }

];

function longerName(obj1, obj2) {
    if (obj1.name.length < obj2.name.length) {
        return 1;
    }
    else if (obj1.name.length > obj2.name.length) {
        return -1;
    }
    else {
        return 0;
    }
}

function alphabetical(obj1, obj2) {
    if (obj1.email > obj2.email) {
        return 1;
    }
    else if(obj1.email < obj2.email) {
        return -1;
    }
    else {
        return 0;
    }
}

console.log(arrayOfObject.sort(longerName));
console.log(arrayOfObject.sort(alphabetical));


//Question 3: Array.prototype.map
function numSquared(num) {
    return Math.pow(num,2);
}

var arrayNum = [3,5,7,8,10];
//The map() method creates a new array with the results of calling a provided 
//function on every element in this array.
console.log(arrayNum.map(numSquared));


//Question 4: Mapping Object Properties
function powerObjectPropertyNum(obj) {
    return Math.pow(obj.num,2);
}

var arrayOfObjOfNum = [
    
    {
        num: 2,
        salut: "hello"
    },
    
    {
        num: 5,
        salut: "bye"
    },
    
    {
        num: 10,
        salut: "good night"
    }
    
];

console.log(arrayOfObjOfNum.map(powerObjectPropertyNum));


//Question 5:Functions within Function
function operationMaker(operation) {
    
    if (operation === "add") {
        return function adder(num1, num2) {
            return num1 + num2;
        }
    }
    
    else if (operation === "subtract") {
        return function subtract(num1, num2) {
            return num1 - num2;
        }
    }

    else if (operation === "mult") {
        return function mult(num1, num2) {
            return num1 * num2;
        }
    }
        
    else if (operation === "div") {
        return function div(num1, num2) {
            return num1 / num2;
        }
    }

}

var adder = operationMaker("add");
var sum = adder(5,10);  //15
console.log(sum);

var subtract = operationMaker("subtract");
var difference = subtract(10,5);
console.log(difference);

var division = operationMaker("div");
var divide = division(20,5);
console.log(divide);

var multiplier = operationMaker("mult");
var product = multiplier(5,10);   //50
console.log(product);


//Question 5: Better way
function operationMaker2(operation) {
    return function(num1, num2) {
        if (operation === "add") {
            return num1 + num2;
        }
        else if (operation === "subtract") {
            return num1 - num2;
        }
        else if (operation === "mult") {
            return num1 * num2;
        }
        else if (operation === "div") {
            return num1 / num2;
        }
    }
}


var adder2 = operationMaker2("add");
var sum2 = adder2(10,10);  //15
console.log(sum2);

var subtract2 = operationMaker2("subtract");
var difference2 = subtract2(10,10);
console.log(difference2);

var division2 = operationMaker2("div");
var divide2 = division2(10,10);
console.log(divide2);

var multiplier2 = operationMaker2("mult");
var product2 = multiplier2(10,10);   //50
console.log(product2);

//faster way to do the same thing as above
console.log(operationMaker2('add')(100,50));
