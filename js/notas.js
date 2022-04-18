
if(localStorage.getItem("codigo")==null) {
  window.location.href="../index.html";
}


var codigo = localStorage.getItem('codigo');
var nombre = localStorage.getItem('nombre');
document.getElementById('lcod').innerHTML = codigo;
document.getElementById('lnom').innerHTML = nombre;

document.getElementById("cerrar").onclick = function() {
  localStorage.removeItem('nombre');
  localStorage.removeItem('codigo');

  window.location.href="../index.html";
}