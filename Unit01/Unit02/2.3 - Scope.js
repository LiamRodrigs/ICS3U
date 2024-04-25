/*
Unit 2 Lesson 3: Basic understanding of scope

Author's Name: Liam Rodrigs
*/

console.log(hotWater());

function hotWater() {
  let waterTemp = "cold";
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch();
    
  }
  return waterTemp;
}

function waterBoilerSwitch(){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return true;
  } else {
    waterTemp = "cold";
    return false;
  }
}