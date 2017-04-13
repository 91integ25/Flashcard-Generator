
exports.Basicard = function (front,back){
	this.front = front;
	this.back = back;
	this.partial = function(){
		console.log("your card has been created.");
	}
}

exports.Clozecard = function (fulltext,cloze){
	this.fulltext = fulltext;
	this.cloze = cloze;
	this.partial = function (fulltext,cloze){
		
		var partial = this.fulltext.replace(this.cloze,"...");
	
		if(this.fulltext.includes(this.cloze)){
			 console.log("clozeDeleted card has been stored");
			return partial;
		}
		else{
			console.log("cloze does not appear in text");
		}
	}
	this.clozeDeleted = this.partial();
}

