const express = require('express');
const app= new express();
const Productdata= require("./src/model/Productsdata");
const Userdata= require("./src/model/usersdata");
const cors = require('cors');
 const jwt = require('jsonwebtoken');
 const multer = require('multer');
var bodyparser= require('body-parser');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(multer());
app.use(bodyparser.json());
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    Productdata.find()
    .then(function(products){
        res.send(products);
    })
   
});
app.post('/products/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl,
        stock:req.body.product.stock,
        agegroup:req.body.product.agegroup,
    }
    var product= new Productdata(product);
    product.save();
   
});
app.put('/products/:id',function(req,res){
    const id=req.params.id;
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    var item={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imageUrl:req.body.product.imageUrl
    }
    Productdata.findByIdAndUpdate({_id:id}, item, {new:true},(err,doc)=>{
        if(!err){res.send(doc);}
    });
   
});
app.delete('/products/:id',function(req,res){
    const id=req.params.id;
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    Productdata.findByIdAndRemove({_id:id},(err,doc)=>{
        if(!err){res.send(doc);}
    });
})


app.post('/products/users/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    var user={
        FirstName:req.body.user.FirstName,
        LastName:req.body.user.LastName,
        email:req.body.user.email,
        password:req.body.user.password,
        phone:req.body.user.phone
    }
    var user= new Userdata(user);
    user.save();
})
app.get('/users',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    Userdata.find()
    .then(function(users){
        res.send(users);
    })
   
    app.put('/login',function(req,res){
if(!username){
    res.status(401).send('Invaliid username');
}
else if(password!=Userdata.password){
    res.status(401).send('invalid password');
}
else{
    let payload ={subject:username+password}
    let token = jwt.sign(payload,'SecretKey');
    res.status(200).send(token)
}

    })
    })
    app.listen(port,(error)=>{
        if(!error)
        {
            console.log("Server Ready at "+ port);
        }
        else{
            console.log('Error Occurred');
        }
        
    });
