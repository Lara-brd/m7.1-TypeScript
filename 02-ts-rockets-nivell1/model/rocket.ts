
class Rocket {

  code:string;
  thrusterNum:number;
  thrusters:number [] = new Array();
  currentPower:number = 0;

  constructor(code:string, thrusterNum:number){
    this.code = code;
    this.thrusterNum = thrusterNum;
  }

  //METHODS

  maxPower(){
    let suma = 0;
    for(var i =0; i<this.thrusters.length; i++){
      suma+= this.thrusters[i];
    }
    return suma;
  }

  accelerate(){

    if(this.currentPower ==0){
      for(let i = 0; i<3; i++){
        this.currentPower +=10;
      }//+3
    }else if(this.currentPower <= 50){
      for(let i= 0; i<2; i++){
        this.currentPower += 10;
      }//+2
    }else if(this.currentPower >= 70 && this.currentPower < this.maxPower()){
      this.currentPower += 10;
      //+1
    }
  return this.currentPower;
  }


    
  break(){
    if(this.currentPower > 70){
      this.currentPower -= 10;
    }else if(this.currentPower <= 70 && this.currentPower >30){
      for(let i = 2; i>0; i--){
        this.currentPower -= 10;
      }
    }else if(this.currentPower <= 30 && this.currentPower >0){
      for(let i = 3; i>0; i--){
        this.currentPower -= 10;
      };
    }
    return this.currentPower;
  }

  toString(){
    return '<p>Rocket <strong>'+this.code+': </strong> Bootsters max power: '+this.thrusters.toString()+'</p>';
  }


}//class rocket
