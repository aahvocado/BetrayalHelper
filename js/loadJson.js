// Load JSON data
function loadJSON(player)
{
 	var data_file = "http://www.elementten.com/BetrayalHelper/BetrayalCharacters.json";
 	var http_request = new XMLHttpRequest();
 	try{
    	// Opera 8.0+, Firefox, Chrome, Safari
    	http_request = new XMLHttpRequest();
 	}catch (e){
    	// Internet Explorer Browsers
    	try{
       	http_request = new ActiveXObject("Msxml2.XMLHTTP");
    	}catch (e) {
       	try{
          	http_request = new ActiveXObject("Microsoft.XMLHTTP");
       	}catch (e){
          	// Something went wrong
          	alert("Your browser broke!");
          	return false;
       	}	
    	}
 	}
 	http_request.onreadystatechange  = function(){
    	if (http_request.readyState == 4)
    	{
      // Javascript function JSON.parse to parse JSON data
      var jsonObj = JSON.parse(http_request.responseText);
      //oh man please work
      var jsonFound = jsonObj[player.character];
      console.log(jsonFound);

     	$("#char_list").append(jsonFound[0].name);
  	}
 	}
	http_request.open("GET", data_file, true);
 	http_request.send();
}