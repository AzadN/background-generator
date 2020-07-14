/*4+3;
if(4+3===7)
	//alert("You're smart");
	console.log("Hello");*/

/*function sayHello(){
	console.log("Hello");
}

sayHello();

var sayBye=function(){ Anonymous funtion its value is assigned to a variable but its not named
	console.log("Bye");
}

sayBye();*/

/*Functional arguments allow us to not repeat ourselves & make them extensible & customized*/
/*Return value is useful over a black box for interactivity*/
/*JS allows unreachable return statements as opposed to C/C++/Java*/
/*Parameters are the variables whereas arguments are the values E.g. sum(4,5) int sum(int a, int b). Here 4,5 are arguments passed to the function sum's parameters a & b respectively*/



var database = [
	{
		username: "andrei",
		password: "supersecret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "777"
	}
];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var username=prompt("Enter your Username");
var password=prompt("Enter your password");

function isValidUser(user, pass){
	for(var i=0;i<database.length;i++)
		if(database[i].username===user && database[i].password===pass)
			return true;
		return false;
}

function signIn(user, pass)
{
	if(isValidUser(user,pass))
			console.log(newsfeed);
	else
		alert("Sorry!! Wrong username or password");
}

signIn(username,password);