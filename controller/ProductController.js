const Product = require("../models/ProductsModel");

exports.createProduct = (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  Product.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    res.status(201).json({
      success: true,
      data,
    });
  });
};

exports.readProduct = (req, res) => {
  const query = {};
  Product.find(query, (err, data) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
    res.status(201).json({
      success: true,
      data,
    });
  });
};
exports.readProductById = async(req,res)=>{
  try {
    const {id} = req.params
    const product = await Product.findOne({_id:id})
    if(!product){
      res.status(404).json({
        success:false,
        message:'Product Not Found!'
      })
    }
    res.status(200).json({
      success:true,
      product
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

exports.updateProduct = (req,res)=>{
    const reqBody = req.body;
    const id = req.params.id
    const query = {_id:id}
    Product.updateOne(query,reqBody,(err,data)=>{
        if(err){
            res.status(400).json({
                success:false,
                message:err.message
            })
        }
        res.status(207).json({
            success:true,
            data
        })
    })
}

exports.deleteProduct = (req,res)=>{
    const id = req.params.id
    const query = {_id:id}
    Product.deleteOne(query,(err,data)=>{
        if(err){
            res.status(400).json({
                success:false,
                message:err.message
            })
        }
        res.status(207).json({
            success:true,
            message:'deleted',
            data
        })
    })
}