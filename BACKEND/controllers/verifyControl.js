
const  { UsersModel }  = require("../model/UsersModel");
const cookieParser = require("cookie-parser");
const { hashPassword, comparePassword } = require("../services/hashServices");
const { generateToken } = require("../services/jwtServices");

module.exports.verify =  async(req, res) =>{

 res.status(200).json({
    message: "Authorized",
    user: req.user
  });
};

module.exports.login =  async (req, res) => {
  // try {
    const { email, password } = req.body; 
    
    const user = await UsersModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });
    
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });
    const token = generateToken({ id: user._id, email: user.email });
    res.cookie("token", token
      , {
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "lax",
    maxAge: 30 * 60 * 1000
  }
).status(201).json("Login successful")
// .json({ token: token});
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
}
module.exports.signup = async (req, res) => {
  // try {
    console.log(req.body);
    const { username, email, password , contact, zerodhaApp} = req.body;

    const existingUser = await UsersModel.findOne({ email });
    if (existingUser)
      return res.json({ message: "User already exists!" });
    
    const hashedPassword = await hashPassword(password);
    const user = new UsersModel({ username, email, password: hashedPassword , contact, zerodhaApp});
    await user.save();
    
    res.status(201).json({ message: "User registered successfully!" });
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
}