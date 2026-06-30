
const  { OrdersModel }  = require("../model/OrdersModel");

module.exports.allOrders =  async(req, res) =>{
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
};
module.exports.newOrders = async(req, res) =>{
//   try{
    console.log(req.body);
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        percent: req.body.percent,
        mode: req.body.mode,
    });
    await newOrder.save();
    res.json({message:"Order saved"});
//   } catch (err) {
//     // Handle errors gracefully
//     res.status(500).json({ error: err.message });
//   }
};
