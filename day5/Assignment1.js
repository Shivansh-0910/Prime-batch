const username=prompt("Enter username");
var n=Number(prompt("Enter no of subjects"));
let subjects=[];
let total=0;
let mx=-1;
let mxSub="";
for (let i = 0; i < n; i++) {
    let subjectName = prompt(`Enter the name of subject ${i + 1}:`);
    let subjectMarks = parseFloat(prompt(`Enter marks for ${subjectName}:`));
  
    subjects.push({ name: subjectName, marks: subjectMarks });
    total+=subjectMarks;
    if(subjectMarks>mx){
        mx=subjectMarks;
        mxSub=subjectName;
    }
  }
  let per=(total/(n*100))*100;
  console.log("Percentage is",per);
  console.log("Highest scring subject is",mxSub," with marks ",mx);
  if (per>90) console.log("Grade is A");
  else if (per<90 && per>70) console.log("Grade is b");
  else console.log("Grade is C");