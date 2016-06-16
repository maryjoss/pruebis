var fs = require('fs');

var name = "pedro"
var pass= "hola"

fs.readFile('texto.txt', 'utf8', checkUser);

function checkUser (error,content) {
	var users =content.split("\n");

	var counter = 0;
	var encontrado = false;
	while(counter < users.length && !encontrado) {
		var user = users[counter].split(" ");
		if(user [0] === name && user[1] === pass) {
			console.log('You found it!');
			encontrado = true;
		}else {
			console.log('This is not...');

		}
		counter ++;
	}
}

