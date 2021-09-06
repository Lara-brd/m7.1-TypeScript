"use strict";
const elemWheels = document.createElement('div');
let arrWheels = car.wheels;
elemWheels.innerHTML = `

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
carList.appendChild(elemWheels);
