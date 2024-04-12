
var Userdb = require('../model/model');
var Judgesdb=require('../model/judges');
var SessionDb=require('../model/session');
var SummaryDb=require('../model/summary');
var Lawyersdb=require('../model/lawyers');
// create and save new user

exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    //create new instance
  const user=new Userdb({
  	caseNumber: req.body.caseNumber,
  	date: req.body.date,
  	Crime: req.body.Crime,
  	Culprit: req.body.Culprit,
  	Victim: req.body.Victim,
  	Status:req.body.Status,
  	Judgement: req.body.Judgement

  })


    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
  
//search
// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

//update an existing user using id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

////////////////////////////////////


//lawyer db

exports.createLawyer = (req, res) => {
    // validate request
     if (!req.body) {
       res.status(400).send({ message: "Content can not be empty!" });
         return;
    }

    //console.log(req.body);
    //return;


     const { username, password, name, activecases, pastcases } = req.body;
    
     const newLawyer = new Lawyersdb({
        username,
        password,
        name,
        activeCases: activecases.split(',').map(Number), // Convert string to array of numbers
        pastCases: pastcases.split(',').map(Number) // Convert string to array of numbers
      });

      console.log(newLawyer.username);

      //return;

   newLawyer.save()

   // console.log("saved");
        .then(data => {
           // res.send(data);
           res.redirect('/addlawyer');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

    // console.log("hisdf");
}




exports.findLawyer = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Lawyersdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found judge with id " + id });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving judge with id " + id });
            });
    } else {
        Lawyersdb.find()
            .then(judges => {
                res.send(judges);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving judge information" });
            });
    }
}


///////


exports.createJudge = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    

        const { RIG, password, name, activecases, pastcases } = req.body;
        
    const newJudge = new Judgesdb({
        RIG,
        password,
        name,
        activeCases: activecases.split(',').map(Number), // Convert string to array of numbers
        pastCases: pastcases.split(',').map(Number) // Convert string to array of numbers
      });


      console.log(req.body);





    // Save the new judge instance to the database
    newJudge.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}



exports.findJudge = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        Judgesdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found judge with id " + id });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving judge with id " + id });
            });
    } else {
        Judgesdb.find()
            .then(judges => {
                res.send(judges);
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while retrieving judge information" });
            });
    }
}

//judges db



//sessions db
exports.createSession = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    //create new instance
  const hearing=new SessionDb({
    CIN: req.body.CIN,
    cname: req.body.cname,
    time: req.body.time,
    reason: req.body.reason,
    presidingJudge: req.body.presidingJudge,
    prosecutor: req.body.prosecutor
  })


    // save user in the database
    hearing
        .save(hearing)
        .then(data => {
            res.send(data)
            
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}


exports.findSession = (req, res)=>{

    if(req.query.id){
        const id = req.query.id

        SessionDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        SessionDb.find()
            .then(hearing=> {
                res.send(hearing)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
//session db




//summary db
exports.createSummary = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    //create new instance
  const summary=new SummaryDb({
    CIN: req.body.CIN,
    cname: req.body.cname,
    section: req.body.section,
    pjudge: req.body.pjudge,
    dlawyer: req.body.dlawyer,
    pprosecutor: req.body.pprosecutor,
    csummary: req.body.csummary
  })


    // save user in the database
    summary
        .save(summary)
        .then(data => {
            res.send(data)
            
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}


exports.findSummary = (req, res)=>{

    if(req.query.id){
        const id = req.query.id

        SummaryDb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        SummaryDb.find()
            .then(hearing=> {
                res.send(hearing)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
//summary db