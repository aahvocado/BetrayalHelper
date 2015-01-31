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

	// Place new Player with Character into the place
	// $(".button.add_player").click(function(){

	// 	var playerName = $("#player_name").text();
	// 				console.log(playerName);

	// 	if(playerName !== ''){
	// 		$("#char_list").append(playerName + " playing " +$(this).text());
	// 		resetForm("#player_name_input");
	// 		$('.button.add_player').popup('show', false);
	// 	}else{
	// 		$('.button.add_player').popup('show', true);
	// 	}
	// });

	$('.ui.form')
	  .form({
	    name: {
	      identifier  : 'name',
	      rules: [
	        {
	          type   : 'empty',
	          prompt : 'Please enter your name'
	        }
	      ]
	    },
	    character: {
	      identifier  : 'character',
	      rules: [
	        {
	          type   : 'empty',
	          prompt : 'Please select a character'
	        }
	      ]
	    }
	  });

  	$('.ui.form').submit(function(e){ 
  		var $form = $('.ui.form');
  		var allfields = $form.form('get values');
		if(allfields.name!='' && allfields.character!=''){
			$("#char_list").append(allfields.name + " playing as " + allfields.character);
			$form.form('clear');

		}
	    e.preventDefault(); //usually use this, but below works best here.
	});

	
});



