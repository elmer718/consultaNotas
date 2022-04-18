
if(localStorage.getItem("codigo")!=null) {
  window.location.href="html/notas.html";
}


const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  document.getElementsByClassName("contenido").innerHTML = this.responseText;
}
const Json = "https://api-parcial.crangarita.repl.co/login";
  document.getElementById("ingresar").addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.getElementById("codigo").value;
    let pass = document.getElementById("password").value;

    let usuario = {
      "codigo": user,
      "clave": pass,
    }

    xhttp.open("POST", Json, true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(usuario));


    xhttp.onreadystatechange = function() {
      //ready state indica que el estado cambio, 200 es el valor de una respuesta exitosa
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          console.log(response);
            localStorage.setItem("codigo", response.codigo);
            localStorage.setItem("nombre", response.nombre);
            window.location.href="html/notas.html";
      } else {
          console.log(this.responseText);
      }
    }
  });