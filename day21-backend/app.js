// npm i express nodemon dotenv mongodb mongoose
require("./src/config/db.js")
const express=require('express')
const morgan=require('morgan');
const {productRouter}=require("./src/api/v1/products/routes/product-routes.js")
const app=express();
const PORT=2200;


// app.use((req,res,next)=>{
//     console.log("---HEllo---");
// })


app.use(morgan("dev"));

app.use("/api/v1/products",productRouter)


app.listen(PORT,()=>{
    console.log(`App is running on port : ${PORT}`)
})