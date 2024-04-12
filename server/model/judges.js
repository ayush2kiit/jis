const mongoose=require("mongoose");

var judgeSchema= new mongoose.Schema({
		username:{
		   type: String,
		  // required:true,
		   //required: [true, "Judge ID is required"]
	   },
	   password: {
		   type: String,
		   //required:true,
		   //required: [true, "Password is required"]
	   },
	   name:{
		type:String,
	   },
	   activeCases:[Number],
	   pastCases:[Number] // Define pastCases as an array of numbers
    
   });
   
const Judgesdb= mongoose.model('judgeDB', judgeSchema);

module.exports = Judgesdb;