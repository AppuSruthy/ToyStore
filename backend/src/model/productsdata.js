const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.m3fcx.mongodb.net/toystore?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const ProductSchema = new Schema({
    productId:Number,
    productName:String,
    productCode:String,
    releaseDate: String,
    description: String,
    price: Number,
    starRating: Number,
    imageUrl:String,
    stock:Number,
    agegroup:String
});

var Productdata = mongoose.model('productdata', ProductSchema);

module.exports = Productdata;
