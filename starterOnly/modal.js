function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const thankBtn = document.querySelectorAll(".thank-btn");
const thankBg = document.querySelector(".bground-thank");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch thank event
thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));

// launch thank form
function launchThank() {
  thankBg.style.display = "block";
}


const SubForm = document.querySelector(".button");


// FORMULAIRE

//validation du prénom
const firstName = document.getElementById("first");
firstName.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
		}
	}
};

//validation du nom
const lastName = document.getElementById("last");
lastName.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
		}
	}
};

// validation email 
const emailValid = document.getElementById("email");
emailValid.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};

// validation date de naissance
const birthValid = document.getElementById("birthdate");
birthValid.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity("Vous devez entrer votre date de naissance.");
		}
	}
};