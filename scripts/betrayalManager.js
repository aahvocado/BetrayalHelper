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
	// Some semantic UI buisness
	$('.ui.dropdown')
      .dropdown({    
      	transition: 'drop'
		})
    ;
});

// Place new Player with Character into the place
$("#red_char").click(function(){
	var playerName = $("#player_name_input").val();
	if(playerName !== ''){
		$("#char_list").append(playerName + " playing " +$(this).text());
	}
	resetForm("#player_name_input");
});
// Resets the fields in a specified form ID
function resetForm(formID){
	$(formID)
	  .not(':button, :submit, :reset, :hidden')
	  .val('')
	  .removeAttr('checked')
	  .removeAttr('selected');
}

