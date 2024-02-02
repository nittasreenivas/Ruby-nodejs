const express = require('express')

const router = express.Router()

const {Product} = require('../models/products')
//get all products
router.get("/", (req, res) => {
    Product.find().then((allProducts) => {
        res.status(200).json({status:true,data:allProducts})
    }).catch((err) => {
        res.status(500).json({status:false,data:err})
    })
  
});
// get product by id
router.get("/:id", (req, res) => {
    Product.findById(req.params.id).then((allProducts) => {
        res.status(200).json({status:true,data:allProducts})
    }).catch((err) => {
        res.status(500).json({status:false,data:err})
    })
  
});
// creting a product
router.post("/", (req, res) => {
  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
  });
  product
    .save()
    .then((createdProduct) => {
      res
        .status(200)
        .json({
          status: true,
          msg: "Product Created Succesfully",
          data: createdProduct,
        });
    })
    .catch((err) => {
      res
        .status(500)
        .json({
          status: false,
          msg: "Product did not  Created Succesfully",
          data: err,
        });
    });
});
// update a product
router.put("/:id", (req, res) => {
    Product
      .findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        quntity:req.body.quantity,
        price:req.body.price
      })
      .then((createdProduct) => {
        res
          .status(200)
          .json({
            status: true,
            msg: "Product Updated Succesfully",
          });
      })
      .catch((err) => {
        res
          .status(500)
          .json({
            status: false,
            msg: "Product did not  Created Succesfully",
            data: err,
          });
      });
  });

  // deleting a product
  router.delete("/:id", (req, res) => {
    Product.deleteOne({_id:req.params.id}).then((allProducts) => {
        res.status(200).json({status:true, msg:"Product deleted succesfully",data:allProducts})
    }).catch((err) => {
        res.status(500).json({status:false,data:err})
    })
  
});
module.exports = router;