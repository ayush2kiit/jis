const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const dotenv= require("dotenv");
const morgan=require("morgan");
const app=express();
const ejs=require("ejs");
const md5=require("md5");
const path=require("path");
const connectDB = require('./server/database/connection.js');




dotenv.config({path: '.env'})
const PORT =  5000 || process.env.PORT;
connectDB();

app.set('view engine', 'ejs');
app.set('views', 'public');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//load routers
app.use('/',require("./server/routes/router"))

//authentication

const mongoose=require("mongoose");
const adminDB = require('./server/model/admin');

app.get("/login",function(req,res){
	res.render("login");
})

app.get("/lawyerlogin",function(req,res){
	res.render("lawyerLogin");
})

app.get("/judgelogin",function(req,res){
	res.render("judgeLogin");
})

app.get("/register",function(req,res){
	res.render("register");
})

app.post("/register",function(req,res){
	const newAdmin=new adminDB({
		RIG: req.body.RIG,
		password:md5(req.body.password)
	});

	newAdmin.save(function(err){
		if(err)
			res.redirect("/failure");
		else
			res.redirect("/success");
	});
});

app.post("/login",function(req,res){
	const username=req.body.RIG;
	const password=md5(req.body.password);
	adminDB.findOne({RIG:username},function(err,foundUser){
		if(err)
			res.redirect("/failure");
		else
		{
			if(foundUser){
				if(foundUser.password===password)
					res.redirect("/view");
				else
					res.redirect("/failure");
			}
		}
	})
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

