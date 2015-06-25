var counter = 1;
var limit = 25;

function addInput(divName) {
	if (counter == limit) {
		alert("You have reached the limit of adding " + counter + " inputs");
	} else {
		var newdiv = document.createElement('div');
		newdiv.innerHTML = "<br><input type = 'text' name='myInputs[]' size='100'>";
		document.getElementById(divName).appendChild(newdiv);
		counter++;
	}
}

