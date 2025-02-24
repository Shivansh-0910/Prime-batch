// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };

// handleCall();
// console.log("end");


// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };

// setTimeout(handleCall,3000);
// setTimeout(handleCall,5000);

// console.log("end");

// console.log("start");
// const handleInnerCall=()=>{
//     console.log("Step Y");
// };
// const handleCall=()=>{
//     console.log("Step M");
//     handleInnerCall();
//     console.log("Step N");
// };

// setTimeout(handleCall,0);

// console.log("end");

console.log("A");
const handleCall=()=>{
    console.log("H");
}

setTimeout(()=>{
    console.log("N");

    setTimeout(()=>{
        console.log("P");
    },0);
    handleCall();
    console.log("B");
},5000);
console.log("C");