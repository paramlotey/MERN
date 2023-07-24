const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  occ_detail:{type:String,required:true},
  email:{type:String,required:true},
  edu_detail:{type:String,required:true},
  dob:{type:Date,required:true},
  feet:{type:String,required:true},
  inch:{type:String,required:true},
  profile_picture:{data:Buffer,type:String,required:true},
  tokens: [{ token: { type: String, required: true } }],
});


userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id },process.env.SECRET_KEY);
    this.tokens= this.tokens.concat({token:token})
    await this.save()
    return token
  } catch (error) {
    console.log(error);
  }
};


const User = new mongoose.model("User", userSchema);

module.exports = User;
