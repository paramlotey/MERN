const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const adminSchema = new mongoose.Schema({
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    CPassword:{type:String,required:true},
    tokens: [{ token: { type: String, required: true } }],
  })
  adminSchema.pre("save", async function (next) {
    try {
      if (this.isModified("Password")) {
        this.Password = await bcrypt.hash(this.Password, 10);
        this.CPassword = await bcrypt.hash(this.CPassword, 10);
      }
      next();
    } catch (error) {
      console.log(error);
    }
  });
  adminSchema.methods.generateAuthToken = async function () {
    try {
      let token = jwt.sign({ _id: this._id },process.env.SECRET_KEY);
      this.tokens= this.tokens.concat({token:token})
      await this.save()
      return token
    } catch (error) {
      console.log(error);
    }
  };

  const Admin = new mongoose.model("Admin",adminSchema)

module.exports=Admin;