
$(document).ready(function(){	
	//remove existing players


	// Some semantic UI buisiness
	$('.ui.accordion')
	  .accordion()
	;
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
	      	// console.log(allfields);	   
			removeSelectable(getCharColor(allfields.character));//removes color from selectable characters
	      	createPlayer(allfields);//make the player card
			$form.form('clear');
		}
	    e.preventDefault(); //usually use this, but below works best here.
	});

});

//handles selectability from the dropdown
function showSelectable(color_char){
	$('.'+color_char).show();
}
function removeSelectable(color_char){
	$('.'+color_char).toggle();
}
function getCharColor(charName){
	switch(charName.toLowerCase()){
		case 'ox bellows':
			return 'red_char';
			break;
		case "darrin 'flash' williams":
			return 'red_char';
			break;
		case 'father rhinehardt':
			return 'white_char';
			break;
		case 'professor longfellow':
			return 'white_char';
			break;
		case 'peter akimoto':
			return 'green_char';
			break;
		case 'brandon jaspers':
			return 'green_char';
			break;
		case 'jenny leclerc':
			return 'purple_char';
			break;
		case 'heather granville':
			return 'purple_char';
			break;
		case 'vivan lopez':
			return 'blue_char';
			break;
		case 'madame zostra':
			return 'blue_char';
			break;
		case 'missy dubourde':
			return 'orange_char';
			break;
		case 'zoe ingstrom':
			return 'orange_char';
			break;
		default:
			console.log('secret bananas!')
			break;
		}
}



