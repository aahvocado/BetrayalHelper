var numPlayers;//number of players max 6

function player (name, character_name){
	this.name = name;
	this.character_name = character_name;
}

var newPlayer = function(name){
	var np = new player(name, 'test');
	return np;
}