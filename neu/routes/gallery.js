var Spreadsheet = require('edit-google-spreadsheet');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
Spreadsheet.load({
    debug: true,
    spreadsheetId: '1uVeclWMeuswX3WR-7a5cmV54MxRv6K7lbBmihfOb5ec',
    worksheetName: 'Donations',
    worksheetId:'od6',

    oauth : {
        email: 'driveapis@neulnp-4342.iam.gserviceaccount.com',
        keyFile: 'neulnp.pem'
    }

}, function sheetReady(err, spreadsheet) {

    if (err) {
        throw err;
    }

    spreadsheet.receive(function(err, rows, info) {
        if (err) {
            throw err;
        }

        console.dir(rows[9]);
//Object.keys(rows[9]).forEach(function(key) {
 // var val =rows[9][2];
        res.render('gallery', { voters:rows});
//});

        //console.dir(info);
    });

});


});

module.exports = router;

