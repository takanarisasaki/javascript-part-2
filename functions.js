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


