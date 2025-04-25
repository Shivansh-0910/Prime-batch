const mongoose=require("mongoose")
mongoose.connect(
    "mongodb+srv://shivansh:Hbeast007@cluster0.ndlw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log('-------database connected-----')
}).catch((err)=>{
    console.log("------DB connection Eror");
    console.log(err.message);
    console.log("---------------")
})