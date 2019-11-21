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


function getCustInfo() {
        document.getElementById("deliveryAddr").style.display = "block";
}


function hideCustInfo() {
        document.getElementById("deliveryAddr").style.display = "none";
}

function showOrderTable() {
        document.getElementById("order_table").style.display = "block";
}

function generateRows() {
    var num_rows = document.getElementById("add_rows").value;
    var table_rows = "";
    var i = 0;

    while( i < num_rows ) {
        table_rows = table_rows +
        "<tr>" +
            "<td>" + (i+1) + "</td>" +
            "<td><select name='item[]'>" +
                    "<option value='0'></option>" +
                    "<option value='8.99'>Classic Rock Burger $8.99</option>" +
                    "<option value='11.99'>Double Rock Burger $11.99</option>" +
                    "<option value='10.99'>Fried Chicken Sandwich $10.99</option>" +
                    "<option value='8.99'>Portobella Burger $8.99</option>" +
                    "<option value='11.99'>Smoked Fish Sandwich $11.99</option>" +
                "</select></td>" +
            "<td><input type='text' name='name[]' /></td>" +
        "</tr>";
        i = i+1;
    }

    document.getElementById("tablebody").innerHTML = table_rows;
}
