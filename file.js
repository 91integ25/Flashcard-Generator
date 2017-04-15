var fs = require('fs');

exports.writeBasic = function(object){
	//writing the new basic card object to the basicard.txt file
	fs.appendFile("basicard.txt", object,function(err,data){
		if(err){
			console.log("there was an error")
		}
		
	});
}

exports.writeCloze = function(object){
	//writing the new cloze card object to the clozecard.txt file
	fs.appendFile("clozecard.txt",object,function(err,data){
		if(err){
			console.log("there was an error")
		}
		
	});
}


fs.readFile("basicard.txt","utf8", function(err,data){
	if(err){
		console.log(err);
	}
	var dataObj = "[" + data + "]";
	var parsedJson = JSON.parse(dataObj);
	var randomCard = Math.floor(Math.random()*parsedJson.length);

	exports.showBasicFront = function(){
		console.log(parsedJson[randomCard].front);
		
	}

	exports.showBasicBack = function(user){
		console.log(parsedJson[randomCard].back)
	}

});

fs.readFile("clozecard.txt","utf8", function(err,data){
	if(err){
		console.log("there was an error");
	}

	var dataObj = "[" + data + "]";
	var parsedJson = JSON.parse(dataObj);
	var randomCard = Math.floor(Math.random()*parsedJson.length);

	exports.showClozeDeleted = function(object){
			console.log(parsedJson[randomCard].clozeDeleted);
	}

	exports.showCloze = function(object){
		console.log(parsedJson[randomCard].fulltext);
	}

});


