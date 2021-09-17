"use strict";
let rocket;
let arrRockets = [];
//getting DOM elements
const formRocket = document.getElementById('formRocket'), btnRocket1 = document.getElementById('btnRocket1'), btnRocket2 = document.getElementById('btnRocket2'), inThruster = document.getElementById('inputThruster'), code = document.getElementById('code'), thrusternum = document.getElementById('thrusterNum'), btnThruster = document.getElementById('buttonThrusters'), submitForm = document.getElementById('submitForm1'), result = document.getElementById('result'), btnAccelerate1 = document.getElementById('btnAccelerate1'), btnAccelerate2 = document.getElementById('btnAccelerate2'), btnBreak1 = document.getElementById('btnBreak1'), btnBreak2 = document.getElementById('btnBreak2'), printRocket1 = document.getElementById('printRocket1'), printRocket2 = document.getElementById('printRocket2'), instructions = document.querySelector('.instructions'), dispInfo = document.getElementById('disp-info'), panel1 = document.getElementById('panel1'), panel2 = document.getElementById('panel2');
////////////////////////////
//EVENTS
//create rockets
btnRocket1.addEventListener('click', (e) => {
    instructions.classList.add('d-none');
    formRocket.classList.remove('d-none');
    btnRocket1.classList.add('btn', 'disabled');
    if (arrRockets.length == 0 && btnRocket2.classList.contains('disabled')) {
        btnRocket2.classList.remove('btn', 'disabled');
    }
});
btnRocket2.addEventListener('click', (e) => {
    instructions.classList.add('d-none');
    formRocket.classList.remove('d-none');
    btnRocket2.classList.add('btn', 'disabled');
    console.log(arrRockets.length);
    if (arrRockets.length == 0 && btnRocket1.classList.contains('disabled')) {
        btnRocket1.classList.remove('btn', 'disabled');
    }
});
// FORM ////////
let inPower;
let pressBTN = false;
btnThruster.onclick = function (e) {
    if (!pressBTN) {
        validationForm1(code, thrusternum);
        if (validationForm1(code, thrusternum)) {
            rocket = new Rocket(code.value, thrusternum.valueAsNumber);
            createPowerInputs(inThruster);
            console.log(rocket);
        }
        pressBTN = true;
    }
    else {
        removeInputs(inThruster);
        validationForm1(code, thrusternum);
        if (validationForm1(code, thrusternum)) {
            validationForm1(code, thrusternum);
            rocket = new Rocket(code.value, thrusternum.valueAsNumber);
            createPowerInputs(inThruster);
        }
        console.log(rocket);
    }
};
//Event submit
let pressSubmit = false;
formRocket.addEventListener('submit', (e) => {
    e.preventDefault();
    const valThruster = validationThruster();
    if (valThruster && validationForm1(code, thrusternum)) {
        addingThrusters();
        arrRockets.push(rocket);
        formRocket.classList.add('d-none');
        formRocket.reset();
        removeInputs(inThruster);
    }
    else if (!valThruster) {
        validationThruster();
    }
    console.log(arrRockets);
});
//accelerate r1
btnAccelerate1.addEventListener('click', function () {
    const rocket1 = arrRockets[0];
    console.log('***rocket1 accelerate***');
    console.log(rocket1.accelerate());
    uiSpeed(panel1, rocket1.currentPower);
});
//accelerate r2
btnAccelerate2.addEventListener('click', function () {
    const rocket2 = arrRockets[1];
    console.log('***rocket2 accelerate***');
    console.log(rocket2.accelerate());
    uiSpeed(panel2, rocket2.currentPower);
});
//break 1
btnBreak1.addEventListener('click', function () {
    const rocket1 = arrRockets[0];
    console.log('***rocket1 break***');
    console.log(rocket1.break());
    uiSpeed(panel1, rocket1.currentPower);
});
//break 2
btnBreak2.addEventListener('click', function () {
    const rocket2 = arrRockets[1];
    console.log('***rocket2 break***');
    console.log(rocket2.break());
    uiSpeed(panel2, rocket2.currentPower);
});
let pressbtn3 = false;
printRocket1.addEventListener('click', function () {
    if (!pressbtn3) {
        const rocket1 = arrRockets[0];
        console.log(rocket1);
        dispInfo.classList.remove('d-none');
        const div = document.createElement('div');
        div.innerHTML = rocket1.toString();
        dispInfo.appendChild(div);
        pressbtn3 = true;
    }
});
let pressbtn4 = false;
printRocket2.addEventListener('click', function () {
    if (!pressbtn4) {
        const rocket2 = arrRockets[1];
        dispInfo.classList.remove('d-none');
        const div = document.createElement('div');
        div.innerHTML = rocket2.toString();
        dispInfo.appendChild(div);
        pressbtn4 = true;
    }
});
//////////////////////////////////////////////////////
/////////////////  FUNTIONS  /////////////////////////
//////////////////////////////////////////////////////
//create inputs for power
function createPowerInputs(inThruster) {
    for (var i = 0; i < rocket.thrusterNum; i++) {
        const inPower = document.createElement('input');
        inPower.classList.add('power', 'form-control', 'w-50', 'mt-3');
        const errPOWER = document.createElement('div');
        errPOWER.textContent = 'Power ' + [i + 1
        ];
        const wrapp = document.createElement('div');
        wrapp.appendChild(inPower);
        wrapp.appendChild(errPOWER);
        wrapp.classList.add('wrapp');
        inThruster.append(wrapp);
    }
}
function removeInputs(inThruster) {
    inThruster.innerHTML = '';
}
function addingThrusters() {
    const powerList = document.querySelectorAll('.power');
    for (let i = 0; i < powerList.length; i++) {
        const powerValue = powerList[i];
        rocket.thrusters.push(parseInt(powerValue.value));
    }
    console.log(rocket);
}
//panel aceleracion
function uiSpeed(panel, currentPower) {
    panel.textContent = 'power ' + currentPower;
}
////////////////////////////////////////////////////////
//validate
function validationForm1(code, thrusternum) {
    var acumErrores = 0;
    formRocket.classList.remove('is-invalid');
    const erCode = document.querySelector('.error-code'), erThrusterNum = document.querySelector('.error-thruster');
    if (code.value == '') {
        code.classList.add('is-invalid');
        erCode.textContent = 'Empty Field';
        acumErrores++;
    }
    else if (!regexCode(code.value)) {
        code.classList.add('is-invalid');
        erCode.textContent = 'Wrong Code';
        acumErrores++;
    }
    if (isNaN(thrusternum.valueAsNumber)) {
        thrusternum.classList.add('is-invalid');
        erThrusterNum.textContent = 'Empty Field';
        acumErrores++;
    }
    else if (!regexThrusterNunber(thrusternum.value)) {
        thrusternum.classList.add('is-invalid');
        erThrusterNum.textContent = 'Wrong Number';
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
function validationThruster() {
    const powerList = document.querySelectorAll('.power');
    var acumErrores = 0;
    formRocket.classList.remove('is-invalid');
    for (let i = 0; i < powerList.length; i++) {
        const inPower = powerList[i];
        if (inPower.value == '') {
            inPower.classList.add('is-invalid');
            const errPower = inPower.nextSibling;
            console.log(errPower.textContent);
            errPower.textContent;
            errPower.textContent = 'Empty Field';
            errPower.classList.add('invalid-feedback');
            // setTimeout(function(){
            //   errPOWER.remove();
            // }, 1000);
            acumErrores++;
        }
        else if (!regexPower(inPower.value)) {
            inPower.classList.add('is-invalid');
            const errPower = inPower.nextSibling;
            console.log(errPower.textContent);
            errPower.textContent;
            errPower.textContent = 'Wrong number';
            errPower.classList.add('invalid-feedback');
            acumErrores++;
        }
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
//regex
function regexCode(code) {
    var regex = /^[a-zA-Z0-9]{8}$/g;
    return regex.test(code) ? true : false;
}
function regexThrusterNunber(thrusternum) {
    var regex = /^[1-6]$/g;
    return regex.test(thrusternum) ? true : false;
}
function regexPower(iPower) {
    var regex = /[1-9](0)/g;
    return regex.test(iPower) ? true : false;
}
//BLURevent
formRocket.addEventListener('blur', (event) => {
    const target = event.target;
    if (target.value != '')
        target.classList.remove('is-invalid');
}, true);
// var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;
// inThruster.removeChild(inThruster.childNodes[i]);
