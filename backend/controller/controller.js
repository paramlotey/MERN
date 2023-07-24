const User = require("../model/schema");
const Admin = require("../model/adminSchema")
const Query = require("../model/query")
const bcrypt = require("bcrypt")

const queryContact =  async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    if (!name || !email || !subject || !message) {
      return res.status(422).json({ message: "Please fill all details" });
    } else {
      try {
        const query = new Query({ name, email, subject, message });
        await query.save();
        res.status(201).json({ message: "Query Submitted" });
      } catch (error) {
        console.log(error);
      }
    }
  };

const registerNewUser = async (req, res) => {
    const {
      firstname,
      lastname,
      occ_detail,
      email,
      edu_detail,
      dob,
      feet,
      inch,
      profile_picture,
    } = req.body;
  
    if (
      !firstname ||
      !lastname ||
      !occ_detail ||
      !email ||
      !edu_detail ||
      !dob ||
      !feet ||
      !inch ||
      !profile_picture
    ) {
      return res.status(422).json({ error: "Please fill all required fields" });
    }
  
    try {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return res.status(422).json({ error: "User Already Registered" });
      } else {
        const user = new User({
          firstname,
          lastname,
          occ_detail,
          email,
          edu_detail,
          dob,
          feet,
          inch,
          profile_picture,
        });
        await user.save();
        res.status(201).json({ message: "Success" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const adminLOGIN = async (req, res) => {
    try {
      const { Email, Password } = req.body;
  
      if (!Email || !Password) {
        res.status(400).json({ message: "User Error." });
      }
  
      const adminLogin = await Admin.findOne({ Email: Email });
  
      if (adminLogin) {
        const isMatch = await bcrypt.compare(Password, adminLogin.Password);
        if (!isMatch) {
          res.status(400).json({ message: "Invalid Credentials" });
        } else {
          const token = await adminLogin.generateAuthToken();
          console.log(token);
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 12000),
            httpOnly: true,
          });
          res.json({ message: "Login Success" });
        }
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const adminSignup = async (req, res) => {
    const { Email, Password, CPassword } = req.body;
  
    if (!Email || !Password || !CPassword) {
      return res.status(422).json({ error: "Please fill all required fields" });
    }
  
    if (Password !== CPassword) {
      return res.status(422).json({ error: "Passwords don't match" });
    }
  
    try {
      const adminExist = await Admin.findOne({ Email: Email });
      if (adminExist) {
        return res.status(422).json({ error: "Admin already registered" });
      }
  
      const admin = new Admin({
        Email,
        Password,
        CPassword,
      });
  
      await admin.save();
      res.status(201).json({ message: "Signup Success" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports={queryContact,registerNewUser,adminLOGIN ,adminSignup}