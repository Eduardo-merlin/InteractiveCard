import { formatToStringCard } from "./card.js";

const inputNombre = document.getElementById("inputName");
const nameLoad = document.getElementById("name");
const numberTarjet = document.getElementById("numberTarget");
const inputTarjet = document.getElementById("inputCardNumber")
const cvv = document.getElementById("cvv");
const inputCvv = document.getElementById("inputCvv");
const mes = document.getElementById("mesData");
const inputMes = document.getElementById("inputMes");
const year = document.getElementById("yearData");
const inputYear = document.getElementById("inputYear");
const buttonConfirm = document.getElementById("buttonConfirm");
const errorTarjetaNodo = document.getElementById("errorTarjet");
const errorNameNodo = document.getElementById("errorName");
const errroCvvNodo = document.getElementById("errorCvv");
const errorFechNodo = document.getElementById("errorFech");
const formCongrats = document.getElementById("congrats")
const formularioNodo = document.getElementById("formulario")
const buttonContinue = document.getElementById("buttonContinue")

const expRegSoloNumeros = /^[0-9]+$/;



inputTarjet.addEventListener("input", updateTarjeta);
inputNombre.addEventListener("input", updateValue);
inputCvv.addEventListener("input", updateCvv);
inputMes.addEventListener("input", updateMes);
inputYear.addEventListener("input", updateYear);
buttonConfirm.addEventListener("click", formulario)
buttonContinue.addEventListener("click", formNodo)



function updateValue(e) {
    const inputActual = e.srcElement.value;

    if (inputActual === "" || inputActual === " ") {
        nameLoad.innerText = "nombre propietario";

    } else {
        nameLoad.innerText = inputActual;

    }

}


function updateTarjeta(e) {

    const inputActualT = e.srcElement.value;

    if ((inputActualT !== "" || inputActualT !== " ") && !expRegSoloNumeros.test(inputActualT)) {
        inputTarjet.classList.add("error-input");
        errorTarjetaNodo.classList.remove("desactive");
    } else {
        inputTarjet.classList.remove("error-input");
        errorTarjetaNodo.classList.add("desactive");
    }

    const tarjetaFormat = formatToStringCard(inputActualT);
    numberTarjet.innerText = tarjetaFormat

}


function updateCvv(e) {
    const inputActualC = e.srcElement.value;

    if ((inputActualC !== "" || inputActualC === " ") && !expRegSoloNumeros.test(inputActualC)) {
        // cvv.innerText = "000";
        inputCvv.classList.add("error-input")
        errroCvvNodo.classList.remove("desactive")

    } else {
        cvv.innerText = inputActualC;
        inputCvv.classList.remove("error-input");
        errroCvvNodo.classList.add("desactive");

    }
}

function updateMes(e) {
    const inputActualM = e.srcElement.value;
    if ((inputActualM !== "" || inputActualM === " ") && !expRegSoloNumeros.test(inputActualM)) {
        // mes.innerText = "00";
        inputMes.classList.add("error-input");
        errorFechNodo.classList.remove("desactive");
    } else {
        mes.innerText = inputActualM;
        inputMes.classList.remove("error-input");
        errorFechNodo.classList.add("desactive");
    }

}

function updateYear(e) {
    const inputActualY = e.srcElement.value;
    if ((inputActualY !== "" || inputActualY === " ") && !expRegSoloNumeros.test(inputActualY)) {
        // year.innerText = "00";
        inputYear.classList.add("error-input");
        errorFechNodo.classList.remove("desactive");
    } else {
        year.innerText = inputActualY;
        inputYear.classList.remove("error-input");
        errorFechNodo.classList.add("desactive");
    }
}

function formulario() {

    console.log("acabas de hacer click");
    const inputNombreValue = inputNombre.value;
    const inputTarjetValue = inputTarjet.value;
    const inputCvValue = inputCvv.value;
    const inputMesValue = inputMes.value;
    const inputYearValue = inputYear.value;

    let errorForm = false;

    if (inputNombreValue === "" || inputNombreValue === " ") {
        inputNombre.classList.add("error-input");
        errorNameNodo.classList.remove("desactive");
        errorForm = true;
    } else {
        inputNombre.classList.remove("error-input");
        errorNameNodo.classList.add("desactive");
    }

    if (inputTarjetValue === "" || inputTarjetValue === " ") {
        inputTarjet.classList.add("error-input");
        errorTarjetaNodo.classList.remove("desactive");
        errorForm = true;
    }

    if (inputCvValue === "" || inputCvValue === " ") {
        inputCvv.classList.add("error-input");
        errroCvvNodo.classList.remove("desactive");
        errorForm = true;
    }

    if (inputMesValue === "" || inputMesValue === " ") {
        inputMes.classList.add("error-input");
        errorFechNodo.classList.remove("desactive");
        errorForm = true;
    }

    if (inputYearValue === "" || inputYear === " ") {
        inputYear.classList.add("error-input");
        errorFechNodo.classList.remove("desactive");
        errorForm = true;
    }

    if (!errorForm) {
        //no hay error
        formularioNodo.classList.add("deactive")
        formCongrats.classList.remove("deactive")
    }
}

function formNodo() {
    console.log("acabas de hacer click")
    formularioNodo.classList.remove("deactive");
    formCongrats.classList.add("deactive")
}