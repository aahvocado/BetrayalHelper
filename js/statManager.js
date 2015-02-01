var maxIndex = 8;
$(document).ready(function(){
	var index = 0;

	var easeDist = 4.35;
	updateStat();
	// Decrement a stat
	$('#minus_stat').click(function(e){
		if(index>0){
			index -= 1;
			updateStat();
		}
	});
	// Increment a stat 
	$('#plus_stat').click(function(e){
		if(index<maxIndex-1){
			index+=1;
			updateStat();
		}
	});
	//take in a specific stat holder and animate it
	function updateStat(){
		$('.speed.stat.holder').animate({
			right:''+((index*easeDist)-easeDist+'rem'),
			easing:'easeOutQuart'},350, function(){
				console.log(index)
		});
	}
});