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
// == ===(type) != !==(type)
b = '1';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
b= 1;
console.log(a!==b)
console.log(a>b);
console.log(a<=b);
console.log(a<b);

//logical operators
// && || !
a = 2
b = 3
let c1 = a>b
let c2 = a>1
console.log(c1 && c2);
console.log(c1 || c2);

//*****************************Conditional statements**********/
a = 120;
if(a<100){
    console.log('number is less then 100')
} else{
    console.log('number is greater then 100')
}

b = 190;
if(b = 100){
    console.log('number is 100 equilant')
} else if(b>100){
    console.log('num is greater then 100')
} else{
    console.log('number is less then 100')
}

//Weight of the package in kilograms.
// Distance of shipping in kilometers.
// The shipping cost is calculated based on the following criteria:

// If the weight of the package is less than or equal to 5 kg:
// If the distance is less than or equal to 100 km, the shipping cost is $5.
// If the distance is greater than 100 km, the shipping cost is $8.
// If the weight of the package is more than 5 kg:
// If the distance is less than or equal to 100 km, the shipping cost is $10.
// If the distance is greater than 100 km, the shipping cost is $15.

weight = 3;
distance = 50;

if(weight <= 5){
    if(distance <= 100){
        console.log('shipping cost is 5')
    } else if(distance > 100){
        console.log('shipping cost is 8')
    }
} 

if(weight > 5){
    if(distance <= 100){
        console.log('shipping cost is 10')
    } else if(distance > 100){
        console.log('shipping cost is 15')
    }
}
//same code with user input 
weight = prompt("enter weight");
distance = prompt('enter distance');

if(weight <= 5){
    if(distance <= 100){
        console.log('shipping cost is 5')
    } else if(distance > 100){
        console.log('shipping cost is 8')
    }
} 

if(weight > 5){
    if(distance <= 100){
        console.log('shipping cost is 10')
    } else if(distance > 100){
        console.log('shipping cost is 15')
    }
}

// Age of the person.
// Citizenship status (yes or no).
// The eligibility rules are as follows:

// If the person is 18 years old or older and is a citizen (citizenship === 'yes'), they are eligible to vote.
// If the person is under 18 years old, they are not eligible to vote regardless of their citizenship status.
// If the person is 18 years old or older but is not a citizen (citizenship === 'no'), they are not eligible to vote.

Age = prompt('enter your age');
citizenship = prompt('enter your citizenship in yes or no');

if(citizenship != 'yes' || citizenship != 'no'){
    console.log('wrong input')
}
else{
    if(Age == 18 || Age > 18 && citizenship == 'yes'){
    console.log('eligibile for voting')
} 
else if(Age < 18){
    console.log('not eligible for voting')
} 
else if(Age == 18 || Age > 18 && citizenship == 'no'){
    console.log('not eligible for voting')
}
}

let day = prompt('Enter the day of the week:');

switch (day) {
    case 'monday':
        console.log('Start of the workweek');
        break;
    case 'friday':
        console.log('Almost weekend!');
        break;
    default:
        console.log('Midweek blues');
        break;
}

// Create a program that simulates a simple vending machine. The machine dispenses drinks based on a user's selection:

// Enter 1 for a soda (costs $1.00)
// Enter 2 for juice (costs $1.50)
// Enter 3 for water (costs $0.75)
// Enter anything else for "Invalid selection"
// The program should:

// Prompt the user to enter their selection (1, 2, or 3).
// Use a switch statement to handle the selection.
// For valid selections (1, 2, or 3), display the corresponding drink name and its price.
// For invalid selections, display an "Invalid selection" message.
// Bonus:

// Enhance the program to accept money from the user and check if it's sufficient for the chosen drink. If not, display an "Insufficient funds" message.

selection = prompt('enter your selection')
cash = prompt('enter the ammount of cash')
switch(selection){
    case '1' :
        if(cash < 1){
            console.log('insufficient funds')
        } else{
            console.log('take it')
        }
        break;
    case '2' :
        if(cash < 1.5){
            console.log('insufficient funds')
        } else{
            console.log('take it')
        }
        break;
    case '3' :
        if(cash < 0.75){
            console.log('insufficient funds')
        } else{
            console.log('take it')
        }
        break;
    default:
        console.log('invalid selection')
        break;
}
//ternary operator used for if else constraint
function value(a){
    return (a<10) ? 'a is less then 10' : (a > 10) ? 'a is > 10': 'a is 10';
}
console.log(value(5));

//ternary operator simple if else
b = prompt('enter a number of you choice');
result = (b < 100) ? 'number is less then 100' : (b > 100) ? 'number is greater then 100' : 'number is not in my limit';
console.log(result);

c = prompt('enter a number of your choice')
ans = (c<20) ? 'number is less then 20' : (c > 30) ? 'number is greater then 30' : 'number is out of my range';
console.log(ans);

//write program that will assign grades to students
score = prompt('enter your score out of 100');
if(score >= 80 && score <= 100){
    console.log('A')
} 
else if(score >= 70 && score <= 79){
    console.log('B')
}
else if(score >= 60 && score <= 69){
    console.log('C')
}
else if(score >= 50 && score <= 59){
    console.log(D)
}
else{
    console.log('F')
}
//************************************LOOPS***********************************/
for(i = 0 ; i <= 4 ; i++){
    console.log('nawwal aftab')
}

