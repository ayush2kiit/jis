const mongoose=require("mongoose");

var judgeSchema= new mongoose.Schema({
	RIG:{
		   type: String,
		   required: [true, "Judge ID is required"]
	   },
	   password: {
		   type: String,
		   required: [true, "Password is required"]
	   },
	   name:{
		type:String,
	   },
	   activeCases:{
		type:String,
	   },
	   pastCases:{
		type:String,
	   }
   })
   
const Judgesdb= mongoose.model('judgeDB', judgeSchema);

module.exports = Judgesdb;