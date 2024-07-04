//var fecha = new Date();
//document.write(fecha);
//console.log(fecha.getHours() - 12);
//console.log (fecha.getMinutes());
//console.log (fecha.getDay());

function mostrarTiempo (){
    var fecha = new Date();
var parrafo = document.getElementById('fecha');
    parrafo.innerHTML = fecha;

}
var intervalo = setInterval (mostrarTiempo, 1000);

//var semana = ['Domingo', ' Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
//console.log ('Dia: ' + semana [fecha.getDay()]);