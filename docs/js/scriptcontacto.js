// Se establecen condiciones de validación automáticas a partir de los atributos disponibles para formularios HTML

var valNya = document.getElementById("nya");

valNya.minLength = "2";

valNya.maxLength = "40";

var valMail = document.getElementById("mail");

valMail.minLength = "5";

valMail.maxLength = "50";

var valMsg = document.getElementById("msg");

valMsg.minLength = "20";

valMsg.maxLength = "250";


/* Se configura una función de validación con mensaje personalizado, estableciendo como obligatorio llenar todos los campos

e impidiendo el valor "Asunto" (default) en el input Asunto */

function validar () {

var nya = document.getElementById("nya").value;
var mail = document.getElementById("mail").value;
var asunto = document.getElementById("asunto").value;
var msg = document.getElementById("msg").value;


	if (nya != "" && mail != "" && asunto != "" && asunto != "Asunto" && msg != "") {

		alert("¡Gracias por contactarte!")

		return true;

	}

	else {

		resContacto = document.getElementById("res_contacto");

		resContacto.innerHTML = "¡Complete todos los campos e intente nuevamente!";

		return false;

	}

}