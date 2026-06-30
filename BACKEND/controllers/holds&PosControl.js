
const { HoldingsModel } = require("../model/HoldingsModel");
const  { PositionsModel }  = require("../model/PositionsModel");

module.exports.allHoldings =  async(req, res) =>{
    const allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
};

module.exports.allPositions = async(req, res) =>{
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
};