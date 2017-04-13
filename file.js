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
exports.readBasic = function(object){
	fs.readFile("basicard.txt","utf8", function(err,data){
		if(err){
			console.log("there was an error");
		}

		var dataObj = "[" + data + "]";
		var parsedJson = JSON.parse(dataObj);
		var randomCard = Math.floor(Math.random()*parsedJson.length);

		console.log(parsedJson[randomCard].front);
		});
}

exports.readCloze = function(object){
	fs.readFile("clozecard.txt","utf8", function(err,data){
		if(err){
			console.log("there was an error");
		}

		var dataObj = "[" + data + "]";
		var parsedJson = JSON.parse(dataObj);
		var randomCard = Math.floor(Math.random()*parsedJson.length);

		console.log(parsedJson[randomCard].clozeDeleted);
		});
}

