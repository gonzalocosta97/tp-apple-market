/* Vectores para información sobre los productos, tener en cuenta como referencia:
 
 0 = iPhone SE
 1 = iPhone 11
 2 = iPhone 12
 3 = iPhone 12 Pro Max

*/

var nombreIphone = ["iPhone SE (2020)", "iPhone 11", "iPhone 12", "iPhone 12 Pro Max"];

var imgIphone = ["se", "11", "12", "12pro"];

var displayIphone = ["4.7\" (Retina IPS LCD)", "6.1\" (Liquid Retina IPS LCD)", "6.1\" (Super Retina XDR OLED)", "6.7\" (Super Retina XDR OLED)"];

var chipsetIphone = ["<span>A13 Bionic</span>","A13 Bionic", "A14 Bionic", "A14 Bionic"];

var camaraIphone = ["12MP (Selfie 7MP)", "12MP Dual (Selfie 12MP)", "12MP Dual (Selfie 12MP)", "12MP Triple (Selfie 12MP)"];

var bateriaIphone = ["1821 mAh", "3110 mAh", "2815 mAh", "3687 mAh"];

var memoriaIphone = ["64/128/256 GB", "64/128/256 GB", "64/128/256 GB", "128/256/512 GB"];



for (i=0; i<4; i++) {



// Creación de div para cada producto

var secProductos = document.getElementById("productos");

var descProducto = document.createElement("div");

descProducto.className  = "desc_producto";

secProductos.appendChild(descProducto);


//Creación título para producto

var titProducto = document.createElement("h2");

titProducto.className ="tit_producto";

titProducto.innerHTML = "Apple " + nombreIphone[i];

descProducto.appendChild(titProducto);


//Creación de link para lightbox (contendra la imagen de producto)

var aImgProducto = document.createElement("a");

aImgProducto.href = "../images/" + imgIphone[i] + ".png";

aImgProducto.setAttribute("data-lightbox", nombreIphone[i]);

aImgProducto.setAttribute("data-title", nombreIphone[i]);

descProducto.appendChild(aImgProducto);


	// Creación div para imagen de producto

	var divImgProducto = document.createElement("div");

	divImgProducto.className = "div_img_producto";

	aImgProducto.appendChild(divImgProducto);


		// Creación img producto

		var imgProducto = document.createElement("img");

		imgProducto.className = "img_producto";

		imgProducto.src="../images/" + imgIphone[i] + ".png";

		divImgProducto.appendChild(imgProducto);


// Creación lista para info de producto 

var infoProducto = document.createElement("ul");

infoProducto.className = "info_producto";

descProducto.appendChild(infoProducto);


	// Creación ítems de información de lista

	// 1  Display

	var display = document.createElement ("li");

	display.innerHTML = "<strong>Display:</strong> " + displayIphone[i];

	infoProducto.appendChild(display);

	// 2 Chipset

	var chipset = document.createElement ("li");

	chipset.innerHTML = "<strong>Chipset:</strong> " + chipsetIphone[i];

	infoProducto.appendChild(chipset);

	// 3 Cámara

	var camara = document.createElement ("li");

	camara.innerHTML = "<strong>Cámara:</strong> " + camaraIphone[i];

	infoProducto.appendChild(camara);

	// 4 Batería

	var bateria = document.createElement ("li");

	bateria.innerHTML = "<strong>Batería:</strong> " + bateriaIphone[i];

	infoProducto.appendChild(bateria);

	// 5 Almacenamiento

	var memoria = document.createElement ("li");

	memoria.innerHTML = "<strong>Almacenamiento:</strong> " + memoriaIphone[i];

	infoProducto.appendChild(memoria);


// Creacion botón de compra

var botonCompra = document.createElement("div");

botonCompra.className = "boton_compra";

descProducto.appendChild(botonCompra);

	// Enlace botón compra

	var enlaceCompra = document.createElement("a");

	enlaceCompra.href="../sections/contacto.html";	

	enlaceCompra.id="enlace_compra";

	enlaceCompra.innerHTML = "¡ Lo quiero !";

	botonCompra.appendChild(enlaceCompra);

}