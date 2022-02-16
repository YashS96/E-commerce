import express from 'express'
import getProducts from '../controllers/product-controller.js'

let route = express.Router();

route.use('/products', getProducts);

export default route;