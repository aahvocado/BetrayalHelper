var maxIndex = 8;
var defaultStatX = -7;
var easeDist = 42;

//takes in the player, which stat is being manipulated, and then the direction to move it
function makeStatClickListener(player, stat, dir){
	var characterClass = player.character.shortname;
	var buttonid = '';
	updateStat(stat, characterClass, 0);
	//var targetid = '';
	switch(dir){
		case 1://plus
			buttonid = "div[id='"+'plus '+stat.name+' '+characterClass+"']";
			$(buttonid).on('click', function(){
				updateStat(stat, characterClass, 1);
			});
			break;
		case -1://minus
			buttonid = "div[id='"+'minus '+stat.name+' '+characterClass+"']";
			$(buttonid).on('click', function(){
				updateStat(stat, characterClass, -1);
			});
			break;
		default:
			console.log('oops, what happened when making this listener...')
			break;
	}
}
//take in a specific stat holder and animate it
function updateStat(stat, charclassname, dir){
	if((stat._index>0 && dir<0)||(stat._index<maxIndex-1 && dir>0)||dir==0){
		stat._index = stat._index + dir;
		var targetid = '.stat.holder'+'.'+stat.name+'.'+charclassname;
		$(targetid).animate({
			right:''+((stat._index*easeDist)-defaultStatX+'px'),
			easing:'easeOutQuart'},350, function(){	
		});
		makeInActive(stat, charclassname, stat._index-dir);//previous stat
		makeActive(stat, charclassname, stat._index);
	}
}
//toggle the inactive stat for css
function makeInActive(stat, charclassname, idnum){
	var targetid = ("div[id='"+stat.name+" "+charclassname+" "+idnum+"']");
	$(targetid).addClass("inactive");
	$(targetid).removeClass("active");
}
//toggle the active class for css
function makeActive(stat, charclassname, idnum){
	var targetid = ("div[id='"+stat.name+" "+charclassname+" "+idnum+"']");
	$(targetid).addClass("active");
	$(targetid).removeClass("inactive");
}
$(document).ready(function(){

	//this is just testing for one stat :(
	var fake = new statObject('fake', 0, [1,2,3,4,5,6,7,8]);
	updateStat(fake,'test',0);

	//TEST STUFF
	// Decrement a stat
	$('#minus_stat_test').click(function(e){
		updateStat(fake,'test',-1);
	});
	// Increment a stat 
	$('#plus_stat_test').click(function(e){
		updateStat(fake,'test',1);
	});
	
});