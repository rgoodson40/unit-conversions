var testvar = "my var test";
const celsiusglobal = document.getElementById("celsius");
let testvarlet = "my test var let";
testvarnothing = "my test var nothing";

function temperature() {
  //Create references to elements
  var celsius = document.getElementById("celsius");
  var fahrenheit = document.getElementById("fahrenheit");

  let text = "updated";
  var testlocal = "test local";

  //Check if celsius field is empty
  if (celsius.value == "") {
    alert("Please enter the temperature in Celsius");
    celsius.focus();
    return false;
  }

  console.log(celsius.value);
  //Convert celsius to fahrenheit
  fahrenheit.value = celsius.value * (9 / 5) + 32;

  return true;
}

function weight() {
  //To convert KGs to Pounds
  // KG * 2.2
  var kg = document.getElementById("kilo").value;
  var p = kg * 2.2;
  document.getElementById("pounds").value = p;
}

function distance() {
  //To convert KMs to Miles
  // KM * 0.62137
  var km = document.getElementById("km").value;
  var m = km * 0.62137;
  document.getElementById("miles").value = m;
}
