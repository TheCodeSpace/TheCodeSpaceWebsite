function loadScript(url) { //loads a script into cache
	var head = document.getElementsByTagName('head')[0]; //gets the HTMLHeadElement
	var script = document.createElement('script'); //creates a new Script element
	script.type = 'text/javascript'; //specefies type of the script element
	script.src = url; //specefies source of the script element
	head.appendChild(script); //deploys script element inside the head element
    console.info("Loaded script with url: " + url); //give a debug message
}

function loadScriptRedirect(url, callback) { //loads a script into cache and redirects to a callback function
	var head = document.getElementsByTagName('head')[0]; //gets the HTMLHeadElement
	var script = document.createElement('script'); //creates a new Script element
	script.type = 'text/javascript'; //specefies type of the script element
	script.src = url; //specefies source of the script element
	script.onload = callback; //specefies where to rediect once script is loaded
	head.appendChild(script); //deploys script element inside the head element
    console.info("Loaded script with url: " + url); //give a debug message
}
