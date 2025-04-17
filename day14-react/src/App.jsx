import {useState} from "react";
const AppForm=()=>{
  const [monitor,remote]=useState("Mohan");
  console.log("re-renddered" ,monitor)
  const handleChange=(e)=>{
    remote(e.target.value); //Noted
    console.log("updated ",monitor);
  }
return (
  <div>
  <div>
    <p>Name</p>
    <input value={monitor} placeholder="Please enter here..." onChange={handleChange}/>
    <h3>Hello {monitor}</h3>
    <button>Submit</button>
  </div>
  <div> 
    <p>Hello from {monitor}</p>
  </div>
  </div>
)
}
export default AppForm;