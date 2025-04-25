const {getProductsController}=require('../controllers/getProductsController');
const express = require('express')

const productRouter = express.Router();

productRouter.get("/",getProductsController);

module.exports = { productRouter };