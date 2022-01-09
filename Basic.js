// WELCOME TO JavaScript WORLD 

"use strict";  //it allows as to not make syntax miskate 

// print somthing on the console (mostly used in debgging)
// console.log("hello world");


// Variables : declaration by use of var keyword 
// var Name = "Mansi";
// var age = 20;
// var avg_marks = 99.99 ; 

// //use variable
// console.log(Name);
// console.log(age);
// console.log(avg_marks);

// // change value of variable
// Name = "Smita";
// // Age= 24;   //syntax error : as we didnot define Age 
// avg_marks = 89;



// // let keyword : create variable but with some restriction 
// let clgName= "SVVV" ;
// // let clgName = "IIT";   //throw erroe as clgNamme is already declared 



// // Constant : declartion by const keyword
// const pi = 3.14;
// // pi= 2;           //throw error as constant value doesnot change
// console.log(pi);


// Datatypes -> Primitive -> string, number, booleans, undefine, null, BigInt, symbol


// typeof operator : show which type of data it is 
// let age=12;
// let fname = "Tannu";
// console.log(typeof age); //number
// console.log(typeof fname); //string 


// CONVERT TRICKS
// trick to convert number to string-> add "" blank space after number 
// console.log(typeof(age + "")); //age is number but now it become string

// trick to convert string to number-> add + before string
// console.log(typeof +"hello");  //hello is string but now it become number


// CONVERT 
// convert number to string
// let age = 20;
// console.log(typeof age);
// age = String(age);
// console.log(typeof age);


// // String indexing : start from 0 and last index = length-1
// console.log(Name.length);  //length is equal to no. of character in the string and spaces are encluded 

// String methods **String is immutable** i.e original string doesnot change

//  1. trim() : remove before or after spaces 
// let School="     Madhav     ";
// console.log(School);
// console.log(School.length);
// let newString = School.trim();
// console.log(newString);
// console.log(newString.length);

//  2. toUpperCase()
// let firstname ="mansi";
// console.log(firstname.toUpperCase());

//  3. toLowerCase()
// let surname = "PRAJAPATI";
// console.log(surname.toLocaleLowerCase());

//  4. slice : start and end index from where you want slice . strt index include but end index not included
// let sliceString = firstname.slice(-2);  //- indexing give value from end of the string 
// console.log(sliceString);
// sliceString = firstname.slice(0,3); 
// console.log(sliceString);


//STRING CONCATINATION -> adding string to make one sentence or whatever called
// let fname= "Mansi";
// let lname = "Prajapati";

// let fullname = fname + " " + lname;
// console.log(fullname);


// TEMPLATE STRING -> adding values in the sentence like :-> my name is "name" and i m "age" year old; 
                                                     //  :-> my name is ${name} and i m ${age} year old;
// let age=20;
// let name = "Mansi";
// let a = "My name is " + name + " and i m " + age + " year old"; //without use of template string
// console.log(a);

// let b = `my name is ${name} and i m ${age} year old`;
// console.log(b);


// Unefine Dataype : when we create variable but not assign any value to it thn it is undefine

// let n;
// console.log(typeof n);
// var m;
// console.log(typeof m);
// const s;
// console.log(typeof s); //throw error as we have to assign any value to constant it never be undefine

// // NULL datatype: empty or null  
// let num = null;
// console.log(num);
// console.log(typeof num); 
// //typeof null is shown as object. it is a bug in javaScript 

// // BIGINT datatype: store big value 
// let sum= BigInt(12321563614611111); 
// let num1 = 1321356n;  //both are the ways to declear bigint 

// //**for performing operation on bigInt all variable must be of bigint type
// console.log(Number.MAX_SAFE_INTEGER); //print max value of int we can store in number 
// console.log(sum);
// console.log(num1);


// COMPERISION OPERATOR : > , < , >= , <= , == , === , != , !==

// >= , <= , < , >
// let a = 10;
// let b = "10";
// console.log(a>=b);

// == : this operator only compaire value it doesnot check datatype in JavaScript
// a = "10";
// console.log(a==b); //give true as "10" = 10 in value but not in datatype

// === : this operator compaire datatype as well as value 
// console.log(a===b); //give false 

// !=
// console.log(a!=b); //give false bz 10 = 10 //!= only compaire value not datatype

//  !==
// console.log(a!==b); //give true bz they are not same 


//  IF ElSE CONDITION
// let a=10;
// let b = 20;
// if(a>b){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }


// Falsy values: the values which remains false like -> false, "", null, undefined, 0 
// Truthy values: the values which remain true like -> true, 1, -1, "abc"

// let fname = "";
// if(fname){
//     console.log(fname);
// }
// else {
//     console.log("empty");  //output will be "empty" bz "" is a falsy value
// }


// OPERATORS 

//  Ternary Operator :  condition ? (true thn write this):(else write this)
// let age =1;
// let drink = age>5 ? "coffee" : "milk";         
// console.log(drink); 


// AND && and OR || operator 

// and && -> all conditons must be true 
// or || ->  one condition must be true 


// SWITCH STATEMENT 
// let day = 5;

// switch(day){
//     case 0 : console.log("Sunday");
//     break; 

//     case 1 : console.log("Monday");
//     break; 

//     case 2 : console.log("Tuesday");
//     break; 

//     case 3 : console.log("Wednesday");
//     break; 

//     case 4 : console.log("Thursday");
//     break; 

//     case 5 : console.log("Friday");
//     break; 

//     case 6 : console.log("Ssturday");
//     break; 

//     default: console.log("invalid day");
// }



// LOOPS

// while loop
// let i=1;
// while(i<=10) {
//     console.log(`2*${i}= ${i*2}`);
//     i++;
// }

// do while: execute first and thn check condition 
// let i=5;
//  do{
//      console.log(`hello world ${i}`);
//       i--;
//      }while(i>=1);

// for loop
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// for of loop
// const arr = [1,3,5,7,9];
// for(let num of arr){
//     console.log(num);
// }

// for in loop 
// const arr = [1,2,3,4,5];
// for(let index in arr){
//     console.log(arr[index]);
// } 



// ARRAY : ordered collection of  items .it is mutable .it is a reference type .array is a object 
// let even_num = [2,4,6];
// console.log(even_num);

// even_num[1] = 3 ;
// console.log(even_num);

// console.log(Array.isArray(even_num));  //this is a function to find the obj is a array or not 

// // push ---> used to add element in the array at last 
// even_num.push(8);
// console.log(even_num);

// // pop  ---> used to remove element/pop and give to us from the last in the array 
// even_num.pop();
// console.log(even_num);

// unshift ---> add element at first in the array
// even_num.unshift(0);
// console.log(even_num);

// shift  ---> remove element or remove and give value to us at first of the array
// even_num.shift();
// console.log(even_num);

// **push and pop are fast as compaired to shift and unshift** because of shifting

// REFERENCE TYPE and PRIMITIVE TYPE 
// reference type : if we modify in one value and all the other assinged value get changed. eg, array
// primitive type : if we modify in one value NO other assigned value change. eg, all primitive data types 


// Clone an array 
// 1. by slice() method
// let array1 = [1,2,3,4];
// let array2 = array1.slice(0);
// console.log(array1);
// console.log(array2);

// 2. by concating array
// let array2 = [].concat(array1);
// console.log(array1);
// console.log(array2);

// 3. by spread operator ---> ... is spread operator
// let array2 = [...array1];
// array1.push(10);
// console.log(array1);
// console.log(array2);

// Concatenate two arrays 
// let arr = [0,2];
// let arr1 = [1,3,4,5];
// let arr2 = arr1.slice(0).concat(arr).concat(10,12,15);  //by slice method
// let arr3 = [].concat(arr1,10,15,60);                   // by concat method 
// let arr4 = [...arr1 , ...arr];                        // by spread operator
// console.log(arr);
// console.log(arr1);
// console.log(arr4);


// Array destructuring: assignning values of array to variables
// const arr = [1,2,3,4];
// let [a,b, ,d] = arr;
// console.log(a,b,d);



// OBJECT : it is reference type , real world entity, it stores object key pairs,it doesnot have index
// const person = {name: "mansi" , age: 20 , hobbies: ["sleeping","playing"]}; //declaration
// console.log(person.hobbies); //access data/properties of object by . notation
// console.log(person["name"]); //access data from [] bracet notation
// console.log(person.age);
// person.gender = "female";   //adding key to object
// console.log(person);

// Accessing Object 

// 1. for in loop
// const person = {name: "mansi" , age: 20 , hobbies: ["sleeping","playing"]}; 
// for(let key in person){
//     console.log(key);         //return keys i.e. name,age,hobbies
// }
// for(let key in person){
//     console.log(person[key]);   //return values of keys 
// }

// 2. Object keys 
// console.log(Object.keys(person));  //return array of keys : name , age, hobbies
// // to find type 
// console.log(typeof(Object.keys(person)));          //return object 
// console.log(Array.isArray(Object.keys(person)));  //give true because Object keys give us array of keys 
// // for of loop
// for(let key of Object.keys(person)){
//     console.log(key);                 //return keys i.e. name, age, hobbies
// }
// for(let key of Object.keys(person)){
//     console.log(person[key]);         //return values of keys i.e. mansi, 20.....
// }


// computed properties 
// let we have some variables and with them we have to make keys of their values
// const key1 = "objkey1";
// const key2 = "objkey2"; 
//with the value of key1 and key2 we have to make keys of object 
// const value1 = "1";
// const value2 = "2";

// const obj = { objkey1 : "1" , objkey2 : "2"};  //here we have to write but i dont want 
// console.log(obj);   

//we can do this 
// const obj = { [key1] : value1 , [key2] : value2};
// console.log(obj);

// we can also do this 
// const obj1 = {};
// obj1[key1] = value1;
// obj1[key2] = value2;
// console.log(obj1);


// spread operator in object : used to clone object 
// **a object doesnot have same key and if one is there than last key values get printed 
// const obj1 = { name: "mansi" , age : 20};
// const obj2 = {name1: "sumit" , age1 : 19};
// const newobj = {...obj1, ...obj2 , surname : "prajapati"};
// console.log(newobj);

// we can also spread a string by using spread operator
// const name = {..."name"}; 
// console.log(name);      //return { 0: 'n', 1: 'a', 2: 'm', 3: 'e'}


// Object Destructuring : used to assign values of object to vairiable
// const info = {name: "mansi" , id : "3123", age:20 , height: 465};
// // i have to assign this values to separate variables 
// const nm = info.name;  //this way is too lengthy 
// const idd = info.id;
// console.log(nm, idd);

// //we use object destructuring 
// const {name,id} = info;
// console.log(name, id);

// // if we want to give different name to our variable 
// const {name:v1 , id:v2 , ...mf} =  info;  //...mf give rest of the object values in mf variable we can give any name with spread operator
// console.log(v1,v2);
// console.log(mf);