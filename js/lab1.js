var contador = 0;
var imagen1 = document.getElementById("cuerpo");

function imagenes(a, b, c){
    if(contador == 0){
        contador = contador + 1;
        imagen1.style.backgroundImage= "url("+a+")"; 
    }
    else if(contador == 1){
        contador = contador + 1;
        imagen1.style.backgroundImage= "url("+b+")"; 
    }
    else if(contador == 2){
        contador = 0;
        imagen1.style.backgroundImage= "url("+c+")";
    }
}

/*function comentario(){

var d = new Date($.now());
var imagen = document.createElement("img");		
var listavacia = document.getElementById("lista4");
var lista = document.createElement("li");


var input = document.getElementById("comentario2").value + d.toLocaleDateString() +" a las "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
var texto = document.createTextNode(input);

lista.appendChild(texto);
listavacia.appendChild(lista);
}
*/

function comentario(){

    var d = new Date($.now());
    const output = `
    <li class="collection-item">
          <div style="border-bottom: 2px solid white; padding: 20px; background-color: silver;">${$("#comentario2").val()+"<br>"+'<a style="font-size=3px; color: white;">'+"Comentario hecho el "+ d.toLocaleDateString() +" a las "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() +"</a>"}
            <a href="#!" class="secondary-content delete">
              <i class="material-icons red-text">close</i>
            </a>
          </div>
        </li>`;
    $("#lista4").append(output);

    x = navigator.geolocation;
    x.getCurrentPosition(success, failure);
}


function success(position)

{
    var myLat = position.coords.latitude;
    var myLong = position.coords.longitude;

    ///alert(myLat);

    var coords = new google.maps.LatLng(myLat,myLong);

    var mapOptions = {

        zoom:14,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({map:map, position:coords});	
}

function failure(){ }
