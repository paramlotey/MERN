const express = require("express");
const cookieParser = require("cookie-parser")
const {
  queryContact,
  registerNewUser,
  adminLOGIN,
  adminSignup,
} = require("../controller/controller");
const Autheticate = require("../middleware/authenticate");
const router = express.Router();
router.use(cookieParser());

router
  .post("/contact", queryContact)
  .post("/register", registerNewUser)
  .post("/login", adminLOGIN)
  .post("/signup", adminSignup)

.get("/dashboard",Autheticate,(req,res)=>{
  console.log("hello dashboard")
  res.send(req.rootAdmin);
});
module.exports = router;
