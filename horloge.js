window.addEventListener("load", function(){
setTimeout(laisseLeBonTempsRouler, 1) //Deux paramètres pour addEventListener : un évènement, et une fonction A APPELER : donc pas setAlarm(idalarm) mais une fonction anonyme
});

var cptAlarm = 1;
var track1 = new Audio('hammerfall.mp3');
var track2 = new Audio('wormfood.mp3');

function laisseLeBonTempsRouler(){
	var horaire = new Date();
	document.getElementById("heures").childNodes[0].innerHTML = horaire.getHours();
	document.getElementById("minutes").childNodes[0].innerHTML  = horaire.getMinutes(); 
	document.getElementById("secondes").childNodes[0].innerHTML = horaire.getSeconds();
	//document.getElementById("millisecondes").childNodes[0].innerHTML = horaire.getMilliseconds();
	setTimeout(function(){laisseLeBonTempsRouler();}, 1000);
}

function sonner(track){
	track.play();
	setTimeout(function(){track.pause(); track.currentTime = 0;}, 10000);
	setTimeout(function(){sonner(track);}, 60000);
}

function ischecked(checkbox){
	var track = checkbox.parentNode.childNodes[9].value;
	switch(track) {
		case "sound1":
			track = track1;
			break;
		case "sound2":
			track = track2;
			break;
	} 
	if (checkbox.checked)
	{
		if (document.getElementById("hours_alarm").value == document.getElementById("heures").childNodes[0].innerHTML && document.getElementById("minutes_alarm").value == document.getElementById("minutes").childNodes[0].innerHTML){
			sonner(track);
		}
		else {
			setTimeout(function(){ischecked(checkbox);}, 1000);
		}
	}
}

function retirer_alarme(rowId){
	console.log(rowId);
	old = document.getElementById("alarmes").removeChild(document.getElementById(rowId));
}

function ajouter_alarme(){	
	if (document.getElementById("row0"))
		var alarme = document.getElementById("row0").cloneNode(true);
	else
		var alarme = old.cloneNode(true);
	
	alarme.id = "row"+cptAlarm++;
	document.getElementById("alarmes").appendChild(alarme);
}
//Utilisation d'une variable globale old...