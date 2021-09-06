"use strict";
let rocket;
let arrRockets = [];
let speed;
//getting DOM
const btnRocket1 = document.getElementById('btnRocket1'), btnRocket2 = document.getElementById('btnRocket2'), btnAccelerate1 = document.getElementById('btnAccelerate1'), btnAccelerate2 = document.getElementById('btnAccelerate2'), btnBreak1 = document.getElementById('btnBreak1'), btnBreak2 = document.getElementById('btnBreak2'), printRocket1 = document.getElementById('printRocket1'), printRocket2 = document.getElementById('printRocket2'), dispInfo = document.getElementById('disp-info'), panel1 = document.getElementById('panel1'), panel2 = document.getElementById('panel2');
//////////////////////
//EVENTS
//create rocket 1
let pressbtn1 = false;
btnRocket1.addEventListener('click', function () {
    if (!pressbtn1) {
        createRocket('32WESSDS', 3);
        rocket.thrusters.push(10, 30, 80);
        console.log(rocket.maxPower());
        arrRockets.push(rocket);
        // speed = rocket.currentPower;
        // panel.textContent = 'result'+ speed
        pressbtn1 = true;
    }
});
//create rocket2
let pressbtn2 = false;
btnRocket2.addEventListener('click', function () {
    if (!pressbtn2) {
        createRocket('LDSFJA32', 6);
        rocket.thrusters.push(30, 40, 50, 50, 30, 10);
        console.log(rocket.maxPower());
        arrRockets.push(rocket);
        pressbtn2 = true;
    }
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
btnBreak1.addEventListener('click', function () {
    const rocket1 = arrRockets[0];
    console.log('***rocket1 break***');
    console.log(rocket1.break());
    uiSpeed(panel1, rocket1.currentPower);
});
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
        const div = document.createElement('div');
        div.innerHTML = rocket2.toString();
        dispInfo.appendChild(div);
        pressbtn4 = true;
    }
});
//////////////////////////////////
//FUNCTIONS 
//Create Rocket
function createRocket(code, thrustersNum) {
    rocket = new Rocket(code, thrustersNum);
    console.log(rocket);
}
//panel aceleracion
function uiSpeed(panel, currentPower) {
    panel.textContent = 'power ' + currentPower;
}
