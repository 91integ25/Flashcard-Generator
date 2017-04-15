var inquirer = require("inquirer");
var card = require('./constructor');
var file = require('./file');
var questionObj;
// prompt user for what they would like to do with their cards
inquirer.prompt([
	{
		type:"list",
		message:"what would you like to do with your cards?",
		choices:["Get clozed card","Get basic card","Make basic card","Make cloze card"],
		name:"card"
	}
	]).then(function(user){
		//passing the user choice into the askCardInfo function
		askCardInfo(user);
	});


 function askCardInfo(user){
	if(user.card === "Make basic card"){
		// prompting user for question and answer for basic card
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
		// prompting user for question and answer for cloze card
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
		// reading file and console.logging the front
		
	file.showBasicFront();
		// prompt user to see if they would like the answer
		inquirer.prompt([
			{
				type:"confirm",
				message:"would you like to see the answer?",
				name:"confirm"
			}

		]).then(function (user){

			if(user.confirm){
				file.showBasicBack();
			}
			else{
				console.log("run this file again for a new card")
			}
		});
	}
	else{
		// reading file and console.logging the cloze Deleted portion of the text
		file.showClozeDeleted();
		
		// prompt user to see if they would like the answer
			inquirer.prompt([
		{
			type:"confirm",
			message:"would you like to see the answer?",
			name:"confirm"
		}

		]).then(function (user){
			if(user.confirm){
				file.showCloze();
			}
			else{
				console.log("run this file again for a new card")
			}
		});
		
	}
}

