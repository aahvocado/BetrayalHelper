var maxIndex = 8;
$(document).ready(function(){

	//this is just testing for one stat :(
	var index = 0;
	var defaultStatX = -7;
	var easeDist = 42;
	makeActive("speed",index);
	updateStat();
	// Decrement a stat
	$('#minus_stat').click(function(e){
		if(index>0){
			makeInActive("speed",index);
			index-=1;
			makeActive("speed",index);
			updateStat();
		}
	});
	// Increment a stat 
	$('#plus_stat').click(function(e){
		if(index<maxIndex-1){
			makeInActive("speed",index);
			index+=1;
			makeActive("speed",index);

			updateStat();
		}
	});
	//take in a specific stat holder and animate it
	function updateStat(){
		if(index>2){
			// easeDist = 50;
		}else{
			// easeDist = 45;
		}

		$('.speed.stat.holder').animate({
			right:''+((index*easeDist)-defaultStatX+'px'),
			easing:'easeOutQuart'},350, function(){
				
		});
		
	}
	function makeInActive(type, idnum){
		var targetid = ("div[id='"+type+" "+idnum+"']");
		$(targetid).addClass("inactive");
		$(targetid).removeClass("active");
	}
	function makeActive(type, idnum){
		var targetid = ("div[id='"+type+" "+idnum+"']");
		$(targetid).addClass("active");
		$(targetid).removeClass("inactive");
	}
});