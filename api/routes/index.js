var express = require('express');
var router = express.Router();
var SHA256 = require("crypto-js/sha256");
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })


router.post('/login', function(req, res, next) {

  const {name,pwd} = req.body

  // need to validate the name and pwd here, but i gonna skip

  console.log(`${name}-${pwd}`)



 // get record from db base on name and pwd
  const knex = res.locals.knex
  knex('admins').where({
    name,
    pwd:SHA256(pwd).toString()
  }).first('id').then(data=>{
    if(data===undefined){
      res.locals.react('FAILED',{})
    }else{
      res.locals.react('SUCESS',data)
    }
  })

});


router.post('/register', function(req, res, next) {
  const {userName,cardNum,cardImg} = req.body
  // need to validate here, but i gonna skip
  console.log(userName)
  console.log(cardNum)
  console.log(cardImg)

  // save record to db base on trsaction
  const knex = res.locals.knex
  knex.transaction(function(trx) {
    return trx
      .insert({name:userName,id_card_number:cardNum,id_card_url:cardImg})
      .into('users')
  })
  .then(function(inserts) {
    console.log(inserts.length + ' new books saved.');
    if(inserts.length>0){
      res.locals.react("SUCESS",{})
    }else{
      res.locals.react("FAILED",{})
    }
  })
});


router.post('/upload', upload.single('avatar'),function(req, res, next) {
  console.log(req.file)
  console.log(req.body)

  // reponse file name to frontend
  res.locals.react("SUCESS",{
    fileName:req.file.filename
  })
});

module.exports = router;
