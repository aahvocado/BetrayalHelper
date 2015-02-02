var maxPlayers = 6;//number of players max 6
var numPlayers = 0;

function characterObject(name){
	this.name = name;
	this.stats;
	this.initStats = function(){
		stats = [this.speed, this.might, this.sanity, this.knowledge];
	}
}
function statObject(name, defaultIndex, spread){
	this.name = name;
	this.defaultIndex = defaultIndex;
	this._index = defaultIndex;
	this.spread = spread;
}
//does stuff in a functino to create a player
function createPlayer(data){
	numPlayers ++;
	var p = new player(data.name, data.character);
	var characterClass = p.character.shortname;

	//make the card
	$('<div></div>',{
		class:'ui accordion fluid card ' + characterClass
	}).appendTo('#char_list');
	//make the body of the card
	$('<div></div>',{
		class:'ui cards content ' + characterClass
	}).appendTo('.'+characterClass);
	//give that baby a title
	var appendString = '';
	appendString = p.name !='New Player' ? p.name + ' playing as ':'';
	appendString = appendString + p.character.name;
	$('.cards.content.' + characterClass).append('<a class="active title header">'+ appendString + '</a>');
	//make the active content to be minimized
	$('.cards.content.' + characterClass).append('<div class="ui four doubling cards minimized content active '+ characterClass +'"></div>');
	//make some little bittle stat cards
	makeStatCard(p, p.character.speed);
	makeStatCard(p, p.character.might);
	makeStatCard(p, p.character.sanity);
	makeStatCard(p, p.character.knowledge);
	$('.ui.accordion')
		  .accordion()
		;
}

function makeStatCard(player, stat){
	var name = player.character.shortname;
	var htmltarget = '.minimized.content.' + name;
	//make a tiny card
	$('<div></div>',{
		class:'ui tiny card '+stat.name+' '+name
	}).appendTo(htmltarget);
	//stat title
	$('.ui.tiny.card.'+stat.name+'.'+name).append('<div class="header">'+stat.name+'</div>');
	//stat holder
	$('<div></div>',{
		class:'ui horizontal list stat holder '+stat.name+' '+name
	}).appendTo('.ui.tiny.card.'+stat.name+'.'+name);
	//buttons holder
	$('<div></div>',{
		class:'2 fluid ui basic buttons '+stat.name+' '+name
	}).appendTo('.ui.tiny.card.'+stat.name+'.'+name);
	//append the stats
	$('.stat.holder.'+stat.name+'.'+name).append('<div class="inactive item stat '+stat.name+' '+name+'" id="'+stat.name+' '+name+' '+'empty'+'">'+'</div>')
	$.map(stat.spread, function(val, i){
		$('.stat.holder.'+stat.name+'.'+name).append('<div class="inactive item stat '+stat.name+' '+name+'" id="'+stat.name+' '+name+' '+i+'">'+val+'</div>')
	})		
	$('.stat.holder.'+stat.name+'.'+name).append('<div class="inactive item stat '+stat.name+' '+name+'" id="'+stat.name+' '+name+' '+'empty'+'">'+'</div>')
	//buttons
	$('.2.fluid.ui.basic.buttons.'+stat.name+'.'+name).append('<div class="ui button '+name+'" id="minus '+stat.name+' '+name+'">-</div>'+'<div class="ui button '+name+'" id="plus '+stat.name+' '+name+'">+</div>')
	makeStatClickListener(player, stat, 1);
	makeStatClickListener(player, stat, -1);
}	

function player (name, charName){
	this.name = name;
	this.character = 'empty character';
	if(this.name == ''){
		this.name = 'New Player'
	}
	switch(charName){
		case 'ox bellows':
			this.character = oxbellows;
			break;
		case "darrin 'flash' williams":
			this.character = darrinwilliams;
			break;
		case 'father rhinehardt':
			this.character = fatherrhinehardt;
			break;
		case 'professor longfellow':
			this.character = professorlongfellow;
			break;
		case 'peter akimoto':
			this.character = peterakimoto;
			break;
		case 'brandon jaspers':
			this.character = brandonjaspers;
			break;
		case 'jenny leclerc':
			this.character = jennyleclerc;
			break;
		case 'heather granville':
			this.character = heathergranville;
			break;
		case 'vivan lopez':
			this.character = vivianlopez;
			break;
		case 'madame zostra':
			this.character = madamezostra;
			break;
		case 'missy dubourde':
			this.character = missydubourde;
			break;
		case 'zoe ingstrom':
			this.character = zoeingstrom;
			break;
			
		default:
			this.character = new characterObject("Null Character");
			break;
	}
};
//holds character data
var oxbellows = new characterObject("Ox Bellows");
	oxbellows.shortname = 'oxbellows';
	oxbellows.speed = new statObject('speed', 4, [2, 2, 2, 3, 4, 5, 5, 6]);
	oxbellows.might = new statObject('might',2 , [4,5,5,6,6,7,8,8]);
	oxbellows.sanity = new statObject('sanity', 2, [2,2,3,4,5,5,6,7]);
	oxbellows.knowledge = new statObject('knowledge', 2, [2,2,3,3,5,5,6,6]);
	oxbellows.initStats();

var darrinwilliams = new characterObject("Darrin 'Flash' Williams");
	darrinwilliams.shortname = 'darrinwilliams';
	darrinwilliams.speed = new statObject('speed',4,[4,4,4,5,6,7,7,8]);
	darrinwilliams.might = new statObject('might',2,[2,3,3,4,5,6,6,7]);
	darrinwilliams.sanity = new statObject('sanity',2,[1,2,3,4,5,5,5,7]);
	darrinwilliams.knowledge = new statObject('knowledge',2,[2,3,3,4,5,5,5,7]);
	darrinwilliams.initStats();
var fatherrhinehardt = new characterObject("Father rhinehardt");
	fatherrhinehardt.shortname = 'fatherrhinehardt';
	fatherrhinehardt.speed = new statObject('speed',2,[1,2,2,4,4,5,5,7]);
	fatherrhinehardt.might = new statObject('might',2,[2,3,3,4,5,6,7,7]);
	fatherrhinehardt.sanity = new statObject('sanity',4,[3,4,5,5,6,7,7,8]);
	fatherrhinehardt.knowledge = new statObject('knowledge',3,[1,3,3,4,5,6,6,8]);
	fatherrhinehardt.initStats();
var professorlongfellow = new characterObject("Professor Longfellow");
	professorlongfellow.shortname = 'professorlongfellow';
	professorlongfellow.speed = new statObject('speed',3,[2,2,4,4,5,5,6,6]);
	professorlongfellow.might = new statObject('might',2,[1,2,3,4,5,5,6,6]);
	professorlongfellow.sanity = new statObject('sanity',2,[1,3,3,4,5,5,6,7]);
	professorlongfellow.knowledge = new statObject('knowledge',4,[4,5,5,5,5,6,7,8]);
	professorlongfellow.initStats();
var peterakimoto = new characterObject("Peter Akimoto");
	peterakimoto.shortname = 'peterakimoto';
	peterakimoto.speed = new statObject('speed',3,[3,3,3,4,6,6,7,7]);
	peterakimoto.might = new statObject('might',2,[2,3,3,4,5,5,6,8]);
	peterakimoto.sanity = new statObject('sanity',3,[3,4,4,4,5,6,6,7]);
	peterakimoto.knowledge = new statObject('knowledge',2,[3,4,4,5,6,7,7,8]);
	peterakimoto.initStats();
var brandonjaspers = new characterObject("Brandon Jaspers");
	brandonjaspers.shortname = 'brandonjaspers';
	brandonjaspers.speed = new statObject('speed',2,[3,4,4,4,5,6,7,8]);
	brandonjaspers.might = new statObject('might',3,[2,3,3,4,5,6,6,7]);
	brandonjaspers.sanity = new statObject('sanity',3,[3,3,3,4,5,6,7,8]);
	brandonjaspers.knowledge = new statObject('knowledge',2,[1,3,3,5,5,6,6,7]);
	brandonjaspers.initStats();
var jennyleclerc = new characterObject("Jenny LeClerc");
	jennyleclerc.shortname = 'jennyleclerc';
	jennyleclerc.speed = new statObject('speed',3,[2,3,4,4,4,5,6,8]);
	jennyleclerc.might = new statObject('might',2,[3,4,4,4,4,5,6,8]);
	jennyleclerc.sanity = new statObject('sanity',3,[1,1,2,4,4,4,5,6]);
	jennyleclerc.knowledge = new statObject('knowledge',2,[2,3,3,4,4,5,6,8]);
	jennyleclerc.initStats();
var heathergranville = new characterObject("Heather Granville");
	heathergranville.shortname = 'heathergranville';
	heathergranville.speed = new statObject('speed',2,[3,3,4,5,6,6,7,8]);
	heathergranville.might = new statObject('might',2,[3,3,3,4,5,6,7,8]);
	heathergranville.sanity = new statObject('sanity',2,[3,3,3,4,5,6,6,6]);
	heathergranville.knowledge = new statObject('knowledge',4,[2,3,3,4,5,6,7,8]);
	heathergranville.initStats();
var vivianlopez = new characterObject("Vivan Lopez");
	vivianlopez.shortname = 'vivianlopez';
	vivianlopez.speed = new statObject('speed',3,[3,4,4,4,4,6,7,8]);
	vivianlopez.might = new statObject('might',2,[2,2,2,4,4,5,6,6]);
	vivianlopez.sanity = new statObject('sanity',2,[4,4,4,5,6,7,8,8]);
	vivianlopez.knowledge = new statObject('knowledge',3,[4,5,5,5,5,5,6,6,7]);
	vivianlopez.initStats();
var madamezostra = new characterObject("Madame Zostra");
	madamezostra.shortname = 'madamezostra';
	madamezostra.speed = new statObject('speed',2,[2,3,3,5,5,6,6,7]);
	madamezostra.might = new statObject('might',3,[2,3,3,4,5,5,5,6]);
	madamezostra.sanity = new statObject('sanity',2,[4,4,4,5,6,7,8,8]);
	madamezostra.knowledge = new statObject('knowledge',3,[1,3,4,4,4,5,6,6]);
	madamezostra.initStats();
var missydubourde = new characterObject("Missy Dubourde");
	missydubourde.shortname = 'missydubourde';
	missydubourde.speed = new statObject('speed',2,[3,4,5,6,6,6,7,7]);
	missydubourde.might = new statObject('might',3,[2,3,3,3,4,5,6,7]);
	missydubourde.sanity = new statObject('sanity',2,[1,2,3,4,5,5,6,7]);
	missydubourde.knowledge = new statObject('knowledge',3,[2,3,4,4,5,6,6,6]);
	missydubourde.initStats();
var zoeingstrom = new characterObject("Zoe Ingstrom");
	zoeingstrom.shortname = 'zoeingstrom';
	zoeingstrom.speed = new statObject('speed',4,[4,4,4,4,5,6,8,8]);
	zoeingstrom.might = new statObject('might',3,[2,2,3,3,4,4,6,7]);
	zoeingstrom.sanity = new statObject('sanity',2,[3,4,5,5,6,6,7,8]);
	zoeingstrom.knowledge = new statObject('knowledge',2,[1,2,3,4,4,5,5,5]);
	zoeingstrom.initStats();




