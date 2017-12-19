// SETTINGS ACCORDEON

var settings = document.getElementsByClassName("settings");
var settingBtn = document.getElementsByName("settingBtn");
var content = document.getElementsByTagName("section");
var teller = 0;

 while (teller < settingBtn.length) {
   settingBtn[teller].onclick = function() {
     for (teller = 0; teller < settingBtn.length; teller++) {
       settingBtn[teller].className = "deselected";
       this.className = "selected";
       if (settingBtn[teller].className === "deselected") {
         content[teller].className = "setting-closed";
       } else {
         content[teller].className = "setting-open";
         settingBtn[teller].className = "selected";
       }
     }
   }
   teller++;
 }

//TICKET PRIJS TELLER
var ticketTeller = 1;
var prijsTeller = ticketTeller * 3;
var plus = document.getElementById("plus");
var min = document.getElementById("min");
var aantal = document.getElementById("aantal");
var prijs = document.getElementById("prijs");

plus.onclick = function() {
  ticketTeller++;
  aantal.innerHTML= ticketTeller;
  prijsTeller = ticketTeller * 3;
  prijs.innerHTML= "€ " + prijsTeller + ",00";
}

min.onclick = function() {
  ticketTeller = ticketTeller-1;
  aantal.innerHTML= ticketTeller;
  prijsTeller = prijsTeller-3;
  prijs.innerHTML= "€ " + prijsTeller + ",00";

  if (ticketTeller < 1){
    ticketTeller = 0;
    aantal.innerHTML= "0";
    prijsTeller = 0;
    prijs.innerHTML= "€ 0,00";
  }
}
