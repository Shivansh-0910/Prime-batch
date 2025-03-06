// const parent=document.getElementById("parent");
// const ul=document.createElement('ul');
// const l1=document.createElement('li');
// l1.innerText="Item 1";
// const l2=document.createElement('li');
// l2.innerText="Item 2";
// const l3=document.createElement('li');
// l3.innerText="Item 3";

// ul.appendChild(l1);
// ul.appendChild(l2);
// ul.appendChild(l3);
// parent.appendChild(ul);

// console.log(React);
// console.log(ReactDOM);

// const domRoot =document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(domRoot);

// const li1=React.createElement("li",{
//     style:{
//         color:"blue",
//     },
// },"Item 1"); //--> type , options , children
// const li2=React.createElement("li",{},"Item 2"); //--> type , options , children
// const li3=React.createElement("li",{},"Item 3"); //--> type , options , children

// const ul=React.createElement("ul",{},[li1,li2,li3]);

// reactRoot.render(ul);

// -----------------------------------------------------------------------------------

// const domRoot =document.getElementById("parent");
// const reactRoot=ReactDOM.createRoot(domRoot);
// const title=React.createElement("h1",{},"Hello");
// console.log("Type of title" , typeof title);
// console.log("Title",title);

// const title2={
//    $$typeof:Symbol.for("react.element"),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         style:{color:"blue"},
//         "children": "Hell0"
//     },
//     "_owner": null,
//     "_store": {}
// }
const domRoot =document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);
const title=React.createElement("h1",{},"Hello");
console.log("Type of title" , typeof title);
console.log("Title",title);

const title2=<h1>Hello from jsx</h1>
reactRoot.render(title2);