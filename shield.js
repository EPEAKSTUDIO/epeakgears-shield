var https = require('https');
var autobahn = require('autobahn');
var logUtils = require('./utils/logUtils.js');

var https = require('https');
https.globalAgent.options.rejectUnauthorized = false;

/**
 * Shield manager
 */
var shield = {
	currentSession : [],
		
	start : function() {
		// Setup the autobahn connection
		var connection = new autobahn.Connection({
			url: 'wss://' + process.env.INGEST_SERVER + ':1337/ws',
			realm: process.env.API_KEY
		});
		
		// Register callbacks
		connection.onopen = shield.onopen;
		connection.onclose = shield.onclose;
		
		// Open the connection
		connection.open();
	},
	
	// Called when the autobahn connection is opened
	onopen : function(session) {
		logUtils.info('Device connected to network with session ID ' + session.id);
		
		logUtils.info('Register sensor discovery procedure...');
		var uriRegister = process.env.DEVICE_KEY + '.proc_list_sensors';
		session.register(uriRegister, retreiveSensorsData).then(function(reg){
			// Sensor discovery procedure registered
			shield.currentSession = session;
			
			// Start publishing data
			shield.startPublishingData();

			logUtils.info('Shield started and ready to cast sensor data !');
		}, function(err) {
			logUtils.error('Failed to register the procedure ' + err.error);
		});
	},
	
	// Called when the Autobahn connection is closed
	onclose : function(reason, details) {
		logUtils.info('Connection closed : ' + reason)
		logUtils.info('Detail : ' + details.message);
	},
	
	// Scans for connected sensors and return their characteristics
	retreiveSensorsData : function() {
		// TODO
	}
};

module.exports = shield;