const express=require("express");
const route=express.Router()


const services=require("../services/render");
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/view', services.viewCase);
route.get('/add', services.addCase);
route.get('/addlawyer', services.addLawyer);
route.get('/addjudge', services.addJudge);

route.get('/update-user', services.update_user);
route.get('/contact', services.contactUs);
route.get("/login",services.login);
route.get("/register",services.register);
route.get('/judges', services.viewJudges);
route.get('/session', services.viewSession);
route.get('/summary', services.viewSummary);
route.get('/success', services.success);
route.get('/failure', services.failure);
route.get('/about', services.aboutUs);
route.get('/lawyerLogin',services.lawyerLogin);
route.get('/judgeLogin',services.judgeLogin);




// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.post('/api/judges',controller.createJudge);
route.post('/api/lawyers',controller.createLawyer);
route.get('/api/judges', controller.findJudge);
route.get('/api/lawyers', controller.findJudge)


route.post('/api/hearings',controller.createSession);
route.get('/api/hearings', controller.findSession);

route.post('/api/summarys',controller.createSummary);
route.get('/api/summarys', controller.findSummary );


module.exports=route