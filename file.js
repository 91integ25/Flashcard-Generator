var fs = require('fs');

exports.writeBasic = function(object){
	fs.appendFile("basicard.txt", object,function(err,data){
		if(err){
			console.log("there was an error")
		}
		
	});
}
exports.writeCloze = function(object){
	fs.appendFile("clozecard.txt", object,function(err,data){
		if(err){
			console.log("there was an error")
		}
		
	});
}