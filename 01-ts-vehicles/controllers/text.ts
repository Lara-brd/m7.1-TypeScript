




/*
const formWheels = document.getElementById('formWheels') as HTMLFormElement;

**
formWheels.classList.remove('is-invalid');



formWheels.addEventListener('submit', function(e:Event){
  e.preventDefault();
  var acumErrores = 0;

  const allDiameter = document.querySelectorAll<HTMLElement>(".diameter");
  const allerrDiam = document.querySelectorAll<HTMLElement>(".errorDiam");
  //const allBrands = document.querySelectorAll<HTMLElement>(".brandWheel");
  //const allerrBrand = document.querySelectorAll<HTMLElement>("errorBrand");
  let long = allDiameter.length;
  //let long2 = allBrands.length;
  

  for(let i =0; i<long; i++){
    let diameter = allDiameter[i] as HTMLInputElement;
    let errDiam = allerrDiam[i] as HTMLDivElement;

    if(isNaN(diameter.valueAsNumber)){
      diameter.classList.add("is-invalid");
      errDiam.textContent = "Empty Field";
    }else if(!validacion(diameter.value)){
      diameter.classList.add("is-invalid");
      errDiam.textContent = "Diametro incorrecto";
    }

  }//end diameter
/*
  for(let i =0; i<long; i++){
    let brandWheel = allBrands[i] as HTMLInputElement;
    let errBrand = allerrBrand[i] as HTMLDivElement;

    if(brandWheel.value == ''){
      brandWheel.classList.add("is-invalid");
      errBrand.textContent = "Empty Field";
    }

  }//end brand

*/
/*
  if(acumErrores>0){
    return false;
  }else{
    return true;
  }



});

formWheels.addEventListener('blur', (event:Event) => {
  const trget = event.target as HTMLInputElement
  if(trget.value != '') trget.classList.remove('is-invalid');

}, true);




//debe ser string para que lo pueda comprarar
  function validacion(diam:string){
    var regex = /^[0-2]((\.|\,)[4-9])?$/gm;
    return regex.test(diam) ? true:false;
  }

*/



