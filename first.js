console.log("Hello NAWWAL");
console.log("Trying to learn js");

//********************************************Variables**********************************************
a=4;
b=3;
console.log(a+b);
console.log(a/b);
console.log(a*b);
//let used for all variables
let firstnamee = 'nawwal';
let lastnamee = 'aftab';
let age = 32;
console.log(firstnamee + age);
console.log(firstnamee + lastnamee + age);
console.log('My name is  ' + firstnamee + ' ' +  lastnamee + ' and my age is ' + ' ' + age);

let v1 = null; //empty value
console.log(v1);

let v2 = undefined; //dont know value
console.log(v1);

let v3 = false; //boolean
console.log(v3);
console.log(v3 + ' '+firstnamee);

fullname = 'nawwal'
FULLNAME = 'nawwal'
console.log(fullname)

//let const and var
let c = 4;
console.log(a)
c = 5;
console.log(a)

//var can be changed again and again
var d = 2;
console.log(d);
var d = 3;
console.log(d);

// const cannot ne changed block scope
const pi = 3.14;
console.log(pi);

//block space
{
    let z = 5;
    console.log(z)
}

{
    let z = 10;
    console.log(z)
}

let umer = 25;
console.log(umer);
umer = 28;
console.log(umer);

//website url open it from inspect in document
let websiteurl = "https://chatgpt.com/";
console.log(websiteurl);

//**********************************DATA TYPES *************************/
//primitive
//number string boolean null undefined bigint symbol
let price = 9.77777777777777777;
console.log( price);
isfollow = true;

let y = BigInt('123456');
let u = Symbol('Hello');

//non-primitive
//object ->collection of different variables
const student = {
    fullname : 'Nawwal Aftab',
    cgpa : 3.22,
    isPass : true,
};
console.log(student);
console.log(student.cgpa);

student['cgpa'] = student['cgpa'] + 1;
console.log(student['cgpa']);

student['fullname'] = 'Nawwal Aftab Waseer';
console.log(student);

const profile = {
    profilename : 'innocent_ashiq',
    dofollow : true,
    posts : 195,
    followers : BigInt('569000'),
    following : 4,
};
console.log(profile);

/******************************OPERATORS***************************/
// add subtract multiply divide increment decrement exponent 
console.log(a+b);
console.log(a**b);
console.log(a%b); //remainder
console.log(a+1);
console.log(a);
console.log(++a);
console.log(--a);
b++;
console.log(b);

cb=40;
console.log(cb);
console.log(cb++);
console.log(cb)

//assignment operators
// = += -= *= %= **=
cb += 5;
console.log(cb);
console.log(c);
c **= 2;
console.log(c);

//comparison operators
// == === != !==
b = '1';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
b= 1;
console.log(a!==b)
