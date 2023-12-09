/**
 * 
 * 
 */
"use strict"

var displayVal = ''

function calculator(num)
{
    var display = document.querySelector('#display').value;
    displayVal = displayVal + num;
    display = displayVal;
    return display;
}