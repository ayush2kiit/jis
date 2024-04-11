const mongoose=require("mongoose");

var judgeSchema= new mongoose.Schema({
	RIG:{
		   type: String,
		   required: [true, "Registrar ID is required"]
	   },
	   password: {
		   type: String,
		   required: [true, "Password is required"]
	   }
   })


const Judgesdb = mongoose.model('judgedb', judgeSchema);

module.exports = Judgesdb;