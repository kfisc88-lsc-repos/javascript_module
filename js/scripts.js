"use strict";

/*
Author: Kelley Fischer
File: scripts.js


*/


/* Calculates the total cost for selected items on the menu */
function processOrder() {
    /* Initialize variables for list of IDs, cost, and i*/
    var cost = 0.00;
    var ordered = ["burger", "dblburger", "chicken", "vegburger", "fish"]
    var i;

    /* Iterates through each item of ordered, adding checked items to cost */
    for (i = 0; i < ordered.length; i++) {
        if (document.getElementById(ordered[i]).checked == true) {
            cost += parseFloat(document.getElementById(ordered[i]).value);
        }
    }
    /* Returns the total cost */
    document.getElementById("total").innerHTML = "Your total is: $" + cost;
}

/* Displays the Delivery Address form if delivery is selected */
function getCustInfo() {
        document.getElementById("deliveryAddr").style.display = "block";
}

/* Hides the Delivery Address form if carryout or nothing is selected */
function hideCustInfo() {
        document.getElementById("deliveryAddr").style.display = "none";
}

/* Displays the Order Table when rows are added to it */
function showOrderTable() {
        document.getElementById("order_table").style.display = "block";
}

/* Adds table rows with drop-down menus */
function generateRows() {
    /* Gets number of rows to create */
    var num_rows = document.getElementById("add_rows").value;
    var table_rows = "";
    var i = 0;

    /* Numbers each table row, adds drop down for menu, and field for name */
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

    /* Returns the table rows to the document */
    document.getElementById("tablebody").innerHTML = table_rows;
}
