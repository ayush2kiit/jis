const axios=require("axios");

exports.homeRoutes=(req,res)=>{
axios.get("http://localhost:5000/api/users")
res.render('pages/index');
}

exports.viewCase=(req,res)=>{
axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('pages/viewCase', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

}
exports.addCase=(req,res)=>{
res.render('pages/addCase');
}


exports.addJudge=(req,res)=>{
    res.render('pages/addJudge');
    }

exports.addLawyer=(req,res)=>{
   res.render('pages/addLawyer');
 }

exports.update_user = (req, res) =>{
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("pages/update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.contactUs=(req,res)=>{
res.render('pages/contactUs');
}

exports.login=(req,res)=>{
res.render('pages/login');
}

exports.lawyerLogin=(req,res)=>{
    res.render('pages/lawyerLogin');
 }


 exports.judgeLogin=(req,res)=>{
    res.render('pages/judgeLogin');
 }
exports.register=(req,res)=>{
res.render('pages/register');
}
//added
exports.viewJudges=(req,res)=>{
    axios.get('http://localhost:5000/api/judges')
        .then(function(response){
            res.render('pages/viewJudges', { judges : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.viewLawyers=(req,res)=>{
    axios.get('http://localhost:5000/api/lawyers')
        .then(function(response){
            res.render('pages/viewLawyers', { judges : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}


exports.viewSession=(req,res)=>{
    axios.get('http://localhost:5000/api/hearings')
        .then(function(response){
            res.render('pages/viewSession', { hearings : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.viewSummary=(req,res)=>{
    axios.get('http://localhost:5000/api/summarys')
        .then(function(response){
            res.render('pages/viewSummary', { summarys : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.success=(req,res)=>{
res.render('pages/success');
}
exports.failure=(req,res)=>{
res.render('pages/failure');
}
exports.aboutUs=(req,res)=>{
    res.render('pages/aboutUs');
}