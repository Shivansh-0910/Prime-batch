// All function types
// Function declaration
// Function Assignment
// Anonymous Function 
// Arrow function 
// Function declaration
// function print(a){
//     console.log("Hello",a);
// }
// 
// print("rakesh");
// print("Shivansh")

// const view =(a)=>{
//     console.log("Hi",a);
// }
// view("Shivansh");

// type 1
function sumNmod(a,b){
    console.log((a+b)%10);
}
sumNmod(5,48);

// type 2
const Sm=function sumM(a,b){
    return (a+b)%10;
}
console.log(Sm(5,3252));

// type 3
const s=function(a,b){
    return (a+b)%10;
}
console.log(s(23,436));

//type 4
const Smm=(a,b)=>(a+b)%10;
console.log(Smm(24,435));