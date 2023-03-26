// Se establece función para cerrar ventana de validación de garantía

function exitVal() {

	var ventanaValidacion = document.getElementById("val_garantia");

	ventanaValidacion.style.display="none";

}





// Se establece función para acceder al calculo de la garantía

function valGar() {

	var titValGar = document.getElementById("tit_val");

	var botValGar = document.getElementById("bot_val_gar");

	titValGar.style.display="none";

	botValGar.style.display="none";

	var infoGar = document.getElementById("info_gar");

	infoGar.style.display="block";

}





// Se establece función que calcula la garantía

function calcFecha () {


	// Se obtiene el día que corre, y se normaliza dicha fecha para no tener problemas por las diferencias horarias


	var hoy = new Date();

		var dia = hoy.getUTCDate();
		var mes = hoy.getUTCMonth();
		var anio = hoy.getUTCFullYear();

		var hoy = new Date (anio, mes, dia);


	// Se obtiene la fecha ingresada en el input, y se corrige dado que por la zona horaria se mostraría un día anterior 


	var fechaCompra = document.getElementById("fecha_compra").value;

	var inicioGar = new Date (fechaCompra);

		var diaInicio = inicioGar.getUTCDate();
		var mesInicio = inicioGar.getUTCMonth();
		var anioInicio = inicioGar.getUTCFullYear();

		var inicioGar = new Date (anioInicio, mesInicio, diaInicio);


	// Se crea una fecha mínima para validar el ingreso del usuario 


	var fechaMinima = new Date (2005, 0, 1); 


	/* Se valida el ingreso, y en caso de que sea válido se muestran los resultados en pantalla. En caso de que sea inválido se

	solicita el reingreso al usuario */


	var resultado = document.getElementById("res_garantia");


	if (inicioGar <= hoy && inicioGar >= fechaMinima) {

	
		var finGar = new Date (inicioGar);

			finGar.setFullYear(inicioGar.getFullYear()+1);


			if (finGar >= hoy) {

			resultado.innerHTML = "Tu equipo se encuentra en garantía </br> <span> (Hasta el día: " + finGar.getDate() + "/"
																									+ (finGar.getMonth()+1) + "/"
																									+ finGar.getFullYear() + ")</span>";

			resultado.style.color = "#5bc764";

			}


			else {

			resultado.innerHTML = "La garantía de tu equipo ha caducado </br> <span> (El día: " + finGar.getDate() + "/"
																					   + (finGar.getMonth()+1) + "/"
																					   + finGar.getFullYear() + ")</span>";

			resultado.style.color = "#eda302";

			}


	}


	else {

		resultado.innerHTML = "La fecha ingresada es inválida <br> <span> (Revise los datos e intente nuevamente)</span>";

		resultado.style.color ="#000000";

	}


}