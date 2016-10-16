/**
 * Loggin utility
 */
var logUtils = {
	info : function(text) {
		logUtils.log('[INFO ]', text);
	},
	
	warn : function(text) {
		logUtils.log('[WARN ]', text);
	},
	
	error : function(text) {
		logUtils.log('[ERROR]', text);
	},
	
	log : function(type, text) {
		var now = new Date();
		var formattedDate = now.getFullYear();
		formattedDate += '-' + (now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth());
		formattedDate += '-' + (now.getDate() < 10 ? '0' + now.getDate() : now.getDate());
		formattedDate += ' ' + (now.getHours() < 10 ? '0' + now.getHours() : now.getHours());
		formattedDate += ':' + (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());
		formattedDate += ':' + (now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds());
		
		console.log(type + " [" + formattedDate + "] " + text);
	}
};

module.exports = logUtils;