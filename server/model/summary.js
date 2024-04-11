const mongoose=require("mongoose");

var schema= new mongoose.Schema({
 CIN:{
 	type: String,
 	unique:true
 },
 cname:{
 	type: String
 },
 section:{
 	type: String
 },
 pjudge:{
 	type: String
 },
 
 dlawyer:{
 	type: String
 },
 pprosecutor:{
 	type: String
 },
 csummary:{
 	type: String
 }

})

const SummaryDb= mongoose.model('summarydb', schema);

module.exports = SummaryDb;