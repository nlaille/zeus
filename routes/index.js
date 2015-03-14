var express = require('express');
var router = express.Router();

var kafka = require('kafka-node');

var client = new kafka.Client();
var producer = new kafka.Producer(client);

/* GET home page. */
router.get('/', function(req, res) {
  	res.json({});
});

/* POST home page. */
router.post('/', function(req, res) {
	var payloads = [
        { topic: 'test', messages: [req.body.message] }
    ];
	producer.send(payloads, function (err, data) {
    	console.log(data);
	});
  	res.json({});
});

module.exports = router;
