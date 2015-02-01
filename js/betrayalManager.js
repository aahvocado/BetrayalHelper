
$(document).ready(function(){	


	// Some semantic UI buisness
	$('.ui.dropdown')
	  .dropdown({
	    // you can use any ui transition
	    transition: 'drop'
	  })
	;

	$('.ui.form')
	  .form({
	    name: {
	    	optional   : true,

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
		if(allfields.character!=''){//allfields.name!='' && 
			// loadJSON(new player(allfields.name, allfields.character));
			// $("#char_list").append(allfields.name + " playing as " + allfields.character);
	      	createPlayer(allfields);
			$form.form('clear');
		}
	    e.preventDefault(); //usually use this, but below works best here.
	});
});




