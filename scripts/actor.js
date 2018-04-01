var moneyhour = 26;
var money;
var moneymade = document.getElementById("money");
function job(){
  setTimeout(addone, 120000);
  setTimeout(addtwo, 240000);
  setTimeout(addthree, 360000);
  setTimeout(addfour, 480000);
  setTimeout(addfive, 600000);
}
function addone(){
  moneymade.innerHTML = "Money Made: $" + moneyhour;
}
function addtwo(){
  moneymade.innerHTML = "Money Made: $" + moneyhour + moneyhour;
}
function addthree(){
  moneymade.innerHTML = "Money Made: $" + moneyhour + moneyhour + moneyhour;
}
function addfour(){
  moneymade.innerHTML = "Money Made: $" + moneyhour + moneyhour + moneyhour + moneyhour;
}
function addfive(){
  moneymade.innerHTML = "Money Made: $" + moneyhour + moneyhour + moneyhour + moneyhour + moneyhour;
}
