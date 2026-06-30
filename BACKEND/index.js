require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const  { PositionsModel }  = require("./model/PositionsModel");
const  { OrdersModel }  = require("./model/OrdersModel");
const  { UsersModel }  = require("./model/UsersModel");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const methodOverride = require("method-override");
const { hashPassword, comparePassword } = require("./services/hashServices");
const { generateToken } = require("./services/jwtServices");
const {authMiddleware} = require("./middlewares/authMiddleware");
const ExpressError = require("./services/ExpressError.js");
const holdsPos = require("./routes/holds&PosRoutes.js");
const orders = require("./routes/orderRoutes.js");
const verified = require("./routes/verificationRoutes.js");

const uri = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ["http://localhost:5173","http://localhost:5174","http://localhost:8000"];
app.use(cors({
  origin:true,
  function(origin, callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(methodOverride("_method"));

app.use("/dashboard", holdsPos);
app.use("/dashboard/orders", orders);
app.use("/", verified);

// app.get("/verify", authMiddleware, async(req, res) =>{

//  res.status(200).json({
//     message: "Authorized",
//     user: req.user
//   });
//   // console.log(res);
// })
// app.get("/allHoldings", async(req, res) =>{
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// })
// app.get("/allPositions", async(req, res) =>{
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
// })
// app.get("/allOrders", authMiddleware, async(req, res) =>{
//     const allOrders = await OrdersModel.find({});
//     res.json(allOrders);
// })
// app.post("/newOrder", async(req, res) =>{
//   try{
//     let newOrder = new OrdersModel({
//         name: req.body.name,
//         qty: req.body.qty,
//         percent: req.body.percent,
//         mode: req.body.mode,
//     });
//     await newOrder.save();
//     res.json({message:"Order saved"});
//   } catch (err) {
//     // Handle errors gracefully
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/signup", async (req, res) => {
//   try {
//     console.log(req.body);
//     const { username, email, password , contact, zerodhaApp} = req.body;

//     const existingUser = await UsersModel.findOne({ email });
//     if (existingUser)
//       return res.json({ message: "User already exists!" });

//     // Step 2: Hash password using hashService
//     const hashedPassword = await hashPassword(password);

//     // Step 3: Save user to database
//     const user = new UsersModel({ username, email, password: hashedPassword , contact, zerodhaApp});
//     await user.save();

//     // Step 4: Send success response
//     // res.json();
//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (err) {
//     // Handle errors gracefully
//     res.status(500).json({ error: err.message });
//   }
// }
// );

// // Login user
// app.post("/login" , async (req, res) => {
//   try {
//     const { email, password } = req.body; // Get user input

//     // Step 1: Find user by email
//     const user = await UsersModel.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: "Invalid email or password" });

//     // Step 2: Compare provided password with hashed password
//     const isMatch = await comparePassword(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid email or password" });

//     // Step 3: Generate JWT using jwtService
//     const token = generateToken({ id: user._id, email: user.email });

//     // Step 4: Send success response with token
//     res.cookie("token", token
//       , {
//     httpOnly: true,
//     secure: false, // true in production (HTTPS)
//     sameSite: "lax",
//     maxAge: 60 * 1000
//   }
// ).status(201).json({ message: "Login successful!"});
//     // res.status(201).json({ message: "Login successful!", token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.use((req, res, next) =>{
  next(new ExpressError(404 , "Page not found"));
})

app.use((err, req, res, next)=>{
  let { statusCode=500, message="Something went wrong"} = err;
  res.status(statusCode).json(message);
})
// Protected profile route
// exports.profile = (req, res) => {
//   // req.user is set by auth middleware after token verification
//   res.json({
//     message: "Welcome to your profile!",
//     user: req.user,
//   });
// };



// ***Following two routes /addHoldings and /addPositions is to insert data in mongoatlas and we've 
// already used it if we use this one more time data will be duplicated in db***

// app.get("/addHoldings", async(req, res) =>{
//     let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

    // tempHoldings.forEach((item) =>{
    // let newHolding = new HoldingsModel({
    //     name: item.name ,
    //     qty: item.qty,
    //     avg: item.avg,
    //     price: item.price,
    //     net: item.net,
    //     day: item.day,
    // });

//     // newHolding.save();
//     // });
//     console.log(tempHoldings);
//     await HoldingsModel.insertMany(tempHoldings);
//     res.send("data added");
// });

// app.get("/addPositions", async(req, res) =>{
// const tempPositions =  [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//   tempPositions.forEach((item) =>{
//     console.log(item);

//     let newPosition = new PositionsModel({
//         product: item.product,
//         name: item.name ,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//         isLoss: item.isLoss,
//     });
// // console.log(newPositionPositions);

//      newPosition.save();
//     });
// console.log(tempPositions);
//  await PositionsModel.insertMany(tempPositions);
//  res.send("Done");
// });


app.listen(PORT, () =>{
    console.log("App is lsteninng");
    mongoose.connect(uri);
    console.log("DB Connected");
});