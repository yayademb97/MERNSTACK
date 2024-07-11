

//? Objectives:
        //! A) Practice reading JavaScript the same way as the interpreter reads it.

    /*
    *   Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:
    */ 

// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

//? Output: Undefined  || because JavaScript has a small quirk called "hoisting," where it moves function declarations to the top of the code before execution.
//?                    || Then So in our case, we don't have a function; we have a variable that is declared and initialized, 
//?                    || and we are trying to console.log this variable before its declaration. As a result, we will get undefined.



// console.log(example);
// let example = "I'm the example!";    


//? Output: error : ReferenceError: Cannot access 'example' before initialization
  
//!    1) 
console.log(hello);                                   
var hello = 'world';     

//? Output: undefined || The interpreter will move the declaration of the variable to the top of the code, so it will be accessible before its initialization.

//!    2)

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//? Output:   magnet  


//!    3)

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//? Output:   super cool   || Here we display the glabal variable that's " var brendan " outside the function, and we don't invoke the function


//!    4)
//*********************** 
//*    1st part
var food = 'chicken';   //* we declare and initialize the global variable 
console.log(food); //? OUtput: chicken   || We can acces to the global variable here
//************************************ */


//************************ 
//*     2nd part
eat();   //* We invoke the function before her declaration and we can apply "hoisting concept", In JavaScript, 
        //* hoisting prioritizes recognizing function declarations before function calls using the function keyword.
function eat(){
    food = 'half-chicken';   //! In the function, like children scope , we reassigne a new value to the global variable " food ", that take " half-chicken "
    console.log(food);   //? OUtput: half-chicken
    var food = 'gone';       //! We reassign again a new value without display method
}
//************************************ */
console.log("**************************************************************")


//!    5)

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//? Output:  error : mean is not a function

/*
*   Ce code présente une erreur parce que la fonction mean est déclarée comme une variable (var mean) après avoir été appelée (mean();). 
*   En JavaScript, les déclarations de fonctions avec var ne sont pas hissées (hoisted) comme les fonctions normales, 
*   donc lorsque mean() est appelée avant sa déclaration, 
*   JavaScript ne reconnaît pas mean comme une fonction, d'où l'erreur "mean is not a function".

*   En résumé, l'erreur se produit car mean est traitée comme une variable avant sa déclaration effective en tant que fonction.


*   ********************************************** (Anglais) **********************************************************************
*   This code throws an error because the function mean is declared as a variable (var mean) after it is called (mean();). 
*   In JavaScript, function declarations using var are not hoisted like normal functions. 
*   So, when mean() is called before its declaration, JavaScript does not recognize mean as a function, resulting in the error "mean is not a function".

*   In summary, the error occurs because mean is treated as a variable before it is actually declared as a function.

*/

//! Solution:
mean(); //* Firstly we invoked the function, the the function can be executed by hoisting 
console.log(food);    //* Output: chicken
function mean() {
    food = "chicken";  
    console.log(food);  //* Output: chicken
    var food = "fish";
    console.log(food);  //* Output: food
}
console.log(food);     //* Output:: chicken

console.log("***********************************************")


//!    6)

console.log(genre);
var genre = "disco";   //? Output: undefined
rewind();   //* We invoked the function, in JS we can apply the hoisting 
function rewind() {
    genre = "rock";
    console.log(genre);   //? Output: rock
    var genre = "r&b";
    console.log(genre);   //? Output: r&b
}
console.log(genre);       //? Ouput: disco


console.log("**************************************************************")

//!      7)

dojo = "san jose";   //* we declared and initialized the variable
console.log(dojo);   //? Output: san jose
learn();      //* We invoked the function, in JS we can apply the hoisting
function learn() {
    dojo = "seattle";   //* we declared and initialized the local variable 
    console.log(dojo);  //? Output: seattle
    var dojo = "burbank";   //* we declared and initialized the global variable inside the function
    console.log(dojo);  //? Output: burbank
}
console.log(dojo);     //? Output: san jose


console.log("***************************************************************")

//!      8) Bonus ES6: const

// console.log(makeDojo("Chicago", 65));  //* We invoked the function by assigning the value to the parameter
// //? Output: { name: 'Chicago', students: 65, hiring: true }
// //! Explanation: Creates a dojo named "Chicago" with 65 students, indicating they are hiring.
// console.log(makeDojo("Berkeley", 0));  //* We invoked the function by assigning the value to the parameter
// //? Output: error : dojo = "closed for now";  || TypeError: Assignment to constant variable. 
// //?         || Because we declare the variable with the key-word ` const `
// //?          and we can not reassign the new value   
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;    //* Destructuring here
//     dojo.students = students;   //* Destructuring here
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }


//! Solution:


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo.status = "closed for now";  // Adjusted to set a status property
    }
    
    return dojo;
}

//? Ouput: 

//? { name: 'Chicago', students: 65, hiring: true }
//? { name: 'Berkeley', students: 0, status: 'closed for now' }
//? { name: 'Chicago', students: 65, hiring: true }
//? { name: 'Berkeley', students: 0, status: 'closed for now' }

