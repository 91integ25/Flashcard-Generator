var inquirer = require("inquirer");
var card = require('./constructor');
var file = require('./file');

inquirer.prompt([
	{
		type:"list",
		message:"what type of card would you like to make today?",
		choices:["Basic card","Cloze card"],
		name:"card"
	}
	]).then(function(user){
		askCardInfo(user);
	});


askCardInfo = function (user){
	if(user.card === "Basic card"){
		inquirer.prompt([
			{
				type:"input",
				message: "type in your question.",
				name:"question"
			},
			{
				type:"input",
				message:"type in your answer.",
				name:"answer"
			}

		]).then(function(question){
			var questionObj = new card.Basicard(question.question,question.answer);
			questionObj.created();
			file.writeBasic(JSON.stringify(questionObj));
		});

	}
	else {
		inquirer.prompt([
			{
				type:"input",
				message: "type in full text.",
				name:"text"
			},
			{
				type:"input",
				message:"type in cloze.",
				name:"cloze"
			}

		]).then(function(question){
			var questionObj = new card.Clozecard(question.text,question.cloze);
			file.writeCloze(JSON.stringify(questionObj));
		});
	}
}
