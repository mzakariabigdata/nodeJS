var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json');
var connexionData = require('../data/connexion.json');

router.get('/api', function(req, res) {
	res.json(feedbackData);
});

router.get('/connexion_api', function(req, res) {
	res.json(connexionData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
	feedbackData.unshift(req.body);
	fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
		if(err){
			console.log(err);
		}
	});
	res.json(feedbackData);
});

router.post('/connexion_api', function(req, res) {
	connexionData.unshift(req.body);
	fs.writeFile('app/data/connexion.json', JSON.stringify(connexionData), 'utf8', function(err){
		if(err){
			console.log(err);
		}
	});
	res.json(connexionData);
});

router.delete('/api/:id', function(req, res) {
	feedbackData.splice(req.params.id, 1);
	fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err){
		if(err){
				console.log(err);
			}
	});
	res.json(feedbackData);
});

router.delete('/connexion_api/:id', function(req, res) {
	connexionData.splice(req.params.id, 1);
	fs.writeFile('app/data/connexion.json', JSON.stringify(connexionData), 'utf8', function(err){
		if(err){
				console.log(err);
			}
	});
	res.json(connexionData);
});

module.exports = router;
