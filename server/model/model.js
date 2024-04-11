const mongoose=require("mongoose");

var schema= new mongoose.Schema({
 caseNumber:{
 	type: String
 },
 date:{
 	type: String
 },
 Crime:{
 	type: String
 },
 Culprit:{
 	type: String
 },
 Victim:{
 	type: String
 },
 Status:{
 	type: String
 },
 Judgement:{
 	type: String
 }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;