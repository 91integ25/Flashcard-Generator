var fulltext = process.argv[2];
var cloze =process.argv[3];

exports.Basicard = function (front,back){
	this.front = front;
	this.back = back;
	this.created = function(){
		console.log("your card has been created.");
	}
}

exports.Clozecard = function (question,answer){
	this.fulltext = fulltext;
	this.cloze = cloze;
	this.created = function (fulltext,cloze){
		var partial = this.fulltext.replace(this.cloze,"...");
	
		if(this.fulltext.includes(this.cloze)){
			 console.log("clozeDeleted has been stored");
			return partial;
		}
		else{
			console.log(this.cloze + " does not appear in text");
		}
	}
	this.clozeDeleted = this.created();
}

