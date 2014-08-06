/*
* Copyright (c) 2013 Christian Gohlinghorst 
* contact: oihorse@gmail.com
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see http://www.gnu.org/licenses/.
*/

var nothingRolled = true;
var attackRolled = false;
var fighterAttackRolled = false;
var swordBoardAttackRolled = false;


//The pseudo-random number generator
function getRandom(max) 
{
	return (Math.floor(Math.random()*max))+1;
}

//Gets the value of the die being rolled
function getDiceValue()
{
	var dieToRoll = 0;
	
	for (var i=0; i < document.Dice.dice.length; i++)
	{
		if (document.Dice.dice[i].checked)
		{
		dieToRoll = document.Dice.dice[i].value;
		}
   }
	
	return dieToRoll
}


// The function is triggered by the dice button on the Hangout App
function diceButtonClick() 
{
	console.log('Dice Button clicked.');
	
	var dieRolled = getDiceValue(); //the die being rolled
	var numberOfDice = document.getElementById('NumberOfDice').value; //the number of dice being rolled
	console.log('User is rolling ' + numberOfDice + "d" + dieRolled);
	var diceRoller = gapi.hangout.getParticipantById(gapi.hangout.getParticipantId()); //the participant rolling the dice

	var i = 0;
	var resultArray = [];
	var totalValue = 0;
	while (i < numberOfDice)
	{
		var value = getRandom(dieRolled);
		totalValue += value;
		resultArray.push(value);
		i++;
		console.log('resultArray is: ' + resultArray);
	}
	console.log('totalValue is: ' + totalValue);
	console.log('Dice roller is ' + diceRoller.person.displayName);
		
	//Build an object to hold our data so we can stringify it

	var result = {}
	result.name = diceRoller.person.displayName;
	result.dieRolled = dieRolled;
	result.numberOfDiceRolled = numberOfDice;
	result.resultArray = resultArray;
	result.totalValue = totalValue;
	
	var finalResult = JSON.stringify(result);
	
	nothingRolled = false;
	attackRolled = false;
	fighterAttackRolled = false;
	swordBoardAttackRolled = false;

	gapi.hangout.data.submitDelta({'finalResult': finalResult});	
	
	console.log("attackRolled = " + attackRolled);
	console.log("nothingRolled = " + nothingRolled);
}

// The function is triggered by the attack button on the Hangout App
function attackButtonClick() 
{
	console.log('Attack Button clicked.');
	
	
	
	console.log('User is rolling a d20');
	var diceRoller = gapi.hangout.getParticipantById(gapi.hangout.getParticipantId()); //the participant rolling the dice
	
	var d20 = 20;
	//var d6 = 6;
	var resultArray = [];
	var totalValue = 0;
	
		 d20 = getRandom(d20);
		//var d6 = getRandom(d6);
		totalValue = d20;
		resultArray.push(d20);
		//resultArray.push(d6);
		
		console.log('resultArray is: ' + resultArray);
	
	console.log('totalValue is: ' + totalValue);
	console.log('Dice roller is ' + diceRoller.person.displayName);
		
	//Build an object to hold our data so we can stringify it

	var result = {}
	result.name = diceRoller.person.displayName;
	result.dieRolled = " an Attack Roll ";
	result.numberOfDiceRolled = 1;
	result.resultArray = resultArray;
	result.totalValue = totalValue;
	
	var finalResult = JSON.stringify(result);


	attackRolled = true;
	nothingRolled = false;
	fighterAttackRolled = false;
	swordBoardAttackRolled = false;
	console.log("attackRolled = " + attackRolled);
	console.log("nothingRolled = " + nothingRolled);
	
	gapi.hangout.data.submitDelta({'finalResult': finalResult});
	
}

// The function is triggered by the Fighter attack button on the Hangout App
function fighterAttackButtonClick() 
{
	console.log('Fighter Attack Button clicked.');
	
	
	
	console.log('User is rolling a d20 and a d3');
	var diceRoller = gapi.hangout.getParticipantById(gapi.hangout.getParticipantId()); //the participant rolling the dice

	var d20 = 20;
	var d3 = 3;
	var resultArray = [];
	var totalValue = 0;
	
		d20 = getRandom(d20);
		d3 = getRandom(d3);
		totalValue = d20 + d3;
		resultArray.push(d20);
		resultArray.push(d3);
		
		console.log('resultArray is: ' + resultArray);
	
	console.log('totalValue is: ' + totalValue);
	console.log('Dice roller is ' + diceRoller.person.displayName);
		
	//Build an object to hold our data so we can stringify it

	var result = {}
	result.name = diceRoller.person.displayName;
	result.dieRolled = " an Figher Attack Roll ";
	result.numberOfDiceRolled = 2;
	result.resultArray = resultArray;
	result.totalValue = totalValue;
	
	var finalResult = JSON.stringify(result);

	fighterAttackRolled = true;
	attackRolled = false;
	nothingRolled = false;
	swordBoardAttackRolled = false;
	console.log("attackRolled = " + attackRolled);
	console.log("nothingRolled = " + nothingRolled);
	console.log("fighterAttackRolled = " + fighterAttackRolled);
	
	gapi.hangout.data.submitDelta({'finalResult': finalResult});
	
}

// The function is triggered by the Sword and Board attack button on the Hangout App
function swordBoardAttackButtonClick() 
{
	console.log('Sword and Board Attack Button clicked.');
	
	
	
	console.log('User is rolling a d20, d14, and a d3');
	var diceRoller = gapi.hangout.getParticipantById(gapi.hangout.getParticipantId()); //the participant rolling the dice

	var d20 = 20;
	var d14 = 14;
	var d3 = 3;
	var resultArray = [];
	var totalValue = 0;
	
		d20 = getRandom(d20);
		d14 = getRandom(d14);
		d3 = getRandom(d3);
		totalValue = d20 + d14 + d3;
		resultArray.push(d20);
		resultArray.push(d14);
		resultArray.push(d3);
		
		console.log('resultArray is: ' + resultArray);
	
	console.log('totalValue is: ' + totalValue);
	console.log('Dice roller is ' + diceRoller.person.displayName);
		
	//Build an object to hold our data so we can stringify it

	var result = {}
	result.name = diceRoller.person.displayName;
	result.dieRolled = " a Sword and Board Attack Roll ";
	result.numberOfDiceRolled = 3;
	result.resultArray = resultArray;
	result.totalValue = totalValue;
	
	var finalResult = JSON.stringify(result);
	
	swordBoardAttackRolled = true;
	fighterAttackRolled = false;
	attackRolled = false;
	nothingRolled = false;
	console.log("attackRolled = " + attackRolled);
	console.log("nothingRolled = " + nothingRolled);
	console.log("fighterAttackRolled = " + fighterAttackRolled);
	console.log("swordBoardAttackRolled = " + swordBoardAttackRolled);
	
	gapi.hangout.data.submitDelta({'finalResult': finalResult});
	
}


//function updateUserList(){	console.log('updating user list');	setText(historyBox, "New user has logged on");}

//sets the new HTML text to appear on screen
function setText(element, text) 
{
	console.log("setText = " + text);
	element.innerHTML = text;
}

//updates the UI with the new state values
function updateStateUi(state) 
{
	console.log('updating UI');
	var diceElement = document.getElementById('diceValueRolled');
	var whoRolled = document.getElementById('theDiceRoller');
	var historyBox = document.getElementById('history');
	var historyBoxText = document.getElementById('history').innerHTML;
	
	if (nothingRolled)
	{
		setText(diceElement, 'Roll them bones already');
	} 
	else if (attackRolled)
	{
	
	console.log("ATTACK ROLL");
	
	var finalResult = JSON.parse(state['finalResult']);
		console.log("Final Result has: " + finalResult.toString());
		var name = finalResult.name;
		console.log("Who rolled: " + name);
		var numberOfDice = finalResult.numberOfDiceRolled;
		console.log("Number of Dice: " + numberOfDice);
		var dieRolled = finalResult.dieRolled;
		console.log("Die rolled: " + dieRolled);
		var totalValue = finalResult.totalValue;
		console.log("Total value: " + totalValue);
		var arrayValue = finalResult.resultArray;
		console.log("arrayValue = " + arrayValue);
		console.log("arrayValue is this big: " + arrayValue.length);
		
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var time = h + ":" + m + ":" + s;
		console.log("time = " + time);
		
		console.log("Attack Dice were rolled!");
		try
		{
			var diceRolled = numberOfDice + 'd' + dieRolled;
		}
		catch (e) {
			console.log(e);
		 }
		
		console.log('setting dice text in UI');
		document.getElementById('diceValueRolled').innerHTML = "<b>" + arrayValue + "</b> of 20";
		document.getElementById('theDiceRoller').innerHTML = name + " rolled: ";
		document.getElementById('history').innerHTML = name + " attack rolled: " + "<br />" + "<b>" + arrayValue + "</b>" + "<br />" + historyBoxText;
	
	} 
	else if (fighterAttackRolled)
	{
	
	console.log("FIGHTER ATTACK ROLL");
	
	var finalResult = JSON.parse(state['finalResult']);
		console.log("Final Result has: " + finalResult.toString());
		var name = finalResult.name;
		console.log("Who rolled: " + name);
		var numberOfDice = finalResult.numberOfDiceRolled;
		console.log("Number of Dice: " + numberOfDice);
		var dieRolled = finalResult.dieRolled;
		console.log("Die rolled: " + dieRolled);
		var totalValue = finalResult.totalValue;
		console.log("Total value: " + totalValue);
		var arrayValue = finalResult.resultArray;
		console.log("arrayValue = " + arrayValue);
		console.log("arrayValue is this big: " + arrayValue.length);
		
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var time = h + ":" + m + ":" + s;
		console.log("time = " + time);
		
		console.log("Fighter Attack Dice were rolled!");
		try
		{
			var diceRolled = numberOfDice + 'd' + dieRolled;
		}
		catch (e) {
			console.log(e);
		 }
		
		console.log('setting dice text in UI');
		document.getElementById('diceValueRolled').innerHTML = "<b>" + arrayValue[0] + "</b> of 20" + " and " + "<font color='red'><b>" + arrayValue[1]  + "</b></font>" + " of 3";
		document.getElementById('theDiceRoller').innerHTML = name + " rolled: ";
		document.getElementById('history').innerHTML = name + " attack rolled: " + "<br />" + "<b>" + arrayValue[0] + "</b>, " + "<font color='red'><b>" + arrayValue[1]  + "</b></font>" + "<br />" + historyBoxText;
	
	} 
	else if (swordBoardAttackRolled)
	{
	
	console.log("SWORD AND BAORD ATTACK ROLL");
	
	var finalResult = JSON.parse(state['finalResult']);
		console.log("Final Result has: " + finalResult.toString());
		var name = finalResult.name;
		console.log("Who rolled: " + name);
		var numberOfDice = finalResult.numberOfDiceRolled;
		console.log("Number of Dice: " + numberOfDice);
		var dieRolled = finalResult.dieRolled;
		console.log("Die rolled: " + dieRolled);
		var totalValue = finalResult.totalValue;
		console.log("Total value: " + totalValue);
		var arrayValue = finalResult.resultArray;
		console.log("arrayValue = " + arrayValue);
		console.log("arrayValue is this big: " + arrayValue.length);
		
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var time = h + ":" + m + ":" + s;
		console.log("time = " + time);
		
		console.log("Fighter Attack Dice were rolled!");
		try
		{
			var diceRolled = numberOfDice + 'd' + dieRolled;
		}
		catch (e) {
			console.log(e);
		 }
		
		console.log('setting dice text in UI');
		document.getElementById('diceValueRolled').innerHTML = "<b>" + arrayValue[0] + "</b> of 20, " + "<b>" + arrayValue[1] + "</b> of 14" + " and " + "<font color='red'><b>" + arrayValue[2]  + "</b></font>" + " of 3";
		document.getElementById('theDiceRoller').innerHTML = name + " rolled: ";
		document.getElementById('history').innerHTML = name + " attack rolled: "  + "<br />" + "<b>" + arrayValue[0] + "</b>, " + "<b>" + arrayValue[1] + "</b>, " + "<font color='red'><b>" + arrayValue[2]  + "</b></font>" + "<br />" + historyBoxText;
	
	} 
	else 
	{
		var finalResult = JSON.parse(state['finalResult']);
		console.log("Final Result has: " + finalResult.toString());
		var name = finalResult.name;
		console.log("Who rolled: " + name);
		var numberOfDice = finalResult.numberOfDiceRolled;
		console.log("Number of Dice: " + numberOfDice);
		var dieRolled = finalResult.dieRolled;
		console.log("Die rolled: " + dieRolled);
		var totalValue = finalResult.totalValue;
		console.log("Total value: " + totalValue);
		var arrayValue = finalResult.resultArray;
		arrayValue  = arrayValue.join(", ");
		console.log("arrayValue = " + arrayValue);
		
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
		var s = d.getSeconds();
		var time = h + ":" + m + ":" + s;
		console.log("time = " + time);
		
		console.log("Dice were rolled!");
		try
		{
			var diceRolled = numberOfDice + 'd' + dieRolled;
		}
		catch (e) {
			console.log(e);
		 }
		
		console.log('setting dice text in UI');
		document.getElementById('diceValueRolled').innerHTML = "<b>" + arrayValue + "</b>" + " on " + numberOfDice + "d" + dieRolled + " for a total of: " + totalValue;
		document.getElementById('theDiceRoller').innerHTML = name + " rolled: ";
		document.getElementById('history').innerHTML = name + " rolled: " + "<br />" + arrayValue + " on " + numberOfDice + "d" + dieRolled + "<br />" + historyBoxText;
	}
}

// A function to be run at app initialization time which registers our callbacks
function init() 
{
	console.log('Init app.');

	var apiReady = function(eventObj) 
	{
    
		if (eventObj.isApiReady) 
		{
			console.log('API is ready');

			gapi.hangout.data.onStateChanged.add(function(eventObj) 
			{
				updateStateUi(eventObj.state);
			});
						//gapi.hangout.data.onParticipantsAdded.add(updateUserList())
						updateStateUi(gapi.hangout.data.getState());

			gapi.hangout.onApiReady.remove(apiReady);
		}
	};

	// This application is pretty simple, but use this special api ready state
	// event if you would like to any more complex app setup.
	gapi.hangout.onApiReady.add(apiReady);
}

gadgets.util.registerOnLoadHandler(init);
