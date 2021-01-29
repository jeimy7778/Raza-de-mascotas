
function validacioncampos() {
    var nombre = document.getElementById('name').value;
    var tipom = document.getElementById('type');
    var email = document.getElementById('email').value;
    var Celular = document.getElementById('celular').value;
    var Comentario = document.getElementById('comment').value;
    if (nombre =="") {
        alert("El campo nombre esta vacio")
        document.getElementById('name').focus();
    }

    if (tipom ==""){
        alert("El campo tipo de mensaje esta vacio");
        document.getElementById('type').focus();
    }
    
    
    if (email =="") {
        alert('el campo email esta vacio')
        document.getElementById('email').focus();
    }


    if (celular =="") {
        alert('el campo celular esta vacio')
        document.getElementById('celular').focus();
    }

    if (Comentario =="") {
        alert('El campo Comentario esta vacio').focus();
        document.getElementById('comment').focus();
        
        /*var mensaje ="";
        if(tipom == || nombre == || email == || celular == || comment == ""){
            if(tipom == ""){
                mensaje += "El campo Tipo de mensaje esta vacio /n";
            }
            if (nombre == "") {
                mensaje += "El campo nombre esta vacio";
            }
            if (email == "") {
                mensaje += "El campo de email esta vacio";
            }
            if (celular = "") {
                mensaje += "El campo celular esta vacio"; 
            }
            if (comment == "") {
                mensaje += "El campo comentario esta vacio"
            }
            alert(mensaje);
*/
}