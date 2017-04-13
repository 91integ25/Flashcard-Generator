var inquirer = require("inquirer");
var card = require('./constructor');
var file = require('./file');
var questionObj;

inquirer.prompt([
	{
		type:"list",
		message:"what would you like to do with your cards?",
		choices:["Get clozed card","Get basic card","Make basic card","Make cloze card"],
		name:"card"
	}
	]).then(function(user){
		askCardInfo(user);
	});


 function askCardInfo(user){
	if(user.card === "Make basic card"){
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
			questionObj = new card.Basicard(question.question,question.answer);
			questionObj.partial();
			file.writeBasic("," + JSON.stringify(questionObj) );
		});

	}
	else if(user.card === "Make cloze card"){
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
		    questionObj = new card.Clozecard(question.text,question.cloze);
			if(questionObj.clozeDeleted){
			file.writeCloze( "," +  JSON.stringify(questionObj));
		}
		});
	}
	else if(user.card === "Get basic card"){
		file.readBasic();
	}
	else{
		file.readCloze();
	}
}

