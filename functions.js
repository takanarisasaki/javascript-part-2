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
console.log("Sorted String:", arrayOfString);

