var envUtils = require('./utils/envUtils.js');
var logUtils = require('./utils/logUtils.js');
var shield = require('./shield.js');

logUtils.info('---------------------------------------------------------------------------');
logUtils.info('Starting Shield...');
logUtils.info('---------------------------------------------------------------------------');

// Detect environment 
envUtils.detectEnvironment();

//Perform environment key checks
var hasErrors = envUtils.checkEnvVars();

if(!hasErrors) {
	shield.start();
} else {
	logUtils.error('The Shield could not boot due to previous errors.');
}
