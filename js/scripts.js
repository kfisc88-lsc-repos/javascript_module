"use strict";

/*
Author: Kelley Fischer
File: scripts.js


*/


function processOrder() {
  var cost = 0.00;
  var ordered = ["burger", "dblburger", "chicken", "vegburger", "fish"]
  var i;

  for (i = 0; i < ordered.length; i++) {
      if (document.getElementById(ordered[i]).checked == true) {
          cost += parseFloat(document.getElementById(ordered[i]).value);
      }
  }
  console.log(cost);
  document.getElementById("total").innerHTML = "Your total is: $" + cost;
}


if (document.getElementById())
