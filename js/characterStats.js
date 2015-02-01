var maxPlayers = 6;//number of players max 6
var numPlayers = 0;

function character(name){
	this.name = name;
}
function stat(name, defaultIndex, spread){
	this.name = name;
	this.defaultIndex = defaultIndex;
	this.currentIndex = defaultIndex;
	this.spread = spread;
}
//holds character data
var oxbellows = new character("Ox Bellows");
	oxbellows.shortname = 'oxbellows';
	oxbellows.speed = new stat('speed', 4, [2, 2, 2, 3, 4, 5, 5, 6])
	// oxbellows.stats = [this.speed, this.might, this.sanity, this.knowledge];
//does stuff in a functino to create a player
function createPlayer(data){
	numPlayers ++;
	var p = new player(data.name, data.character);
	var characterClass = p.character.shortname;

	//make the card
	$('<div></div>',{
		class:'ui fluid card ' + characterClass
	}).appendTo('#char_list');
	//make the body of the card
	$('<div></div>',{
		class:'content ' + characterClass
	}).appendTo('.'+characterClass);
	//give that baby a title
	$('.content.' + characterClass).append('<a class="header">'+ p.character.name+ '</a>');
	makeStatCard('.content.' + characterClass, characterClass, p.character.speed);
}

function makeStatCard(htmltarget, name, stat){
	//make a tiny card
	$('<div></div>',{
		class:'ui tiny card '+name
	}).appendTo(htmltarget);
	//title
	$('.ui.tiny.card.'+name).append('<div class="header">'+stat.name+'</div>');
	//stat holder
	$('<div></div>',{
		class:'ui horizontal list speed stat holder '+name
	}).appendTo('.ui.tiny.card.'+name);
	//buttons holder
	$('<div></div>',{
		class:'2 fluid ui basic buttons '+name
	}).appendTo('.ui.tiny.card.'+name);
	//append the stats
	$.map(stat.spread, function(val, i){
		$('.stat.holder.'+name).append('<div class="inactive item speed stat '+name+'" id="speed '+i+'">'+val+'</div>')
	})
	//buttons
	$('.2.fluid.ui.basic.buttons.'+name).append('<div class="ui button '+name+'" id="minus_stat">-</div>'+'<div class="ui button '+name+'" id="plus_stat">+</div>')
}



function player (name, character){
	this.name = name;
	if(this.name == ''){
		this.name = 'New Player'
	}
	this.character = oxbellows;
};