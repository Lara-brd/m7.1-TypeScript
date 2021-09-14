let rocket:Rocket;
let arrRockets:Rocket[]=[];
let speed:number;


//getting DOM

const btnRocket1 = document.getElementById('btnRocket1') as HTMLButtonElement,
      btnRocket2 = document.getElementById('btnRocket2') as HTMLButtonElement,
      btnAccelerate1 = document.getElementById('btnAccelerate1') as HTMLButtonElement,
      btnAccelerate2 = document.getElementById('btnAccelerate2') as HTMLButtonElement,
      btnBreak1 = document.getElementById('btnBreak1') as HTMLButtonElement,
      btnBreak2 = document.getElementById('btnBreak2') as HTMLButtonElement,
      printRocket1 = document.getElementById('printRocket1') as HTMLButtonElement,
      printRocket2 = document.getElementById('printRocket2') as HTMLButtonElement,
      dispInfo = document.getElementById('disp-info') as HTMLDivElement,
      panel1 = document.getElementById('panel1') as HTMLDivElement,
      panel2 = document.getElementById('panel2') as HTMLDivElement;



      




//////////////////////
//EVENTS

//create rocket 1
let pressbtn1 = false;
btnRocket1.addEventListener('click', function(event){
  if(!pressbtn1){
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
btnRocket2.addEventListener('click', function(){
  if(!pressbtn2){
    createRocket('LDSFJA32', 6);
    rocket.thrusters.push(30, 40, 50,50,30,10);
    console.log(rocket.maxPower());
    arrRockets.push(rocket);
    pressbtn2 = true;
  }

  
});

//accelerate r1
btnAccelerate1.addEventListener('click', function(){
  const rocket1 = arrRockets[0];
  console.log('***rocket1 accelerate***');
  console.log(rocket1.accelerate()); 
  uiSpeed(panel1, rocket1.currentPower)


});

//accelerate r2
btnAccelerate2.addEventListener('click', function(){
  const rocket2 = arrRockets[1];
  console.log('***rocket2 accelerate***');
  console.log(rocket2.accelerate());
  uiSpeed(panel2, rocket2.currentPower)

});

btnBreak1.addEventListener('click', function(){
  const rocket1 = arrRockets[0];
  console.log('***rocket1 break***');
  console.log(rocket1.break());
  uiSpeed(panel1, rocket1.currentPower)
});

btnBreak2.addEventListener('click', function(){
  const rocket2 = arrRockets[1];
  console.log('***rocket2 break***');
  console.log(rocket2.break());
  uiSpeed(panel2, rocket2.currentPower)
});

let pressbtn3 = false;
printRocket1.addEventListener('click', function(){
  if(!pressbtn3){
    const rocket1 = arrRockets[0];
    const div = document.createElement('div');
    div.innerHTML = rocket1.toString();
    dispInfo.appendChild(div);
    pressbtn3 = true;
  }


});

let pressbtn4 = false;
printRocket2.addEventListener('click', function(){
  if(!pressbtn4){
    const rocket2 = arrRockets[1];
    const div = document.createElement('div');
    div.innerHTML = rocket2.toString();
    dispInfo.appendChild(div);
    pressbtn4 = true;
  }
});

//game.html



//////////////////////////////////
//FUNCTIONS 


//Create Rocket
function createRocket(code:string, thrustersNum:number){
  rocket = new Rocket(code, thrustersNum);
  console.log(rocket);
}

//panel aceleracion

function uiSpeed(panel:HTMLDivElement, currentPower:number){
panel.textContent = 'power '+ currentPower;
}


//game html functions
function ignition(){

}



