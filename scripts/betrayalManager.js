var numPlayers;//number of players max 6

function player (name, character_name){
	this.name = name;
	this.character_name = character_name;
};

var newPlayer = function(name){
	var np = new player(name, 'test');
	return np;
};

$(document).ready(function(){
	
});

$("#red_char").click(function(){
	var playerName = $("#player_name_input").val();
	if(playerName !== ''){
		$("#char_list").append(playerName + " playing " +$(this).text());
	}
	resetForm("#player_name_input");
});

function resetForm(formID){
	$(formID)
	  .not(':button, :submit, :reset, :hidden')
	  .val('')
	  .removeAttr('checked')
	  .removeAttr('selected');
}
