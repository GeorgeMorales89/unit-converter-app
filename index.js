// Conversion rates 
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;


// Selecting elements from the HTML document
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const modeToggleBtn = document.getElementById("mode-toggle");
const bodyEl = document.body;
const containerEl = document.querySelector(".main");
const sections = document.querySelectorAll(".section");
const lengthEl1 = document.getElementById("length-el");
const volumeEl1 = document.getElementById("volume-el");
const massEl1 = document.getElementById("mass-el");
const h3Elements = document.querySelectorAll("h3");


// Adding an event listener to the convert button
convertBtn.addEventListener("click", () => {
  const baseValue = Number(inputEl.value);


  // Calculating length conversion
  const lengthFeet = baseValue * meterToFeet;
  const lengthMeter = baseValue / meterToFeet;
  const volumeLiter = baseValue * literToGallon;
  const volumeGallon = baseValue / literToGallon;
  const massKilograms = baseValue * kilogramToPound;
  const massPound = baseValue / kilogramToPound;


  // Displaying length conversion results 
  lengthEl.textContent = `${baseValue} meter = ${lengthFeet.toFixed(3)} feet | ${baseValue} feet = ${lengthMeter.toFixed(3)} meters`;
  volumeEl.textContent = `${baseValue} liters = ${volumeLiter.toFixed(3)} gallons | ${baseValue} gallons = ${volumeGallon.toFixed(3)} liters`;
  massEl.textContent = `${baseValue} kilos = ${massKilograms.toFixed(3)} pounds | ${baseValue} pounds = ${massPound.toFixed(3)} kilos`;
});


// Tracking the current mode (true for dark mode, false for light mode)
let isDarkMode = false;


// Function to toggle between dark mode and light mode
function toggleMode() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    bodyEl.style.backgroundColor = "#1C1D21";
    containerEl.style.backgroundColor = "#1F2937";
    lengthEl1.style.backgroundColor = "#273549";
    volumeEl1.style.backgroundColor = "#273549";
    massEl1.style.backgroundColor = "#273549";
    sections.forEach((section) => {
        section.style.backgroundColor = "#273549";
        section.style.color = "#FFF";
    });
    h3Elements.forEach((h3) => {
        h3.style.color = "#CCC1FF";
    });
    lengthEl1.style.color = "#FFF";
    volumeEl1.style.color = "#FFF";
    massEl1.style.color = "#FFF";
    
  } else {
    bodyEl.style.backgroundColor = "#C9E3E4";
    containerEl.style.backgroundColor = "";
    lengthEl1.style.backgroundColor = "";
    volumeEl1.style.backgroundColor = "";
    massEl1.style.backgroundColor = "";
    sections.forEach((section) => {
        section.style.backgroundColor = "";
        section.style.color = "";
    });
    h3Elements.forEach((h3) => {
        h3.style.color = "";
    });
    lengthEl1.style.color = "";
    volumeEl1.style.color = "";
    massEl1.style.color = "";
  }
}


// Mode toggle event listener
modeToggleBtn.addEventListener("click", toggleMode);


// Adding an input event listener for input validation
inputEl.addEventListener("input", () => {
  // Remove any non-digit characters from the input value
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

