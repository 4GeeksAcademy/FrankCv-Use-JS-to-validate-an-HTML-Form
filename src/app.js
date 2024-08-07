/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let allCHilds2 = document.querySelectorAll(".form-control");
window.onload = function() {};

let submitButton = document.getElementById("sendButton");
let cancelButton = document.getElementById("cancelButton");
let alertBox = document.getElementById("alertBox");
//Listener for submit button
submitButton.addEventListener("click", () => {
  //this counter will let us to know how many elements hasn't any value
  let count = 0;
  for (let i = 0; i < allCHilds2.length; i++) {
    //conditional if element SELECT is with its default value
    if (
      allCHilds2[i].tagName === "SELECT" &&
      allCHilds2[i].value === "Pick a state"
    ) {
      //Empties fields will be with background red
      allCHilds2[i].style.backgroundColor = "red";
      count++;
    } else if (allCHilds2[i].value === "") {
      //The rest of elements if are empty background's will be red
      allCHilds2[i].style.backgroundColor = "red";
      count++;
    } else {
      // If you click again submitButton and it had red background but now with value different from zero
      allCHilds2[i].style.backgroundColor = "white";
    }
  }
  count !== 0
    ? (alertBox.style.display = "block")
    : (alertBox.style.display = "none");
  console.log(allCHilds2);
});

cancelButton.addEventListener("click", () => {
  location.reload();
});
