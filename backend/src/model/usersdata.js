const mongoose =require("mongoose");
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.m3fcx.mongodb.net/toystore?retryWrites=true&w=majority');
const Schema= mongoose.Schema;


const UserSchema = new Schema({
   
    FirstName:String,
    LastName:String,
    email: String,
    password: String,
    phone: String,
    
});

var Userdata = mongoose.model('userdata', UserSchema);

module.exports = Userdata;
