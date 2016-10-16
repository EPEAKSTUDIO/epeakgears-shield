var logUtils = require('./logUtils.js');

// The Shield global manager
var envUtils = {
	// Logs what environment the app is running on (dev on device)
	detectEnvironment : function() {
		if(process.env['RESIN']) {
			logUtils.info("Running on a device");
		} else {
			logUtils.info("Running on desktop");
		}
	},
		
	// Check that all mandatory environment variables are correctly setup
	checkEnvVars : function() {
		logUtils.info("Check environment variables...")
		var hasErrors = false;
		hasErrors |= this.checkVar('API_KEY');
		hasErrors |= this.checkVar('INGEST_SERVER');
		hasErrors |= this.checkVar('DEVICE_KEY');

		return hasErrors;
	},

	checkVar : function(varName) {
		if(process.env[varName] === undefined) {
			logUtils.error(' > ' + varName + ' var is not setup.');
			return true;
		} else {
			logUtils.info(' > ' + varName + ' loaded with value ' + process.env[varName]);
		}
		return false;
	}
};

module.exports = envUtils;