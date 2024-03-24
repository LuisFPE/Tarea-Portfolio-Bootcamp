function CalcularPersonaje(){
    document.getElementById("resultadoLyn").style.display = "none";
    document.getElementById("resultadoEliwood").style.display = "none";
    document.getElementById("resultadoHector").style.display = "none";

    let puntosLyn = 0;
    let puntosHector = 0;

    let nombre = document.getElementById("nombreUsuario").value;
    let arma1 = document.getElementById("armaFavorita").value;
    let fuerza_precision = document.getElementById("fuerzaVSprecision").value;
    let defensa_evasion = document.getElementById("defensaVSevasion").value;
    let arma2 = document.getElementById("armaSecundaria").value;
    let color = document.querySelector('input[name="inlineRadioOptions"]:checked').value;

    if (arma1==1) {
        puntosLyn = puntosLyn + 1;
    }

    if (arma1==2) {
        puntosHector = puntosHector + 1;
    }

    if (fuerza_precision > 66) {
        puntosLyn = puntosLyn + 1;;
    }

    if (fuerza_precision < 33) {
        puntosHector = puntosHector + 1;
    }

    if (defensa_evasion > 66) {
        puntosLyn = puntosLyn + 1;;
    }

    if (defensa_evasion < 33) {
        puntosHector = puntosHector + 1;
    }

    if (arma2==1) {
        puntosLyn = puntosLyn + 1;
    }

    if (arma2==3) {
        puntosHector = puntosHector + 1;
    }

    if (color=="option1") {
        puntosLyn = puntosLyn + 1;
    }

    if (color=="option3") {
        puntosHector = puntosHector + 1;
    }

    if (puntosLyn >= 3) {
        document.getElementById("resultadoLyn").style.display = "block";
    }else if (puntosHector >= 3) {
        document.getElementById("resultadoHector").style.display = "block";   
    } else {
        document.getElementById("resultadoEliwood").style.display = "block";    
    }

    Swal.fire({
        title: "Se ha calculado con éxito",
        text: nombre + " sus resultados estan listos",
        icon: "success"
    });

}