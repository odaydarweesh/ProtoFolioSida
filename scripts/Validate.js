window.onload = function () {
	let submit = document.getElementById("submit");
	let förname = document.getElementById("förname");
	let eftername = document.getElementById("eftername");
	let tel = document.getElementById("tel");
	let email = document.getElementById("email");
	let message = document.getElementById("message");


	function validateFörname(förname) {
		const reg = /^([a-z0-9]*[a-zA-Z\u0080-\uFFFF]){3}[a-z0-9]*$/i;

		if (reg.test(String(förname.value).toLowerCase())) {
			console.log(förname.id + " is valid");
			förname.style.outline = "2px solid green";
		} else {
			console.log(förname.id + " is not valid");
			förname.style.outline = "2px solid red";
		}
	}


	function validateEftername(eftername) {
		const reg = /^([a-z0-9]*[a-zA-Z\u0080-\uFFFF]){3}[a-z0-9]*$/i;

		if (reg.test(String(eftername.value).toLowerCase())) {
			console.log(eftername.id + " is valid");
			eftername.style.outline = "2px solid green";
		} else {
			console.log(eftername.id + " is not valid");
			eftername.style.outline = "2px solid red";
		}
	}

	function validateEmail(email) {
		const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (reg.test(String(email.value).toLocaleLowerCase())) {
			console.log(email.id + " is valid");
			email.style.outline = "2px solid green";
		} else {
			console.log(email.id + " is not valid");
			email.style.outline = "2px solid red";
		}
	}

	function validateTel(tel) {
		const regOne = /^((((0{2}?)|(\+){1})46)|0)7[\d]{8}$/im;
        
		if (regOne.test(String(tel.value))) {
            console.log(tel.id + " is valid");
			tel.style.outline = "2px solid green";
        }
		    else {
			console.log(tel.id + " is not valid");
			tel.style.outline = "2px solid red";
		}
    }
    

	function validateMessage(message) {
		if (message.value != "") {
			console.log(message.id + " is valid");
			message.style.outline = "2px solid green";
		} else {
			console.log(message.id + " is not valid");
			message.style.outline = "2px solid red";
		}
	}

	förname.oninput = function() {
		console.log(this.value);
		validateFörname(förname);
	};
	eftername.oninput = function() {
		console.log(this.value);
		validateEftername(eftername);
	};
	tel.oninput = function() {
		console.log(this.value);
		validateTel(tel);
	};
	email.oninput = function() {
		console.log(this.value);
		validateEmail(email);
	};
	message.oninput = function() {
		console.log(this.value);
		validateMessage(message);
	};

	submit.onclick = function() {
		let contactInformation = {
			förname: förname.value,
			eftername: eftername.value,
			tel: tel.value,
			email: email.value
		};

		localStorage.setItem("contactinformation", JSON.stringify(contactInformation));
	};

	if (localStorage.getItem("contactinformation")) {
		let contactInformationString = localStorage.getItem("contactinformation");
		let contactInformation = JSON.parse(contactInformationString);

		console.log(contactInformation);

		förname.value = contactInformation.förname;
		eftername.value = contactInformation.eftername;
		tel.value = contactInformation.tel;
		email.value = contactInformation.email;
	}
};



document.getElementById("slideImg").onclick = function() {
    startFullscreen(this);
};
//Start fullscreen of slideshow image

/*End of slideshow functions*/

function startFullscreen(pic) {
    //pic = pic || document.documentElement;
// Starts fullscreen if fullscreen is not already on
    if (!document.fullscreenElement) {
        if (pic.requestFullscreen) {
            pic.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
//Exit fullscreen if fullscreen is detected
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Down below we have fullscreen on key enter.
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        toggleFullScreen();
    }
}, false);

//Toggles fullscreen
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
	}
}