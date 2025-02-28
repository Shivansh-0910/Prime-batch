const getData=(text)=>{
    const pr=fetch(`https://google-map-places.p.rapidapi.com/maps/api/place/autocomplete/json?input=${text}&language=en&region=en`,{
        method:"GET",
        headers:{
            "x-rapidapi-host": "google-map-places.p.rapidapi.com", 
            "x-rapidapi-key": "161ef50210mshc0eebc166f26b11p11eaa3jsnebb5a2a9cdab",
        },
    });
    pr.then((res)=>{
        const pr2=res.json();
        pr2.then((data)=>{
            showLocations(data);
        });
    });
};


const root=document.getElementById("locations")
const showLocations=(data)=>{
    root.innerHTML="";
    const {predictions}=data;
    predictions.forEach((elem)=>{
        const p=document.createElement("p");
        p.innerText=elem.description;
        root.appendChild(p);
    });
};


let timeoutId=null;
const handleSearch=(e)=>{
    if(timeoutId){
        clearTimeout(timeoutId);
    }
   timeoutId= setTimeout(()=>{
        getData(e.target.value);
    },1000);
};