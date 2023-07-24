const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    message:{type:String,required:true}
})

const query = new mongoose.model('Query',contactSchema);
module.exports=query;