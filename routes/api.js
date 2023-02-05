const { createProduct, updateProduct, deleteProduct, readProduct, readProductById } = require('../controller/ProductController')

const router = require('express').Router()

router.post('/createProduct',createProduct)
router.post('/updateProduct/:id',updateProduct)
router.get('/deleteProduct/:id',deleteProduct)
router.get('/readProduct',readProduct)
router.get('/readProduct/:id',readProductById)
module.exports = router