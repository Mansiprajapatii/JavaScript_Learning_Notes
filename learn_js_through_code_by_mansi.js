// WELCOME TO JavaScript WORLD

"use strict"; //it allows as to not make syntax miskate

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
//    let clgName= "SVVV" ;
// // let clgName = "IIT";   //throw erroe as clgNamme is already declared

// // Constant : declartion by lconst keyword
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
// trick to convert number to string-> add "" blank string after number
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
/// let School="     Madhav     ";
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
// console.log(surname.toLowerCase());

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
//typeof null is shown as object. it is a bug in javaScript

// // BIGINT datatype: store big value
// let sum= BigInt(12321563614611111);
// let s = BigInt(13216544659812316);
// console.log(s);
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

//     case 6 : console.log("Saturday");
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

// for of loop  ****mostly used for array
// const arr = [1,3,5,7,9];
// for(let num of arr){
//     console.log(num);
// }

// for in loop ****mostly used in object
// const arr = [1,2,3,4,5];
// for(let index in arr){
//     console.log(arr[index]);
// }

// forEach loop
// const arr = [1,2,3,4,5,6];
// arr.forEach( (a) => (console.log(a)));

// ARRAY : ordered collection of  items .it is mutable .it is a reference type .array is a object
// let even_num = [2,4,6];
// console.log(even_num);
// let a = even_num;
// console.log(a);
// even_num[1] = 3 ;
// console.log(even_num);
// console.log(a);

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
// let array1 = [1, 2, 3, 4];
// let array2 = array1.slice(0);
// array1.push(12);
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
// let arr2 = arr1.slice(0).concat(arr).concat(10,12,15);    //by slice method
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

// Methods and objects
// var user = {
//     name: "mansi",
//     lastname : "soni" ,
//     age : 50 ,
//     count: 0,
//     countlist : [],
//     countnum : function(num){
//      this.countlist.push(num);
//     },

//     getCount : function (){
//         return `${this.name} has ${this.countlist.length} number of counts `
//     }
// };

// var n = user.name;
// console.log(n);
//  user.countnum(1);
//  user.countnum(2);
//  user.countnum(5);
// console.log(user.getCount());

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

// object inside array  : very useful for real world application
// const users  = [
//     {userid: 1 , fistname: "mansi" , gender: "female"},
//     {userid: 2 , fistname: "mohit" , gender: "male"},
//     {userid: 3 , fistname: "nitin" , gender: "male"}
// ]

// for(let user of users){
//     console.log(user);
// }

// nested destructing :
// const users = [
//     {usid: 1, firstname: "harshit", age: 20},
//     {usid: 2, firstname: "mansi", age: 12},
//     {usid: 3, firstname: "nasuko chan " , age:80}
// ]

// const [user1, user2, user3] = users;
// console.log(user3);

// const [{usid:id, age:ag}, , {usid:nm2 , firstname:name}] = users;
// console.log(name);
// console.log(id);

// FUNCTIONS : repeat anytime and write one time
// function sayhello(){
//     console.log("hello there!");   //define a function
// }
// sayhello();    //calling a function

// function addTwoNum(num1,num2){
//     return num1+num2;
// }
// console.log(addTwoNum(10,20));

// const addTwoNum = function(num1,num2){   //function expression
//     return num1+num2;
// }
// console.log(addTwoNum(4,5));

// ARROW function : similar to funtion different in syntax more like function expression
// const sumTwoNum = (num1, num2) => {
//     return num1+num2;
// }
// console.log(sumTwoNum(40,5));

// const add = (num1,num2) => num1+num2;    //we can write arrow fun like this also. this function is same as sumTwoNum fun
// console.log(add(48,2));

// const sayName = () => {
//     console.log("my name is Gojo");
// }
// sayName();

// CALLBACK function : the function which do not requried any declaration
// syntax =
// var name = () => {}; //when there is something to return
// var name = () => (); //when u dont want to return

// iseven fun to check even number (normal function)
// function iseven(element){
//     return element%2 === 0 ;
// }

// var fun = [2,4,6].every(iseven);  //every function check every element of the array. here we pass iseven function as reference
// console.log(fun);

// same code we can write in just 1 line with callback function
// var fun = [2,4,6].every( (element) => (element%2 === 0 ));
// console.log(fun);

// HOISTING : calling function before declaration. it only possible in js language and only in function declaration case
// hello();
// function hello() {
//     console.log("hello jully");   //it work fine
// }

// n();
// const n = function(){
//     console.log("name");   // showing cannot access 'n' before initialization
// }

//Function inside function
// function myfun(){

//     const name = function(){
//         console.log("manish");
//     }
//     name();

//     const age = (a) => {
//         console.log("age is" , a);
//     }
//     age(20);

//     const add = (n,m) => n+m ;
//     console.log(add(1,2));

//     console.log("myfun works!");
// }
// myfun();

// LEXICAL scope : the area where that particular part of code belongs
// in js we can access variable from everywhere in lexical scope

// function myapp(){
//     const name = "mansi";
//     const fun = function(){
//         const aaa = 12;
//         console.log("fun function" , name);
//         console.log(aaa);

//     }
//     fun();
// }
// myapp();

// block scope vs function scope
// let and const are block scope
// var is funtion scope

// block scope means we can access it only within that block
// {
//     let n = "monny";
//     console.log(n);    //it works here { } n is declare within the block nd envovke also
// }
// //  console.log(n);         //give error msg: n is not defined
// {
//     const n = "tonny";
//     console.log(n);       //both the blocks are diffrent so same variable name doesn't give any error
// }

// //function scope means we can access any where
// {
//     var n = "sommy";
// }
// console.log(n);      //it workd fine bz of function scope

// default parameters
// function add(a,b=0){
//     return a+b;
// }
// // const ans = add(4,8);  //ans is 12
// // const ans = add(4);      //ans is 4 as b is by default set as 0
// console.log(ans);

// rest parameter
// function myfun(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myfun(1,2,3);        //simple fun with same number of parameters and arguments
// but what if i want to pass many numbers of agument to my function as array
// or we can say that i have to pass rest of the aruments as array in the function
// for this we use SPREAD operator ...

// function myfun(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }
// myfun(1,2,3,4,5,6,7);

//lets understand this with a example
// wa funtion to add all number pass as argument in the function
// function sumAll(...num){
//     let sum =0;
//     for(let number of num){
//         sum = sum+ number;
//   }
//   return sum;
// }
// console.log(sumAll(4,6,8,8));

// Parameter destructuring : mostly used in object and highly used in react js
// const person = {
//     fname: "mansi",
//     lname: "prajapati",
//     gender: "female"
// };

// printig info without destructuring
// function printDetails(obj){
//     console.log(person.fname);
//     console.log(person.lname);
//     console.log(person.gender);
// }
// printDetails(person);

// printing values with destructuring
// function printDetails({fname , gender,age , lname}){
//     console.log(fname);
//     console.log(lname);
//     console.log(gender);
//     console.log(age);

// }
// printDetails(person);

// fill : it is used to fill full array with the given value i.e arr.fill(0)
//  arr = [ 0, 0 , 0 , 0];
// var arr = [1,2,23,45,3,5,7,90];
// console.log(arr.fill(0));
// console.log(arr.fill("m" , 3));  //first argument is what u want to fill inn the array and the 2nd argument is from which index you want to fill the array as "m". here 3 is exclusive
// [
//     1,   2,   23,  'm',
//     'm', 'm', 'm', 'm',          //output
//     'm'
//   ]
// console.log(arr.fill("m" , 2 ,5));
// [
//     1,   2, 'm', 'm',
//     'm', 5, 7,   90
//   ]

// Filter : give new array with given condition with call back function
// var mynum = [2,3,45,23,86,4,67,12,42];
// var newarr = mynum.filter( (num) => (num!=86));  //give new array witout number 86
// console.log(newarr);

// slice : used to make a slice of given array, subarray type
// var arr = [1,2,3,4,5];
// console.log(arr.slice(0,3));   //0 is inclusive but 3 is exclusive

// splice : used to insert element by deleting given no. of element
// var array = [1,2,3,4,5,6,7,8];
//  array.splice(2,3,"hi" , "hello");       //here 1st argument is the starting point from where u want to delete element and
//                               // 2nd argument is the number of counts of element and 3rd contain value to be added
// console.log(array);         //output =  [ 1, 2, 'hi', 6, 7, 8 ]

// THIS keyword : for all regular functions calls, this points to window object

// call back function : pass a function as a refence to other function
// function myfun1(name){
//     console.log(`my name is ${name}`);
//     console.log("i m myfun1");
// }

// function myfun2(callback){
//     console.log("i m myfun2");
//     callback("mansi");
// }
// myfun2(myfun1);    //passing a function as an argument or as a reference

// function returning function
// function myfun(){
//     function hello(){
//         console.log("hello");
//     }
//     return hello;
// }
// const ans = myfun();
// console.log(ans);        //ans become function bz myfun return a function
// ans();    //we can simply call it as like this

// MAP METHOD : mostly used in array and it always returns something and it always gives new array
// const arr = [1,2,3,4,5,6];

// const square = arr.map( (a) => {return a*a});  //map method act like for each loop and here we use arrow funtion , we can also use any funtion
// console.log(square);

// another example of map method
// const users = [
//         {usid: 1, firstname: "harshit", age: 20},
//         {usid: 2, firstname: "mansi", age: 12},
//         {usid: 3, firstname: "nasuko chan " , age:80}
//     ];

//     const arrFirstname = users.map( (a) => {return a.firstname});
//     console.log(arrFirstname);

// REDUCE METHOD : mostly used for array, use callback function, take 2 parameter one is accumilator and 2nd is current value
// const numbers = [1,2,3,4,5];   //we want to add all the element and get sum

// const sum = numbers.reduce( (accumulator ,  currentvale) => { return accumulator + currentvale});
// console.log(sum);     //give 15

// how it works
// accumuator          currentvalue         return
//   1                     2                  3
//   3                     3                  6
//   6                     4                 10
//  10                     5                 15

//understand reduce method with another example
// const userCart = [
//     {productId : 1 , productName: "laptop" , price: 50000},
//     {productId : 2 , productName: "tv" , price: 80000},
//     {productId : 3 , productName: "mobile" , price: 15000},
// ]

// const totalAmount = userCart.reduce( (totalPrice , currentvalue)  => { return totalPrice + currentvalue.price},0)   //here 0 is the initial value of totalprice and currentvalue strt from 1st object i.e., of price 50000
// console.log(totalAmount);

// SORT METHOD : used for sorting but initially it sort inputs as strings even if it is a number
// const number = [20,2,75,3,8,51,6];
// number.sort();
// console.log(number);  // output : 2, 20, 3, 51,6, 75, 8

// to overcome this we can use this
// number.sort( (a,b) => (a-b));  //for acending order
// number.sort( (a,b) => (b-a));  // for decending order
// console.log(number);          // output : 2,  3,  6, 8, 20, 51, 75

//another example
// const userCart = [
//         {productId : 1 , productName: "laptop" , price: 5000},
//         {productId : 2 , productName: "tv" , price: 500},
//         {productId : 3 , productName: "mobile" , price: 1500},
//         {productId : 4 , productName: "cable" , price: 180},
//         {productId : 5 , productName: "sticker" , price: 600},
//     ]

// userCart.sort( (a,b) => (a.price-b.price));
// console.log(userCart);
// output
// { productId: 4, productName: 'cable', price: 180 },
// { productId: 2, productName: 'tv', price: 500 },
// { productId: 5, productName: 'sticker', price: 600 },
// { productId: 3, productName: 'mobile', price: 1500 },
// { productId: 1, productName: 'laptop', price: 5000 }

// SOME MEthod : any of the one value which satisfied the given condition is present in the array thn it return true
// const  number = [1,2,4,3];
// const ans = number.some( (num) => (num%2 === 0));
// console.log(ans);  //return true as 2 and 4 are even

// iterables : in which we can apply for of loop. like string, array are iterables
// string
// const fname = "mansi";
// for(let n of fname){
//     console.log(n);   //output:   m  a  n  s  i
// }

// array
// const arr = [ 1,3,3,53,32];
// for(let a of arr){
//     console.log(a);  //output: 1 3 3 53 32
// }

// object is not iterable
// const obj = { key: 1 , key2 : 2};
// for(let objs of obj){
//     console.log(objs);   //give error as objects are not iterables
// }

// SET : it is iterable, store data , no index based access, order is not guarented, unique itmes only no duplicates allowed, sets also have its own methods
// const num = new Set( [1,2,3,4]);
// console.log(num);  //output: { 1, 2, 3, 4 }

// const numbers =  new Set();
// numbers.add(1);
// numbers.add("mansi");
// numbers.add([123,321]);
// numbers.add(["item"]);
// console.log(numbers)  //output:  { 1, 'mansi', [ 123, 321 ], [ 'item' ] }
// we can also store same array

// MAP data structure : it is itreable, stored data in ordered fashion, store key value pair (like object), duplicate keys are not allowed like objects
// in object we can only have string or symbols as key
// in map we can use anything as key like array, number, string

// const persons = new Map( [ ['fname', 'sonu'], [ 'lname' , 'soni']]);
// console.log(persons); //output : { 'fname' => 'sonu', 'lname' => 'soni' }

// //also add value in map as like this
// const person = new Map();  //make new map in the memory
// person.set('fname','mansi');  //set method is used to add keys in the map
// person.set('lname','soni');
// person.set('age',15);
// person.set([1,2],'array');
// person.set(1,'one');

// console.log(person.get('fname'));  //access keys of map
// for of loop to access all keys of map with the help of keys method
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
//output : fname string
// lname string
// age string
// [ 1, 2 ] object
// 1 number

//we can directly destructure map with the for of loop as map give array of key pair in return
// for(let [key , value] of person){
//     console.log(key, value);
// }
// output
// fname mansi
// lname soni
// age 15
// [ 1, 2 ] array
// 1 one

// real life example of map and object
// when u have a object and want to store that data in other with addition of some extra work
//
// const person = {
//     fname: "ayush",
//     id:101
// }

// const extraInfo = new Map();
// extraInfo.set( person, {age: 16 , gender: "male"});
// console.log(person.id);
// console.log(extraInfo.get(person).age);

// ClONE using Object.assign
// const obj = { key1: 1, key2: 2};
// we want to clone obj to obj2,
// const obj2 = {...obj};
// console.log(obj2);
// console.log(obj);
//but it create some problem like if we change or add new keys in the obj2 it will also change in obj
// to overcome this we can use Object.assign

// const obj2 = Object.assign( {} , obj);
// //if we want to add keys in obj2
// obj2.key3 = 3;
// console.log(obj2);
// console.log(obj);

// optional chaining ?.  : if we wan to access somthing and that thing is not present it give error to avoid this we can use ?.
// const user = {
//     fname: "mansi",
//     // address: { houseNumber : '12646'}
// }

// console.log(user.fname);
// console.log(user.address);
// // console.log(user.address.houseNumber);  //it will work but what if address key is not there it give error as we want to access undefined thing
// console.log(user?.address?.houseNumber); //give undefined as output

// call , apply,  bind

// call method : used to call a funtion
// const user1 = {
//     fname: "mansi",
//     age: 10,
//     about: function(gender){
//         console.log(this.fname , this.age , gender);
//     }
// }

// const user2 = {
//     fname : "sumit",
//     age: 12
// }
//i want to call about function for user2
// user1.about.call(user2);
// user1.about.call(user2, "male")

// same thing we can do while declaring about funtion out of the object
// function about(gender){
//             console.log(this.fname , this.age , gender);
//         }
//   const user1 = {
//   fname: "mansi",
//   age: 10, }

//  const user2 = {
//   fname: "mansu",
//   age: 14 , }

// about.call(user2 , "female");

// apply : same as call used to call function but in apply we can pass value in array as compaire to separate values
// about.apply(user1 , ["female"]);

// bind : it return a funtion and we can call it
// const func = about.bind(user1 , "female");
// func();

//proto : used to give access to object to search with reference
// const userMethods = {
//     about: function (){
//         return `${this.fname} is ${this.age} years old`;
//     },
//     sing: function(){
//         return 'hole hole ho jayega pyar';
//     }
// }

// function createUser(fname,age,email,gender){
//     const user = Object.create(userMethods); // here object.create give us a empty object along with refrence of userMethods
//     user.fname = fname;
//     user.age = age;
//     user.email= email;
//     user.gender = gender;

//     return user;
// }

// const user1 = createUser("mansi" , 20, 'man@gmail.com' , "female");
// const user2 = createUser("sumit" , 10, 'sum@gmail.com' , "male");

// console.log(user1.about());
// console.log(user2.sing());

// prototype : only function provide prototype, prototype is like a object,it is free space provide by functions
// function hello(){
//     console.log("hello");
// }
// hello.prototype.abc = "abc";  //adding abc proterty in hello
// hello.prototype.sing = ()=> {return "lalalala" ; }

// console.log(hello.prototype.abc);

//Relation between proto and prototype
//As we use another funnction to access the object or methods of other function with the help of Object.create (proto)
//similar work we can do with prototype
// function createUser(fname,age){
//         const user = Object.create(createUser.prototype); // here object.create give us a empty object along with refrence of createUser.prototype
//         user.fname = fname;
//         user.age = age;
//         return user;
//     }

// createUser.prototype.about = function()  { return `${this.fname} is ${this.age} years old`};
// createUser.prototype.sing  = () => { return 'hole hole ho jayega pyar'};

// const user1 = createUser("mansi" , 20);
// const user2 = createUser("sumit" , 10);

// console.log(user1.age);
// console.log(user1.sing());
// console.log(user1.about());

//new keyword
//the above work of code we can do same this new keyword

// function CreateUser(fname, age) {
//   //constructor function
//   this.fname = fname;
//   this.age = age;
// }
// CreateUser.prototype.about = function () {
//   return `${this.fname} is ${this.age} years old`;
// };
// CreateUser.prototype.sing = () => {
//   return "hole hole ho jayega pyar";
// };

// const user1 = new CreateUser("mansi", 20);
// const user2 = new CreateUser("sumit", 10);

// console.log(user1.age);
// console.log(user1.sing());
// console.log(user1.about());

// Class : it is a blueprint of object / instance
// class Animal{
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }

//   eat(){
//     return `${this.name} is eating.`;
//   }
// }

// class Dog extends Animal{
//   constructor(name,age,speed){
//     super(name,age);       //act as parent class
//     this.speed = speed;
//   }
//   run(){
//     return `${this.name} is running at ${this.speed} kmph`;
//   }
// }

// //object / instance
// const tommy = new Dog("Tommy" , 2, 39);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.eat());
// console.log(tommy.run());

// GETTERS and SETTERS
// class person {

//   constructor(fname,lname,age){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//   }
//   get fullName(){      //this is getter
//     return `${this.fname} ${this.lname}`;
//   }
//   set fullName(fullname){    //this is setter
//    const [fname,lname] = fullname.split(" ");
//    this.fname = fname;
//    this.lname = lname;
//   }

// }

// const per1 = new person("Mansi", "Prajapati",20);
// console.log(per1.fname);
// console.log(per1.fullName);

// per1.fullName = "Sumit Yadav";
// console.log(per1);

// Closuers : functions which return functions
// function printFullName(fname,lname){
//    return function(){
//         return fname + " " + lname;
//     }
// }
// const myfun = printFullName('mansi','prajapati');
// console.log(myfun());

// function add(x){
//     return function(y){
//         return x+y;
//     }
// }
// const sum = add(2);  //this part of code get reference of function + referencce of x
// console.log(sum(4));

// PROMISES - used to handle asyn functions in JS
// suppose promise like an empty object with some data hold the value of the fun
// const cart = ["shoes", "phones", "laptop"];

// const GITHUB_API = "  https://api.github.com/users/Mansiprajapatii";

// const user = fetch(GITHUB_API);

// user.then(function (data) {
//   console.log(data);
// });

// PROMISE API

// 1. Promise.all -  it take the array of promises as input and return array of output and if there is failure in any of the promise it will immediately through the error of that promise

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 successful"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 Successful"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p3 Successful"), 2000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// 2. Promise.allSettled = it take array of promises and return the value of al the promises even if there is any failure promise
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// 3. Promise.race =  it will also take the array of promises and return the output of the first settled promise , it will not wait for other promises to gr=et finished in both the case
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// 4. Promise.any =  similar to race but it will wait for the 1st successful promise and return the value of the success promise
// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
//   });

//  event
