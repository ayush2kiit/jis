const mongoose=require("mongoose");

var lawyerSchema= new mongoose.Schema({
	    username:{
		   type: String,
		  
	   },
	   password: {
		   type: String,
		   
	   },
	   name:{
		type:String,
	   },
	   activeCases:[Number],
	   pastCases:[Number] // Define pastCases as an array of numbers
    
   });
   
const Lawyersdb= mongoose.model('lawyerDB', lawyerSchema);

module.exports = Lawyersdb;