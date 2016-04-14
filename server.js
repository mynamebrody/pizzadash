var express= require("express");
var router = express.Router();
var path = __dirname + '/html/'
var session = 'hello';

router.use(function (req,res,next){
	console.log("/"+req.method);
	next();
});

router.get("/",function(req,res){
	res.sendFile(path+'index.html');
});

router.get("/customer",function(req,res){
	res.sendFile(path+'PersonalInformation.html');
});

router.post("/customer",function(req,res){
	session={}
	session.order={}
	session.order.customer={}
	session.order.customer.firstName=req.body.firstname
	session.order.customer.lastName=req.body.lastname
	session.order.customer.address={}
	session.order.customer.address.Street=req.body.streetaddress
	session.order.customer.address.City=req.body.city
	session.order.customer.address.Region=req.body.state
	session.order.customer.address.PostalCode=req.body.zip
	session.order.customer.email=req.body.email
	session.order.customer.phone=req.body.phone
	res.redirect('/billing');
});

router.get("/billing",function(req,res){
	res.sendFile(path+'CreditCardInfo.html');
});

router.post("/billing",function(req,res){
	session.cardNum=req.body.cardNum;
	session.cardExp=req.body.cardExp;
	session.cardSec=req.body.cardSec;
	session.cardPost=req.body.cardPost;
	console.log(session);
	console.log(session.order.customer.address);
	res.redirect("/");
});

router.get("*",function(req,res){
  res.sendFile(path + "index.html");
})



module.exports.router=router;
module.exports.session=function getSession(){return session;}
