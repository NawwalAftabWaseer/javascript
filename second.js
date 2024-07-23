/**********************************SHORT CIRCUITING********************/
x=5;
if(x==5 || console.log('hi')){
    console.log('circuit shorting')
}

if(x==6 && console.log('hi')){
    console.log('circuit shorting')
}
else{
    console.log('not got that')
}

if(x==6 && console.log('hi') || true){
    console.log('circuit shorting')
}

if(x==6 || x==7 && console.log('nihow')){
    console.log('circuit shorting')
}

c=30;
if(c<50 || c==20 && c<20){
    console.log('nawwal here')
}



/*************************************STRING AND SUBTRACTION*****************************/
a='1'
b=1
n=a+b
n=n-1
console.log(n)

a='hello'
b=1
n=a+b
n=n-1
console.log(n)

/*********************************TYPE COERSION*****************************/
p = '10'
q = 5

d = p+q
console.log(d)
console.log(typeof d) //type coersion example

d = p - q
console.log(d)
console.log(typeof d) //type coersion example

/***********************************VARIABLES SCOPE*****************************************/
function func1(){
    var name1 = 'arham'

    if(true){
        console.log(name1)
    }
}
func1();

function func1(){
    if(true){
        let name = 'arham'
        console.log(name) //block scope let and const
    }
    
    if(true){
        console.log(name)
    }
}
func1();

/**********************************UNDEFINED, NOT DEFINED AND NULL*******************************/
// let fname ;
// console.log(fname)
// console.log(typeof fname)

// console.log(did)

/********************************TRUTHY AND FALSEY VALUES***************************************/
if(0){
    console.log('shuam')
}

if(4){
    console.log('shuam')
}

gh = 20
hg = '20'

if(gh === hg){ //=== compares type also
    console.log('Bonk')
}

/**********************************POST & PRE INCREMENT************************/
a=20;
console.log(a)
console.log(++a)

a=20
console.log(a--)


a=20
b=--a
console.log(b)