var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   // get record from db
   const knex = res.locals.knex
   knex('users').select("*").then(data=>{
     if(data===undefined){
       res.locals.react('FAILED',{})
     }else{
       res.locals.react('SUCESS',data)
     }
   })
});
module.exports = router;
