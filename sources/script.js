//Stats uwu
let monedas = 0;
let salud = 50;
let energia = 50;
let hambre = 50;
let felicidad = 50;
let alimento = 0;
//Botones de reconpensas>w<
let rosa_comprado = false;
let turquesa_comprado = false;
let azul_comprado = false;
let morado_comprado = false;
let flores_comprado = false;
let puntos_comprado = false;
let musica_sonando = false;
//Objetos 7w7
let boton_alimentar = document.getElementById("alimentar");
let boton_dormir = document.getElementById("dormir");
let boton_jugar = document.getElementById("jugar");
let boton_mascota = document.getElementById("mascota");
let InputMonedas = document.getElementById("monedas");
let InputFelicidad = document.getElementById("felicidad");
let InputEnergia = document.getElementById("energia"); 
let InputHambre = document.getElementById("hambre");
let InputSalud = document.getElementById("salud");
let InputAlimento = document.getElementById("alimento");
let Body = document.getElementById("body");
//Audios o,3o,
const musica = new Audio('sound/musica.mp3');
//Intervalos :v
let IntervaloDescansar;

(()=>{
    let LocalMonedas = JSON.parse(localStorage.getItem("monedas"));
    let LocalSalud = JSON.parse(localStorage.getItem("salud"));
    let LocalEnergia = JSON.parse(localStorage.getItem("energia"));
    let LocalHambre = JSON.parse(localStorage.getItem("hambre"));
    let LocalFelicidad = JSON.parse(localStorage.getItem("felicidad"));
    let LocalAlimento = JSON.parse(localStorage.getItem("alimento"));

    let LocalRosa = JSON.parse(localStorage.getItem("rosa_comprado"));
    let LocalAzul = JSON.parse(localStorage.getItem("azul_comprado"));
    let LocalTurquesa = JSON.parse(localStorage.getItem("turquesa_comprado"));
    let LocalMorado= JSON.parse(localStorage.getItem("morado_comprado"));
    let LocalFlores = JSON.parse(localStorage.getItem("flores_comprado"));
    let LocalPuntos = JSON.parse(localStorage.getItem("puntos_comprado"));

    if (LocalSalud === null){
        LocalSalud = 50;
        InputSalud.innerText = "Salud: " + LocalSalud + "%";
    } else {
        salud = LocalSalud;
        InputSalud.innerText = "Salud: " + LocalSalud + "%";
    }
    if (LocalMonedas === null){
        LocalMonedas = 0;
        InputMonedas.innerText = "Monedas: " + LocalMonedas;
    } else {
        monedas = LocalMonedas;
        InputMonedas.innerText = "Monedas: " + LocalMonedas;
    }
    if (LocalEnergia === null){
        LocalEnergia = 50;
        InputEnergia.innerText = "Energía: " + LocalEnergia + "%";
    } else {
        energia = LocalEnergia;
        InputEnergia.innerText = "Energía: " + LocalEnergia + "%";
    }
    if (LocalHambre === null){
        LocalHambre = 50;
        InputHambre.innerText = "Hambre: " + LocalHambre + "%";
    } else {
        hambre = LocalHambre;
        InputHambre.innerText = "Hambre: " + LocalHambre + "%";
    }
    if (LocalFelicidad === null){
        LocalFelicidad = 50;
        InputFelicidad.innerText = "Felicidad: " + LocalFelicidad + "%"; 
    } else {
        felicidad = LocalFelicidad;
        InputFelicidad.innerText = "Felicidad: " + LocalFelicidad + "%";
    }
    if (LocalAlimento === null){
        LocalAlimento = 0;
        InputAlimento.innerText = "Croquetas x" + LocalAlimento;
    } else {
        alimento = LocalAlimento;
        InputAlimento.innerText = "Croquetas x" + LocalAlimento;
    }
    if (LocalRosa === null){
        LocalRosa = false;
    } else {
        rosa_comprado = LocalRosa;
    }
    if (LocalAzul === null){
        LocalAzul = false;
    } else {
        azul_comprado = LocalAzul;
    }
    if (LocalTurquesa === null){
        LocalTurquesa = false;
    } else {
        turquesa_comprado = LocalTurquesa;
    }
    if (LocalMorado === null){
        LocalMorado = false;
    }else {
        morado_comprado = LocalMorado;
    }
    if (LocalFlores === null){
        LocalFlores = false;
    } else {
        flores_comprado = LocalFlores;
    }
    if (LocalPuntos === null){
        LocalPuntos = false;
    } else{
        puntos_comprado = LocalPuntos;
    }

})();

function GUARDAR(){
    alert("Se ha guardado tu progreso!");
    localStorage.setItem("monedas" , JSON.stringify(monedas));
    localStorage.setItem("salud" , JSON.stringify(salud));
    localStorage.setItem("energia" , JSON.stringify(energia));
    localStorage.setItem("hambre" , JSON.stringify(hambre));
    localStorage.setItem("felicidad", JSON.stringify(felicidad));
    localStorage.setItem("alimento", JSON.stringify(alimento));

    localStorage.setItem("rosa_comprado" , JSON.stringify(rosa_comprado));
    localStorage.setItem("azul_comprado", JSON.stringify(azul_comprado));
    localStorage.setItem("turquesa_comprado", JSON.stringify(turquesa_comprado));
    localStorage.setItem("morado_comprado" , JSON.stringify(morado_comprado));
    localStorage.setItem("flores_comprado" , JSON.stringify(flores_comprado));
    localStorage.setItem("puntos_comprado" , JSON.stringify(puntos_comprado));
}

function MUSICA(){
    alert("Recuerda que en el boton del lado contrario puedes guardar tu progreso, para no perderlo despues de cerrar la pestaña!")
    if (musica_sonando === false){
        musica.loop = true;
        musica.play();
        musica_sonando = true;
    } else {
        musica.pause();
        musica_sonando = false;
    }
}


function MASCOTA() {
    monedas = monedas + 1;
    InputMonedas.innerText = "Monedas: " + monedas;
}


function JUGAR(){
    if (energia < 25){
        alert("No tienes suficiente energía");
    } else {
        felicidad = felicidad + 15;
        energia = energia - 5;
        if (felicidad > 100){
            alert("La felicidad ya está el 100%");
            felicidad = 100;
            InputFelicidad.innerText = "Felicidad: " + felicidad + "%"
        } else {
            InputFelicidad.innerText = "Felicidad: " + felicidad + "%";
            InputEnergia.innerText = "Energía: " + energia + "%";
        }
    }
}

function COMPRAR(articulo, precio){
    if (articulo === 'alimento'){
        if (monedas < precio){
                alert("No tienes suficientes monedas, consigue monedas clikando al perrito");
        } else {
            monedas = monedas - precio;
            alimento = alimento + 1;
            InputMonedas.innerText = "Monedas: " + monedas;
            InputAlimento.innerText = "Croquetas x" + alimento;
        }

    } else if (articulo === 'rosa'){ 
        if (rosa_comprado === true){
            console.log("ya lo compraste")
            Body.classList.add("bg-rosa");
        } else {
            if (monedas < precio){
                console.log("No tienes suficientes monedas");
            } else {
                monedas = monedas - precio;
                InputMonedas.innerText = "Monedas: " + monedas;
                Body.classList.add("bg-rosa");
                rosa_comprado = true;
            }
        }

    } else if (articulo === 'azul'){ 
        if (azul_comprado === true){
            console.log("ya lo compraste");
            Body.classList.add("bg-azul");
        } else {
            if (monedas < precio){
                console.log("No tienes suficientes monedas");
            } else {
                monedas = monedas - precio;
                InputMonedas.innerText = "Monedas: " + monedas;
                Body.classList.add("bg-azul");
                azul_comprado = true;
            }
        }
    } else if (articulo === 'morado'){ 
        if (morado_comprado === true){
            console.log("ya lo compraste")
            Body.classList.add("bg-morado");
        } else {
            if (monedas < precio){
                console.log("No tienes suficientes monedas");
            } else {
                monedas = monedas - precio;
                InputMonedas.innerText = "Monedas: " + monedas;
                Body.classList.add("bg-morado");
                morado_comprado = true;
            }
        }
    } else if (articulo === 'turquesa'){ 
        if (turquesa_comprado === true){
            console.log("ya lo compraste")
            Body.classList.add("bg-turquesa");
        } else {
            if (monedas < precio){
                console.log("No tienes suficientes monedas");
            } else {
                monedas = monedas - precio;;
                InputMonedas.innerText = "Monedas: " + monedas;
                Body.classList.add("bg-turquesa");
                turquesa_comprado = true;
            }
        }
    } else if (articulo === 'flores'){ 
        if (flores_comprado === true){
            console.log("ya lo compraste")
            Body.classList.add("bg-flores");
        } else {
            if (monedas < precio){
                console.log("No tienes suficientes monedas");
            } else {
                monedas = monedas - precio;
                InputMonedas.innerText = "Monedas: " + monedas;
                Body.classList.add("bg-flores");
                flores_comprado = true;
            }
        }
    } else if (articulo === 'puntos'){ 
        if (puntos_comprado === true){
            console.log("ya lo compraste")
            Body.classList.add("bg-puntos");
        } else {
            if (monedas < precio){
                console.log("No tienes suficientes monedas");
            } else {
            monedas = monedas - precio;
            InputMonedas.innerText = "Monedas: " + monedas;
            Body.classList.add("bg-puntos");
            puntos_comprado = true;
            }
        }
    }
}

function ALIMENTAR(){
    if (alimento < 1){
        alert("No tienes alimento, compralo primero!");
    } else {
        salud = salud + 5;
        hambre = hambre + 10;
        if (hambre >= 100){
            alert("Ya estas lleno");
            hambre = 100;
            InputHambre.innerText = "Hambre: " + hambre + "%";
        } else if (salud >=100) {
            alert("Ya estas sano");
            salud = 100;
            InputSalud.innerText = "Salud; " + salud + "%"
        } else {
            InputHambre.innerText = "Hambre: " + hambre + "%"
            InputSalud.innerText = "Salud: " + salud + "%"
            alimento = alimento - 1;
            InputAlimento.innerText = "Croquetas x" + alimento
        }
    }
}

function BAJAR_STATS(){
    energia = energia - 10;
    hambre = hambre - 10;
    felicidad = felicidad - 10;
    salud = salud - 1;

    if (energia <= 9 || hambre <= 9){
        alert("Tu mascota ha muerto");
        location.reload();

    } else{
        InputFelicidad.innerText = "Felicidad: " + felicidad + "%";
        InputHambre.innerText = "Hambre: " + hambre + "%";
        InputEnergia.innerText = "Energía: " + energia + "%";
        InputSalud.innerText = "Salud: " + salud + "%"
    }

}
let IntervaloBajarStats = setInterval(BAJAR_STATS, 300000);

function DORMIR(){
    alert("Estas durmiendo, para despertar clikea el sol");
    boton_alimentar.disabled = true;
    boton_jugar.disabled = true;
    boton_mascota.disabled = true;
    boton_dormir.disabled = true;

    IntervaloDescansar = setInterval(DESCANSAR, 150000);

}

function DESCANSAR(){
    energia = energia + 20;
    salud = salud + 5;
    InputSalud.innerText = "Salud: " + salud + "%"
    InputEnergia.innerText = "Energía: " + energia + "%";
    if (salud >= 100){
        alert("Salud al maximo!");
        salud = 100;
        InputSalud.innerText = "Salud: " + salud + "%"
    }
    if (energia >= 100){
        alert("Ya no tienes sueño");
        energia = 100;
        InputEnergia.innerText = "Energía: " + energia + "%";
        DESPERTAR();
    }

}

function DESPERTAR(){
    alert("Has despertado");
    boton_alimentar.disabled = false;
    boton_jugar.disabled = false;
    boton_mascota.disabled = false;
    boton_dormir.disabled = false;

    clearInterval(IntervaloDescansar);

}