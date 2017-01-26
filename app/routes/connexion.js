var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  res.render('connexion', {
  	//locals variable
  	pageTitle: 'Connexion',
  	pageID: 'connexion'
  });

});

module.exports = router;
