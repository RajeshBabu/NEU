var express = require('express');
var router = express.Router();
var pg = require("pg");


var client = new pg.Client({
    user: "jteaxkigpnusgs",
    password: "ZYy83sCtUbpZarJ1Lx0trw5k3h",
    database: "da36pli5pqbcr",
    port: 5432,
    host: "ec2-46-137-159-123.eu-west-1.compute.amazonaws.com",
    ssl: true
}); 
client.connect();


/* Post users listing. */
router.post('/', function(req, res) {
   var username   = req.body.username;
   var password   = req.body.password;
   var email      = req.body.email;
   var whatsappno = req.body.whatsappno;
   var firstname  = req.body.first_name;
   var lastname   = req.body.last_name; 
   var address    = req.body.address
   var post       = {status: 'success', code: 200}; 
   var query = client.query('INSERT into neu_user (UserName,Password,Email,WhatsappNo,FirstName,LastName,Address) VALUES($1, $2, $3,$4,$5,$6,$7)', [username, password, email,whatsappno,firstname,lastname,address]);
   res.send(post+query); 
 console.log(query.sql); 
});
module.exports = router;
