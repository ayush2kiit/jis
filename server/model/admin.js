const mongoose=require("mongoose");

var adminSchema= new mongoose.Schema({
 RIG:{
        type: String,
        required: [true, "Registrar ID is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})

const adminDB= mongoose.model('adminDB', adminSchema);

module.exports = adminDB;