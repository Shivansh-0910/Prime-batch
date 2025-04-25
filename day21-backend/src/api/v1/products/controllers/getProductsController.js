const getProductsController=(req,res)=>{
    res.send({
        status:"success",
        data:{
            products:[],
        },
    })
}
module.exports = {getProductsController};