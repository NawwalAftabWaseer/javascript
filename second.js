// /**********************************SHORT CIRCUITING********************/
// x=5;
// if(x==5 || console.log('hi')){
//     console.log('circuit shorting')
// }

// if(x==6 && console.log('hi')){
//     console.log('circuit shorting')
// }
// else{
//     console.log('not got that')
// }

// if(x==6 && console.log('hi') || true){
//     console.log('circuit shorting')
// }

// if(x==6 || x==7 && console.log('nihow')){
//     console.log('circuit shorting')
// }

// c=30;
// if(c<50 || c==20 && c<20){
//     console.log('nawwal here')
// }



// /*************************************STRING AND SUBTRACTION*****************************/
// a='1'
// b=1
// n=a+b
// n=n-1
// console.log(n)

// a='hello'
// b=1
// n=a+b
// n=n-1
// console.log(n)

// /*********************************TYPE COERSION*****************************/
// p = '10'
// q = 5

// d = p+q
// console.log(d)
// console.log(typeof d) //type coersion example

// d = p - q
// console.log(d)
// console.log(typeof d) //type coersion example

// /***********************************VARIABLES SCOPE*****************************************/
// function func1(){
//     var name1 = 'arham'

//     if(true){
//         console.log(name1)
//     }
// }
// func1();

// function func1(){
//     if(true){
//         let name = 'arham'
//         console.log(name) //block scope let and const
//     }
    
//     if(true){
//         console.log(name)
//     }
// }
// func1();

// /**********************************UNDEFINED, NOT DEFINED AND NULL*******************************/
// let fname ;
// console.log(fname)
// console.log(typeof fname)

// console.log(did)

// // // // /********************************TRUTHY AND FALSEY VALUES***************************************/
// if(0){
//     console.log('shuam')
// }

// if(4){
//     console.log('shuam')
// }

// gh = 20
// hg = '20'

// if(gh === hg){ //=== compares type also
//     console.log('Bonk')
// }

// /**********************************POST & PRE INCREMENT************************/
// a=20;
// console.log(a)
// console.log(++a)

// a=20
// console.log(a--)


// a=20
// b=--a
// console.log(b)

// name1='nawwal'
// console.log(name1.toUpperCase())

// name2='AFTAB'
// console.log(name2.toLowerCase())

// a=10;
// if(a<15 && a<20 || console.log('checked12') && console.log('checked')){
//     console.log('nomi here')
// }

// if((a<15 && a<20 || console.log('checked12')) && console.log('checked')){
//     console.log('nomi here')
// }

// /**************************************STRING AND TEMPLATE LITERALS****************/
// //template literal should always have a expression that returns a value
// z = 10;
// const w = `Hello World${z}`
// console.log(w)

// const r = `my na${z}me is nawwal`
// console.log(r)

// z = 'nawwal'
// console.log(`Hello my name is ${z}`)

// productName = 'Shampoo'
// price = 5
// description = 'for hairs'
// console.log(`The product is ${productName}, its price is ${price}$ and its used ${description}`)


// /****************************STATEMENTS AND EXPRESSIONS*********************/
// let v = console.log(3) //line that produces no value means statement
// console.log(v)

// let f = 5+7 //line that produces value means expression
// console.log(f)

// z = console.log('nawwal') // -->statement that return no value
// z = 'nawwal' // -->expression that returns a value

// /*********************************TERNARY OPERATOR***************************/
// //behaves like a expression
// // used in place of sinlge if-else statement
// let e = 5;
// e===5 ? console.log('true') : console.log('false')

// let o = prompt('enter number of your choice');
// o < 40 ? console.log('number is less then 40') : console.log('number is greater then 40')

// let input = prompt('enter number of your choice');
// input < 40 ? console.log(input = 4) : console.log(input=5)

// z = 51;
// (z<50) ? console.log('num > then 50') : (z==50) ? console.log('num equal to 50') : console.log('wrong number')

// /*********************FUNCTIONS*********************************/

// // const m = 'abc'
// // m()

// // function abc(x, y) {
// //     return x + y;
// //   }
  
// //   const z = abc(5);
// //   console.log(z); 

// // x is initialized 5 and y is initialized undefined and 5+undefined= Nan

// // function abc(x, y=10) { // default value of y = 10;
// //     return x + y;
// //   }
  
// //   const z = abc(5);
// //   console.log(z); 

// // function abc(x, y=10, z=15) { // default value of y = 10 and z = 15;
// //     return x + y;
// //   }
  
// //   const z = abc(5);
// //   console.log(z); 

// /***************************************ARROW FUNCTION***********************************/

// // (x,y) => {

// // }



// const arrowFunc = (r,g) => {
//     console.log(r+g)
// }

// arrowFunc(2,3)

// //simple even odd function
// function evenOdd(a){
//     if(a%2 == 0){
//         console.log(`its even`)
//     } else{
//         console.log('its odd')
//     }

// }
// evenOdd(2)

// const even_Odd = (a) => {
//     if(a%2 == 0){
//         console.log('its even')
//     }
//     else{
//         console.log('its odd')
//     }
// }
// even_Odd(3)

// // arrow function to multiply 2 numbers
// const multi = (a,b=4,c=4) => {
//     multiply = a * b /c
//     console.log(multiply)
//     return multiply
// }

// const multi1 = multi(2) //  -->call by value
// console.log(multi1)

// // const multi1 = multi  -->call by reference

// // Write a function filterArray that takes an array of numbers and returns a new array 
// // that only contains even numbers. Use arrow function syntax.

// inputArray = prompt('enter array of numbers')
// const filterArray = (inputArray) => {
//     evenArray = []
//     for(let i=0 ; i<inputArray.length ; i++){
//         if(inputArray[i] % 2 ==0){
//             evenArray.push(inputArray[i])
//         }
//     }
//     console.log(evenArray)
// }
// filterArray(inputArray)


// // // /*********************HIGHER ORDER FUNCTIONS**************************/
// that take a function as parameter or call another function inside its own function
// higher order function multiplying 2 numbers and dividing by 3

// const x = () =>{
//     console.log('inside x')
//     return () => {
//         console.log('inside nested function')
//     }
// }
// const y = x()
// y()

// // // // //-----------//

// const r =(a)=> {
//     console.log('in r')
//     a()
//     console.log('in a')
// }

// const t = () =>{
//     console.log('in t')
// }
// //t function is passed as a so t would run and then the remaining code under t will run
// r(t)

// // // /******************IMP***************************/
// const g = (abc)=>{
//     console.log('inside x')
//     console.log(abc)
//     abc() //abc me jo kuch arha hai usko call krdo
//     console.log('inside x 2')
// }

// const e = ()=>{
//     console.log('inside y')
// }

// const z = () => {
//     console.log('inside z')
// }

// console.log('start')
// g(e)
// g(z)
// console.log('end')


// function addd(n,m,cb){
//     result = n+m;
//     cb(result)
// }
// addd(3,4, function(val){
//     console.log(val)
// })

// function mult(f,g, divide){ // takes function as an argument
//     result1 = f * g
//     divide(result1)
// }

// mult(2,3, function(val){
//     console.log(val / 3)
// })



// calculate area, circum and diameter using higher order function
// function area(radius){ //call back function
//     return (Math.PI * radius * radius).toFixed(3) // --> include only 3 decimal places
// }

// function circumference(radius){ //call back function
//     return (2*(Math.PI) * radius).toFixed(3)
// }

// function diameter(radius){ //call back function
//     return (2 * radius).toFixed(3)
// }

// function subtractWith10(radius){
//     return radius - 10
// }

// radius = [2,3,4,5,6,7,8]
// //implementation logic of map
// function calCircle(radius, logic){ //calCircle is high order function
//     output = [] 
//     for(let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     console.log(output)
// }

// calCircle(radius,area) //call high order with reference of area
// calCircle(radius, circumference)
// calCircle(radius, diameter)
// calCircle(radius, subtractWith10)

// // another example
// const x = (abc)=>{
//     console.log('inside x1')
//     console.log(abc)
//     console.log('inside x2')
// }

// const y = () => {
//     console.log('currently you are in y')
// }

// const z = () => {
//     console.log('currently you are in z')
// }

// const w = () =>{
//     console.log('currently you are in w')
// }

// console.log('Shuru')
// x(y)
// x(z)
// x(w)
// console.log('khatam')







// // // /**************************************IIFE FUNCTIONS****************************/
// immediately invoked function expression
// why to use it
// scoping(the bloack has separate memory blocks)
// extra variables are not created

// (()=>{
//     console.log('IIFE function')
// })()

// console.log('bye')

// const hello =( ()=>{
//     console.log('hello')
// })()

// (function () {
//     console.log()   
// })();


// // // /************************************ARRAYS*******************************/
// // arrays are contigious and same data type
// // you cannot reassign array

// // const ar = [1,2,3,4]
// // console.log(ar.push(10))
// // console.log(ar.indexOf(4))
// // console.log(ar)
// // console.log( ar instanceof Array)
// // console.log( ar instanceof Array)
// // console.log(ar.includes(2)) // --->True


// // const array = [1,2,3,4,5,6]
// // array.push(10)
// // console.log(array)

// // const ar1 = [8,9,0]

// // new_array = [].concat(array).concat(ar1) //concatination method
// // console.log(new_array)

// // new_array1 = array.slice() //slice method
// // console.log(new_array1)

// /**************************************3D ARRAYS************************************/
// // 2D and 3D array demontration
// let array = [
//     [
//         ['A1','B1','C1'],
//         ['A2','B2','C2']
//     ],
//     [
//         ['A3','B3','C3'],
//         ['A4','B4','C4']       
//     ]
// ]

// console.log(array[0][1][1])
// console.log(array[1][1][0])

// let array1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(array1[1][2])



// // ASK SIR
// // (function() {
// //     console.log('iife')
// //     let sec = 'i am a sec'
// //     console.log(sec)
// // })();


// even-odd using higher order functions

// const Arr = [1,2,3,4,5,6,7,8]

// function Even(t){
//     if(t%2 == 0){
//         return 'even'
//     }
//     else{
//         return (Arr[t],'not given by this function')
//     }
// }

// function Odd(t){
//     if(t%2 != 0){
//         return 'odd'
//     }
//     else{
//         return (Arr[t],'not given by this function')
//     }   
// }

// function CalculateEvenOdd(Arr, callback){
//     new_Arr = []
//     for(let t=0 ; t<Arr.length ; t++){
//         new_Arr.push(callback(Arr[t]))
//     }
//     console.log(new_Arr)
// }

// CalculateEvenOdd(Arr, Even)
// CalculateEvenOdd(Arr, Odd)

// another way 
// const Arr = [10,11,12,13,14,15,16,17,18]

// function calevenodd(Arr, cb){
//     filtered_array = Arr.filter( arrowFunc => cb ? arrowFunc%2 == 0 : arrowFunc%2 != 0)
//     console.log(filtered_array)
// }

// calevenodd(Arr,true)
// calevenodd(Arr,false)

// // /*******************************************THURSDAY 25 JULY****************************/
// // // const arr = [6,2,4,9,21,43,89]
// const [x,y,z] = arr //square bracket on left of = means destructuring of array
// console.log(x,y,z)

// const [x,y,...z] = arr
// console.log(x,y,z)

// const [x,_,y,...z] = arr // _ means one value is skipped and ... means the rest of values in z
// console.log(x,y,z)


// const r = arr[4]
// console.log(r)

// //swapping values
// let g = 6;
// let f = 7;

// [g,f] = [f,g] //first array is created and then destructured for swapping

// console.log(g)
// console.log(f)


// const arr = [25,45,65,34]
// const arr1 = arr
// arr1.push(10)
// console.log(arr)

// const arr = [25,45,65,34]
// const arr1 = [...arr] //spread operator
// arr1.push(10)
// console.log(arr)

// const array = [23,43,532,34,11,24,45]

// const new_array = [...array]
// new_array.push(90)
// console.log(array)


// // /***************************************MAP METHOD********************************/
// // //creates new array so as original one remains unchanged
// // //map is a higher order function means it takes a function as paremeter
// // //element function will work for each element in array
// // //map function is an expression
// // //har element kelye apni new array me mapping apply krna
// // //const result = arr.map((element,index,arr) -->usually takes 3 parameters but only first one is used
// // // always returns array of original size

// // // const arr = [2,5,9,10,12]
// // // const result = arr.map((element)=>{
// // //     if(element %2 == 0){
// // //         return element + 2
// // //     } 
// // //     else{
// // //         return element
// // //     }
// // // })

// // // console.log(result)

// const arr1 = [2,5,9,10,12]
// const result1 = arr.map((element,index,arr1)=>{ //poori array in parameter but not used
//     if(index == 2){
//         return element 
//     } 
//     else{
//         return element + 2
//     }
// })

// // // console.log(result1)

// // /*************************************FILTER METHOD*****************************/
// // // har vo iteration jisme true return hoga wo element as it is return hoga
// // //always returns array of limitied size that is required
// // //true means return the element and false means dont return the element


// // // const narray = [2,5,9,10,12]

// // // const ghu = narray.filter((element)=>{
// // //     if(element>3){
// // //         return true
// // //     }
// // //     else{
// // //         return false
// // //     }
// // // })

// // // const narray = [2,5,9,10,12]

// // // const ghu = narray.filter((element)=>{
// // //     return element > 6
// // // })

// // // console.log(ghu)

// filter elements in array
// const duplicateRemove = [2,2,3,4,3,5,6,5,7,8,7,7,8,9]
// const x =new Array (...new Set(duplicateRemove))
// console.log(x)

// do using loop at home duplicate values from arrays

// // /***********************************************************PRACTICE THURSDAY*********************************************/
// // // ->destructring
// // // ->IMP INTERVIEW QUESTION
// // // ->rest operators //rest of values
// // // ->swapping //spread values
// // // ->spread operator
// // // ->APPLICABLE SAME ON OBJECTS
// // // ->map method
// // // ->filter method
// // // ->remove duplicate from arrays using loops
// // // one liner return statements dont need return and curly braces in it

// const arr1 = [1,12,13,3,5,4,67,87,65,67,90,987,43]
// const [x1,y1,z1] = arr1 //destructuring
// console.log(x1,y1,z1)

// const arr2 = [1,12,13,3,5,4,67,87,65,67,90,987,43]
// const [x2=10,y2,...z2] = arr2 //rest method
// console.log([x2])
// console.log([y2]) //result in array format
// console.log([z2])

// const arr3 = [1,12,13,3,5,4,67,87,65,67,90,987,43]
// const arr4 = arr3.push(30)
// console.log(arr3)

// const arr5 = [1,12,13,3,5,4,67,87,65,67,90,987,43]
// const arr6 = [...arr5] //spread method
// arr6.push(10)
// console.log(arr5)
// console.log(arr6)

// //swapping
// a=2;
// b=3;
// c=4;

// [a,b,c] = [c,a,b]
// console.log(a)
// console.log(b)
// console.log(c)

// //celcius to farenheit using map method
// const array = [23,32,12,34,36]
// const toFarenheit = array.map((celsius)=>{
//     return 9/5 * celsius + 32
// })
// console.log(toFarenheit)

// const Array = [3,54,322,3,45,7,65,43,2,234,5]
// const mappedArray = Array.map((val)=>{
//     if(val >=30){
//         return val
//     }
//     else{
//         return val + 30
//     }
// })
// console.log(mappedArray)

// //filter true and false
// const Array1 = [1,2,3,4,5,6,7,8,9]
// const filteredArray = Array1.filter((val1)=>{
//     if(val1 > 5){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(filteredArray)

// const newArray = [10,20,30,40,50,60,70,80,90]
// const newArrayResult = newArray.filter((filterr)=>{
//     if(filterr %2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(newArrayResult)

// //swapping but results in array
// let a1=[1,2,3]
// let a2=[5,6,7]

// let temp = a1
// a1 = a2
// a2 = temp

// console.log(a1)
// console.log(a2)

// // let a3=[1,2,3]
// // let a4=[5,6,7]

// // [a3,a4] = [a4,a3]

// // console.log(a3)
// // console.log(a4)


// //---->remove duplicate from array using built in function

// // const duplicateRemove = [2,2,3,4,3,5,6,5,7,8,7,7,8,9]
// // const x =new Array (...new Set(duplicateRemove))
// // console.log(x)

// // const removeDuplicate = [1,2,3,4,5,6,1,2,3,4,5,1,2,3,4,5,1,2,3,4]
// // const resultArray = new Array (new Set(removeDuplicate))
// // console.log(resultArray)

// // REMOVE DUPLICATES IN AN ARRAY MANUALLY
// array10 = [1,2,3,4,5,1,2,3,4,5,1,2,4,5,6]
// const unique_array = removeDuplicate1(array10) //unique_array is passed the function call of removeDuplicate1 with parameter given array

// function removeDuplicate1(array10){
//     let unique_array = []

//     for(let i=0; i<array10.length ; i++){
//         if(!unique_array.includes(array10[i])){
//             unique_array.push(array10[i])
//         }
//     }
//     console.log(unique_array)
// }

// //*****************************************************FRIDAY 26 JULY*********************************************** */
// /*****************************************************REDUCE METHOD IN ARRAY*****************************************/

// reduces elements of an array to a single value
// const prices = [5,3,5,20,40,15]
// const total = prices.reduce(sum)

// function sum(prevValue, nextValue){
//     return prevValue + nextValue
// }

// console.log(`Total is $${total}`)

// find maximum number in an array
// const arrayMax = [22,2,34,5667,89900]
// const maxiValue = arrayMax.reduce(getMax)

// function getMax(oldValue, newValue){
//     return Math.max(oldValue, newValue)
// }

// console.log(maxiValue)

// //EFFICIENT WAY MAX IN A ARRAY
// const arrayMax = [2,3,43,2344,5678,98765,322345]
// const maximum = arrayMax.reduce((preValue, nextValue)=>{
//     return Math.max(preValue, nextValue)
// })
// console.log("Max value ->",maximum)

// //EFFICIENT WAY MIN IN A ARRAY
// const array = [2,3,4,5,6,7,-1,-3,-5]
// const minValue = array.reduce((lastValue, comingValue)=>{
//     return Math.min(lastValue,comingValue)
// })
// console.log("Min value ->",minValue)

// //function to calculate average of an array
// const array1 = [2,3,4,5,6,7]
// const avg_array = array1.reduce((oldValue, neValue)=>{
//     return oldValue + neValue
// }) /array1.length
// console.log(`Final Value-> ${avg_array}`)

// //multiply all elements in array and add 40 in it at last
// const mArray = [2,3,2,3]
// const multiplyAdd = mArray.reduce((bValue, nValue)=>{
//     return bValue * nValue
// }) + 40
// console.log(`Final Value-> ${multiplyAdd}`)

// //concat strings of an array using reduce
// const sArray = ['nawwal','arham','muawiz']
// const stringArray = sArray.reduce((lValue, noValue)=>{
//     return lValue +' '+' '+ noValue
// })
// console.log(stringArray)

// //concat 2 different arrays ITS WRONG
// const sArray1 = ['nawwal','arham','muawiz']
// const sArray2 = ['aftab','ahmed','dk']
// const stringArray1 = sArray1.reduce((sArray2)=>{
//     return sArray1 + sArray2
// }, '') //initial value
// console.log(stringArray1)


/************REMOVE DUPLICATE FROM AN ARRAY USING FILTER METHOD IN ARRAYS********************************/
// const array = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = array.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// console.log(uniqueArray);

//SPLICE METHOD
// const arr = [1,2,3,4,5,6]
// const arr1 = arr.splice(2,3) //3 is count of elements to delete
// console.log(arr1)

//slice, concat and join dont changes original array but splice and reverse change the original array

//JOIN IN ARRAYS
//returns a string only
//to join an array with a specific spearator
// const arr = [1,2,3,4,5,6]
// const arr1 = arr.join(' ;; ')
// console.log(arr1)

//for each is actually a function
//excepts callback function
//dont includes break and continue

// const arr = [1,5,2,9]
// arr.forEach()

//find works like filter. it returns only first value 
//find index same like find but returns the index of the only one value
//some works like OR operator for arrays -->if only one true then output like filter
//every works like AND operator -->if any one is false it will return false like filter
//flat flattens the arraay in 1 array format --> pass infinity as paramemter to flatten array to the end
//flat map maps each number to an array containing the number and its square, then flattens the result into a single array. RETURNS NEW ARRAY

/****************************************************************NEW THING***************************************************/

//browser api's
//not js functions
//set timeout takes a time and at that time runs the function
//fetch is used to call an API

//fetches an API from external server using fetch
//.then tab chlega jab promise sahi chlega
//chaining rule means ke aik hi line me different operations
// const p = fetch('https://fakestoreapi.com/products').then((response)=>{ //means ke jabtak answer ni arha tabtak aage chlo
//     console.log(response)
//     return response.json() //used to return omly useful information needed
//     //same name se faraq ni prhta
//     .then((resp)=>{
//         console.log('Resp:',resp)
//     }) ///converts in json format. 
// }).catch((error)=>{ //catch is only one in whole fetch
//     console.log('error due to promise failed',error) //agr promise sahi chl jaye to then otherwise koi issue hai to error chlado
// }).finally(()=>{ //written at the end of fetch and outputs at the end
//     console.log('Inside Finally')
// })
// //promise creation is compulsory
// console.log('HELLO WORLD')
// console.log('p:',p) //returns a promise that i will return the answer

// const promise = fetch('https://catfact.ninja/fact').then((response)=>{
//     console.log('Inside then1')
//     console.log(response)

//     return response.json()
//     .then((response)=>{
//         console.log('Inside then2')
//         console.log(response)
//     })

// }).catch((error)=>{
//     console.log('Error:',error)
// }).finally(()=>{
//     console.log('Ended')
// })

// console.log('Hello World')
// console.log('Promise is:',promise)

const promise1 = fetch('https://api.genderize.io?name=luc')
    //then used to get response of api in case of success
    .then((response1)=>{ 
    console.log('Inside promise1 then')
    console.log(response1)

    //json used to transfer data in json format including only meaningful information
    return response1.json()
    
    //then used in json to return the success of nested promise
    .then((response1)=>{
        console.log('Inside promise json then')
        console.log(response1)
    })

    //catch used in case of error occuring in fetch(means when there is issue in requesting for api)
}).catch((err)=>{
    console.log('Error ->',err)
})
//finally used to display a message at the end of fetch api response
.finally(()=>{
    console.log('Ended Finally')
})

console.log('hello world')
console.log(promise1)

// .race MEANS WHICH RESPONSE WILL ARRIVE FIRST WILL BE SHOWN FIRST
// const p1 = fetch('https://fakestoreapi.com/products');
// const p2 = fetch('https://api.genderize.io?name=luc');

// Promise.all([p1,p2]) .then((res)=>{
//     console.log('all responses')
//     console.log(res)
// }) .catch((error)=>{
//     console.log('error:',error)
// }) .finally(()=>{
//     console.log('ended finally')
// })

/*********************************29 July ***********************REACT******************************/
//react is a library limited set of functionalities
//next.js and angular is a framework
//react is a library -> set of functionalities to code something
//framework -> har kaam krne ka fixed tareeqa batata hai
//react is used only to update UI

//react is a single page application
//not refreshes or reloads the whole page. That is a concept of single page application

//react is reusable components
//same structure in facebook and instagram of post
//reusable not means using same data from different projects

//JSX
//react has a extension called javascript XML
//write js and xml(html) in one file
//this file has extension .jsx

//v8 engine in chrome that runs in js
//we can use v8 engine in our terminal
//that v8 engine is called node and program of c++
//when we install node then npm will also be installed
//node is defined as code of v8 engine in c++
//npm are called packages that are libraries that are published by people

//used is replacement of create react
//VITE: IS FAST AND EFFICIENT THEN CREATE REACT
//vite as a tool sabke project bana leta hai and optimized
//we will choose react
//choose javascript
    
    // cd react-proj
    // npm install
    // npm run dev

//it will create a react project folder of your project name automatically in your folder

