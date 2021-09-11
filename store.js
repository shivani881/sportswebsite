let loc1 = document.getElementById('1');
// console.log(loc1);
loc1.addEventListener("click" , goToLocation);
function goToLocation(){
  let firstaddress = document.getElementById("location1");
  if(firstaddress.style.display!="none"){
  firstaddress.style.display = "none";
  }
  else{
  firstaddress.style.display = "block";
}
}
let loc2 = document.getElementById('2');
// console.log(loc1);
loc2.addEventListener("click" , goToLocation2);
function goToLocation2(){
  let secondaddress = document.getElementById("location2");
  if(secondaddress.style.display!="none"){
  secondaddress.style.display = "none";
  }
  else{
  secondaddress.style.display = "block";
}
}
let loc3 = document.getElementById('3');
// console.log(loc1);
loc3.addEventListener("click" , goToLocation3);
function goToLocation3(){
  let thirdaddress = document.getElementById("location3");
  if(thirdaddress.style.display!="none"){
  thirdaddress.style.display = "none";
  }
  else{
  thirdaddress.style.display = "block";
}
}

