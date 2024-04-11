const mongoose=require("mongoose");

var schema= new mongoose.Schema({
 CIN:{
 	type: String,
 	unique:true
 },
 cname:{
 	type: String
 },
 time:{
 	type: String
 },
 reason:{
 	type: String
 },
 
 presidingJudge:{
 	type: String
 },
 prosecutor:{
 	type: String
 }
})

const SessionDb= mongoose.model('sessiondb', schema);

module.exports = SessionDb;