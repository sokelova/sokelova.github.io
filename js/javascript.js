function btn(){
	"use strict";
	let objname = document.getElementById("mod_name");
	let objfam = document.getElementById("mod_fam");
	let objphone = document.getElementById("mod_phone");
	
	if (!objname.checkValidity()){
		document.getElementById("mod_id_name").innerHTML = objname.validationMessage;
	}else{
		document.getElementById("mod_id_name").innerHTML = "";
	}
	if (!objfam.checkValidity()){
		document.getElementById("mod_id_fam").innerHTML = objfam.validationMessage;
	}else{
		document.getElementById("mod_id_fam").innerHTML = "";
	}
	if (!objphone.checkValidity()){
		document.getElementById("mod_id_phone").innerHTML = objphone.validationMessage;
	}else{
		document.getElementById("mod_id_phone").innerHTML = "";
	}
}


