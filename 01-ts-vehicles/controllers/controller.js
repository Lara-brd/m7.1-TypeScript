"use strict";
let car;
let wheel;
let arrCars = [];
//////////////////////////////////////////////////
//Elementos DOM
const formCar = document.getElementById('formCar'), formWheels = document.getElementById('formWheels'), cardCar = document.getElementById('card-car'), cardWheel = document.getElementById('card-wheel'), carList = document.getElementById('car-list'), iPlate = document.getElementById('plate'), iColor = document.getElementById('color'), iBrand = document.getElementById('brand'), 
// errores
errPlate = document.querySelector('.errorPlate'), errColor = document.querySelector('.errorColor'), errBrand = document.querySelector('.errorBrand');
//////////////////////////////////////////////////
//User Interface
class UI {
    //show info Car
    addCar(car, carList) {
        const elem = document.createElement('div');
        elem.innerHTML = `
    <div class=" text-left text-md-center text-info">
      <div class="card-body mt-4 p-2">
        <h4>Plate:  ${car.plate}</h4>
        <p>Color: <strong>${car.color}</strong>
        Brand: <strong>${car.brand}</strong><p/>
      </div>
    </div> `;
        carList.appendChild(elem);
        cardCar.style.display = 'none';
        cardWheel.style.display = 'block';
    }
    //show info wheels
    addWheelsCar(car, carList) {
        const elementW = document.createElement('div');
        const arrWheels = car.wheels;
        elementW.innerHTML = `
      <div class="row m-0 mb-3 p-0 footer border-bottom">
        <div class="col-md-6 col-xl-3">
          <p class="p-2"><strong>W1</strong>: diam ${arrWheels[0].diameter}, brand ${arrWheels[0].brand}</p>
        </div>
        <div class="col-md-6 col-xl-3">
          <p class="p-2"><strong>W2</strong>: diam ${arrWheels[1].diameter}, brand ${arrWheels[1].brand}</p>
        </div>
        <div class="col-md-6 col-xl-3">
          <p class="p-2"><strong>W3</strong>: diam ${arrWheels[2].diameter}, brand ${arrWheels[2].brand}</p>
        </div>
        <div class="col-md-6 col-xl-3">
          <p class="p-2"><strong>W4</strong>: diam ${arrWheels[3].diameter}, brand ${arrWheels[3].brand}</p>
        </div>
      
      </div>
    `;
        carList.appendChild(elementW);
    }
} //end UI
//instanciamos UserInterface
const ui = new UI();
//////////////////////////////////////////////////
//Event car
formCar.addEventListener('submit', (e) => {
    e.preventDefault();
    let validated = validationCarForm(iPlate, iColor, iBrand, errPlate, errColor, errBrand);
    //instanciando Car;
    car = new Car(iPlate.value, iColor.value, iBrand.value);
    if (validated) {
        ui.addCar(car, carList);
    }
});
//input wheel
const diameter = document.querySelectorAll('.diameter');
const brandWheel = document.querySelectorAll('.brandWheel');
//////////////////////////////////////////////////
//Event wheels
formWheels.addEventListener('submit', function (e) {
    e.preventDefault();
    let validatedW = validationWheels();
    console.log(validatedW);
    if (validatedW) {
        //getting  inputs value
        for (var i = 0; i < 4; i++) {
            let diam = diameter[i];
            let diamWheel = diam.valueAsNumber;
            let brand = brandWheel[i];
            let brandWheels = brand.value;
            wheel = new Wheel(diamWheel, brandWheels);
            console.log('**************');
            console.log(wheel);
            car.addWheel(wheel);
        }
        ui.addWheelsCar(car, carList);
        console.log('********car **********');
        console.log(car);
        arrCars.push(car);
        formCar.reset();
        formWheels.reset();
        cardWheel.style.display = 'none';
        cardCar.style.display = 'block';
        console.log('****ARRAY Cars**********');
        console.log(arrCars);
    }
});
//////////////////////////////////////////////////
//validacion forms
//carformValidation
function validationCarForm(iPlate, iColor, iBrand, errPlate, errColor, errBrand) {
    var acumErrores = 0;
    formCar.classList.remove('is-invalid');
    if (iPlate.value == '') {
        iPlate.classList.add('is-invalid');
        errPlate.textContent = 'Empty Field';
        acumErrores++;
    }
    else if (!validationPlate(iPlate.value)) {
        iPlate.classList.add('is-invalid');
        errPlate.textContent = 'Wrong Plate';
        acumErrores++;
    }
    if (iColor.value == '') {
        iColor.classList.add('is-invalid');
        errColor.textContent = 'Empty Field';
        acumErrores++;
    }
    if (iBrand.value == '') {
        iBrand.classList.add('is-invalid');
        errBrand.textContent = 'Empty Field';
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
//WHEELS validation
function validationWheels() {
    //dom for wheels
    const allDiameter = document.querySelectorAll(".diameter");
    const allerrDiam = document.querySelectorAll(".errorDiam");
    const allBrands = document.querySelectorAll(".brandWheel");
    const allerrBrand = document.querySelectorAll(".errorBrand");
    formWheels.classList.remove('is-invalid');
    var acumErrores = 0;
    //validation Diameter
    for (let i = 0; i < allDiameter.length; i++) {
        let diameter = allDiameter[i];
        let errDiam = allerrDiam[i];
        if (isNaN(diameter.valueAsNumber)) {
            diameter.classList.add("is-invalid");
            errDiam.textContent = "Empty Field";
        }
        else if (!validationDiam(diameter.value)) {
            alert("Diameter " + diameter.valueAsNumber + " is wrong.");
            diameter.classList.add("is-invalid");
            errDiam.textContent = "Incorrect Diameter";
            acumErrores++;
        }
    }
    //validation brandWheels
    for (let i = 0; i < allBrands.length; i++) {
        let brandWheel = allBrands[i];
        let errBrand = allerrBrand[i];
        if (brandWheel.value == '') {
            brandWheel.classList.add("is-invalid");
            errBrand.textContent = "Empty Field";
            acumErrores++;
        }
    } //end brand
    if (acumErrores > 0) {
        return false;
    }
    else {
        return true;
    }
}
///////////////////////////////////
//REGEX
function validationDiam(diam) {
    var regex = /^[0-2]((\.|\,)[4-9])?$/gm;
    return regex.test(diam) ? true : false;
}
function validationPlate(iPlate) {
    var regex = /^[1-9]{4}[A-Za-z]{3}$/gm;
    return regex.test(iPlate) ? true : false;
}
///////////////////////////////////
//BLUR events
formCar.addEventListener('blur', (event) => {
    const trget = event.target;
    if (trget.value != '')
        trget.classList.remove('is-invalid');
}, true);
formWheels.addEventListener('blur', (event) => {
    const trget = event.target;
    if (trget.value != '')
        trget.classList.remove('is-invalid');
}, true);
