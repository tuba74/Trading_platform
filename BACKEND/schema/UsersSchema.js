const { Schema } = require("mongoose");

const UsersSchema = new Schema({
        username: {
            type:String,
            required: true
        },
        email:  {
            type:String,
            required: true
        },
        password:  {
            type:String,
            required: true
        },
        contact:  {
            type:Number,
            required: true
        },
        zerodhaApp: String

});
module.exports = { UsersSchema };