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

// weight = 3;
// distance = 50;

// if(weight <= 5){
//     if(distance <= 100){
//         console.log('shipping cost is 5')
//     } else if(distance > 100){
//         console.log('shipping cost is 8')
//     }
// } 

// if(weight > 5){
//     if(distance <= 100){
//         console.log('shipping cost is 10')
//     } else if(distance > 100){
//         console.log('shipping cost is 15')
//     }
// }
// //same code with user input 
// weight = prompt("enter weight");
// distance = prompt('enter distance');

// if(weight <= 5){
//     if(distance <= 100){
//         console.log('shipping cost is 5')
//     } else if(distance > 100){
//         console.log('shipping cost is 8')
//     }
// } 

// if(weight > 5){
//     if(distance <= 100){
//         console.log('shipping cost is 10')
//     } else if(distance > 100){
//         console.log('shipping cost is 15')
//     }
// }

// // Age of the person.
// // Citizenship status (yes or no).
// // The eligibility rules are as follows:

// // If the person is 18 years old or older and is a citizen (citizenship === 'yes'), they are eligible to vote.
// // If the person is under 18 years old, they are not eligible to vote regardless of their citizenship status.
// // If the person is 18 years old or older but is not a citizen (citizenship === 'no'), they are not eligible to vote.

// Age = prompt('enter your age');
// citizenship = prompt('enter your citizenship in yes or no');

// if(citizenship != 'yes' || citizenship != 'no'){
//     console.log('wrong input')
// }
// else{
//     if(Age == 18 || Age > 18 && citizenship == 'yes'){
//     console.log('eligibile for voting')
// } 
// else if(Age < 18){
//     console.log('not eligible for voting')
// } 
// else if(Age == 18 || Age > 18 && citizenship == 'no'){
//     console.log('not eligible for voting')
// }
// }

// let day = prompt('Enter the day of the week:');

// switch (day) {
//     case 'monday':
//         console.log('Start of the workweek');
//         break;
//     case 'friday':
//         console.log('Almost weekend!');
//         break;
//     default:
//         console.log('Midweek blues');
//         break;
// }

// // Create a program that simulates a simple vending machine. The machine dispenses drinks based on a user's selection:

// // Enter 1 for a soda (costs $1.00)
// // Enter 2 for juice (costs $1.50)
// // Enter 3 for water (costs $0.75)
// // Enter anything else for "Invalid selection"
// // The program should:

// // Prompt the user to enter their selection (1, 2, or 3).
// // Use a switch statement to handle the selection.
// // For valid selections (1, 2, or 3), display the corresponding drink name and its price.
// // For invalid selections, display an "Invalid selection" message.
// // Bonus:

// // Enhance the program to accept money from the user and check if it's sufficient for the chosen drink. If not, display an "Insufficient funds" message.

// selection = prompt('enter your selection')
// cash = prompt('enter the ammount of cash')
// switch(selection){
//     case '1' :
//         if(cash < 1){
//             console.log('insufficient funds')
//         } else{
//             console.log('take it')
//         }
//         break;
//     case '2' :
//         if(cash < 1.5){
//             console.log('insufficient funds')
//         } else{
//             console.log('take it')
//         }
//         break;
//     case '3' :
//         if(cash < 0.75){
//             console.log('insufficient funds')
//         } else{
//             console.log('take it')
//         }
//         break;
//     default:
//         console.log('invalid selection')
//         break;
// }
// //ternary operator used for if else constraint
// function value(a){
//     return (a<10) ? 'a is less then 10' : (a > 10) ? 'a is > 10': 'a is 10';
// }
// console.log(value(5));

// //ternary operator simple if else
// b = prompt('enter a number of you choice');
// result = (b < 100) ? 'number is less then 100' : (b > 100) ? 'number is greater then 100' : 'number is not in my limit';
// console.log(result);

// c = prompt('enter a number of your choice')
// ans = (c<20) ? 'number is less then 20' : (c > 30) ? 'number is greater then 30' : 'number is out of my range';
// console.log(ans);

// //write program that will assign grades to students
// score = prompt('enter your score out of 100');
// if(score >= 80 && score <= 100){
//     console.log('A')
// } 
// else if(score >= 70 && score <= 79){
//     console.log('B')
// }
// else if(score >= 60 && score <= 69){
//     console.log('C')
// }
// else if(score >= 50 && score <= 59){
//     console.log(D)
// }
// else{
//     console.log('F')
// }
//******************************************LOOPS**********************/
for(let i = 0 ; i <= 4 ; i++){
    a = 'nawwal'
    b = 'aftab'
    console.log(a + '' + b)
}
for(let j = 4 ; j >= 0 ; j--){
    console.log('aftab')
}

//sum of 1-5
sum = 0
n = 5 //termination value
for(let i = 1 ; i<=n ; i++){
    sum += i;
    console.log('current sum =', sum)
}
console.log('final sum =', sum)

for (let i=1;i<=5;i++){
    console.log('i=',i);
}

//multiply numbers 1-10
result = 1
termination = 10
for(let i=1 ; i<=termination ; i++){
    result *= i;
    console.log('current multiplication', result)
}
console.log('final multiplication', result)

//infinite for loop
// for(i=0 ; i>=0 ; i++){
//     console.log('infinite loop')
// }

// while loop
let o = 1;
while(o<5){
    console.log('hello')
    o++;
}

//do while loop -> condition at the last
// runs atleast one time
 p = 1;
do{
    console.log('p =', p)
    p++
} while(p<6);

// for of loop -> to iterate over strings
namee = 'nawwal '
size  = 0
for(let i of namee){
    console.log(i)
    size++;
    console.log('current size', size)
}
console.log(size)

// for in loop -> return keys of any object
let cl = {
    namee : 'nawwal',
    saal : 23
};
for(let i in cl){
    console.log(i,'value is', cl[i])
}

// print all even numbers from 0-100
for(let i = 0; i<=100 ; i = i+1){
    if(i%2==0){
        console.log('even number is',i)
    }
}

//guess the number game
// gamenumber = 20;
// guess = prompt('enter any number of your choice')
// while( guess != gamenumber){
//     if(guess === gamenumber){
//         break;
//     } else{
//         console.log('do it again')
//         guess = prompt('enter any number of your choice')
//     }
// }
// console.log('you won')

//*****************************************STRINGS******************************/
fullname = 'nawwal'
lastname = "aftab"
console.log(fullname[1] + lastname[1])

//template literal
let str = `nawwwal`
console.log(typeof str)

let obj = {
    item : 'pen',
    price : 10
}
let output = `the cost of ${obj.item} is ${obj.price}`
console.log(output)

//template literals can be used direclty for arithmatic operations
let another = `the sum of 1 and 3 is   ${1+3}`
console.log(another)

console.log('nawwal \naftab') //line skip
console.log('nawwal \taftab') //tab space

// uppercase and lowercase
fullname = fullname.toUpperCase()
console.log(fullname)

let ag = '       nawwal       '
ag = ag.trim() //trims spaces from left to right
console.log(ag)
// str.slice(start,end) -->slices a part
// str.replace(searchval, newval) --> replaces a specific string not repeats it







//***************************************ARRAYS****************************/
// strings are immutable but arrays are mutable
// arrays are collection of items in a linear way
 let arrName = ['nawwl','shawwal','maqbool','liaqat']
 console.log(arrName)

 let arrMixValues = ['nawwal',23,3.20]
 console.log(arrMixValues)

//  let marks = [33,44,54,67,32];
//  console.log(marks)
//  console.log(marks[2])
 
//  marks = marks.length //size of array
//  console.log(marks)

console.log(arrName[3]) //array indices

let marks = [22,33,44,55]
console.log(marks)

// looping over arrays
let heros = ['iroman','batman','superman','thor','deadpool'];
//1st way my own way
for(let i=0 ; i<heros.length ; i++){
    i = heros
    console.log(i)
}
// default way
for(let i=0 ; i<heros.length ; i++){
    console.log(heros[i])
}

//for of loop for arrays
for(let item of heros){
    console.log(item)
}

// given an array find avg marks
let givenArray = [85,97,44,37,76,60]
let addd = 0
for(let i=0 ; i<givenArray.length; i++){
    addd += givenArray[i]
    result = addd/givenArray.length
}
console.log(result)

// multiply elements in a given array and divide by total number of values
let given = [2,3,4,5]
let multi = 1
for(let h=0 ; h<given.length ; h++){
    multi *= given[h]
    result1 = multi/given.length
}
console.log(result1)

// all items in an array have 10% off update the values in arrays
// for of loop dont considers index so we add it manually
let arrGiven = [250,645,300,900,50]
index = 0
for(let value of arrGiven){
    offer = value / 10
    value = value-offer
    index++
    console.log(index,value)
}

//do same but multiply each value with 4 and add 50 in it
let arrgiven = [250,645,300,900,50]
indx = 0
for(let ans of arrgiven){
    mul = ans * 4
    ans = ans + 50
    indx++
    console.log(indx, ans)
}

//Array methods
//push->add at end
//pop-> remove from end 
//toString ->converts arrays to strings
//concat -> concats multiple arrays as newe array
//unshift -> add to start
//shift -> removes fron start
//slice ->gives us slices
//splice ->changes your originl array --> syntax splice(startindx, delindx , newelementvalue )

let fruits = ['mango','guava','peach','strawberry']
console.log(fruits)
fruits.push('cucumber','capsicum')
console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(fruits.toString()) //toString converts array to string
fruits.push('jho')
console.log(fruits)

let fname = ['nawwal','shawwal','hamna']
let lname = ['aftab','zahoor','elahi']
let anothername = ['sulman','agha','fawad']

let concated_Array =fname.concat(lname, anothername )
console.log(concated_Array)

fname.unshift('farzana')
console.log(fname)
lname.unshift('sajjad')
console.log(lname)

console.log(fname)
fname.shift()
console.log(fname)

console.log(fname.slice(0,3))
console.log(fname.slice(0))

console.log(fname)
fname.splice(1,1,'humayun')

console.log(lname)
lname.splice(1,2)

//
qsArr = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']
console.log(qsArr)
qsArr.shift()
console.log(qsArr)

qsArr.splice(1,1,'Ola')
console.log(qsArr)

qsArr.push('Amazon')
console.log(qsArr)



