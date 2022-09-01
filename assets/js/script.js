// Global HTML Elements
const headerHTML = document.getElementById('header');
const footerHTML = document.getElementById('footer');
const pageContainer = document.getElementById("page-container");
const resultContainerHTML = document.getElementById("result-container");
const resultsListHTML = document.getElementById("results-list");
const btnClose = document.getElementById('btn-close');
const btnLoad = document.getElementById('btn-load');
const btnStart = document.getElementById('btn-start');
const resultMidPre = document.getElementById('result-mid-pre');
const template1ContainerHTML = document.getElementById('template1-container');
const template2ContainerHTML = document.getElementById('template2-container');
const template3ContainerHTML = document.getElementById('template3-container');
const bgTemplate0ContainerHTML = document.getElementById('bg-custom-0-constainer');
const bgTemplate1ContainerHTML = document.getElementById('bg-custom-1-constainer');
const bgTemplate2ContainerHTML = document.getElementById('bg-custom-2-constainer');
const bgTemplate3ContainerHTML = document.getElementById('bg-custom-3-constainer');
const bgTemplate4ContainerHTML = document.getElementById('bg-custom-4-constainer');
const countdownHTML = document.getElementById('countdown-generator');
const resultTop = document.getElementById('result-top');
const criteriaGenerator = document.getElementById('criteria-generator');
const resultBottom = document.getElementById('result-bottom');

// Global Variables
let bgSelectedGlobal = Number;
let finalColor = String;
let randomColor = String;
let globalReset = true;
let results = [];
let allOptions = [];

window.addEventListener('DOMContentLoaded', function() {
  btnLoad.addEventListener("click", function() {
    loadGenerator();
  });
  btnStart.addEventListener("click", function() {
    startGenerator();
  });
  btnClose.addEventListener("click", function() {
    exitGenerator();
  });
});

/**
 * When user chooses one of the pre-set templates this will set those values ready for when user loads generator.
 */
function templateSelected(i) {
  switch (i) {
    case 1:
      template1ContainerHTML.style.border = "3px solid green";
      template2ContainerHTML.style.border = "3px solid transparent";
      template3ContainerHTML.style.border = "3px solid transparent";
      document.getElementById('bg-custom-0').value = "#0D050E";
      document.getElementById('title-color').value = "#FAFAFA";
      document.getElementById('body-text-color').value = "#FAFAFA";
      document.getElementById('tail-color').value = "#FAFAFA";
      document.getElementById('countdown-color').value = "#FAFAFA";
      document.getElementById('result-random-color').value = "#FF0000";
      document.getElementById('result-final-color').value = "#FFFF00";
      break;
    case 2:
      template1ContainerHTML.style.border = "3px solid transparent";
      template2ContainerHTML.style.border = "3px solid green";
      template3ContainerHTML.style.border = "3px solid transparent";
      document.getElementById('bg-custom-0').value = "#6441a5";
      document.getElementById('title-color').value = "#FAFAFA";
      document.getElementById('body-text-color').value = "#FAFAFA";
      document.getElementById('tail-color').value = "#FAFAFA";
      document.getElementById('countdown-color').value = "#FAFAFA";
      document.getElementById('result-random-color').value = "#18181B";
      document.getElementById('result-final-color').value = "#FAFAFA";
      break;
    case 3:
      template1ContainerHTML.style.border = "3px solid transparent";
      template2ContainerHTML.style.border = "3px solid transparent";
      template3ContainerHTML.style.border = "3px solid green";
      document.getElementById('bg-custom-0').value = "#00FF00";
      document.getElementById('title-color').value = "#000000";
      document.getElementById('body-text-color').value = "#000000";
      document.getElementById('tail-color').value = "#000000";
      document.getElementById('countdown-color').value = "#000000";
      document.getElementById('result-random-color').value = "#FF0000";
      document.getElementById('result-final-color').value = "#9600FC";
      break;
  }
}

/**
 * When user chooses one of the pre-set background templates this will set those values ready for when user loads generator.
 */
function bgTemplateSelected(i) {
  switch (i) {
    case 0:
      bgTemplate0ContainerHTML.style.border = "3px solid green";
      bgTemplate1ContainerHTML.style.border = "3px solid transparent";
      bgTemplate2ContainerHTML.style.border = "3px solid transparent";
      bgTemplate3ContainerHTML.style.border = "3px solid transparent";
      bgTemplate4ContainerHTML.style.border = "3px solid transparent";
      bgSelectedGlobal = 0;
      break;
    case 1:
      bgTemplate0ContainerHTML.style.border = "3px solid transparent";
      bgTemplate1ContainerHTML.style.border = "3px solid green";
      bgTemplate2ContainerHTML.style.border = "3px solid transparent";
      bgTemplate3ContainerHTML.style.border = "3px solid transparent";
      bgTemplate4ContainerHTML.style.border = "3px solid transparent";
      bgSelectedGlobal = 1;
      break;
    case 2:
      bgTemplate0ContainerHTML.style.border = "3px solid transparent";
      bgTemplate1ContainerHTML.style.border = "3px solid transparent";
      bgTemplate2ContainerHTML.style.border = "3px solid green";
      bgTemplate3ContainerHTML.style.border = "3px solid transparent";
      bgTemplate4ContainerHTML.style.border = "3px solid transparent";
      bgSelectedGlobal = 2;
      break;
    case 3:
      bgTemplate0ContainerHTML.style.border = "3px solid transparent";
      bgTemplate1ContainerHTML.style.border = "3px solid transparent";
      bgTemplate2ContainerHTML.style.border = "3px solid transparent";
      bgTemplate3ContainerHTML.style.border = "3px solid green";
      bgTemplate4ContainerHTML.style.border = "3px solid transparent";
      bgSelectedGlobal = 3;
      break;
    case 4:
      bgTemplate0ContainerHTML.style.border = "3px solid transparent";
      bgTemplate1ContainerHTML.style.border = "3px solid transparent";
      bgTemplate2ContainerHTML.style.border = "3px solid transparent";
      bgTemplate3ContainerHTML.style.border = "3px solid transparent";
      bgTemplate4ContainerHTML.style.border = "3px solid green";
      bgSelectedGlobal = 4;
      break;
  }
}

/**
 * When user clicks 'Load the generator', this function sets up the webpage and set some variables.
 */
function loadGenerator() {
  if (formValidation()) {
    globalReset = false;
    headerHTML.style.display = "none";
    footerHTML.style.display = "none";
    countdownHTML.style.display = "none";
    resultsListHTML.style.display = "none";
    resultMidPre.style.display = "block";
    pageContainer.style.display = "none";
    btnLoad.style.display = "none";
    resultContainerHTML.style.display = "grid";
    setGenBackground()
    let mainColor = document.getElementById('body-text-color').value;
    document.getElementById('gen-title-span').style.color = document.getElementById('title-color').value;
    document.getElementById('gen-criteria-span').style.color = mainColor;
    document.getElementById('btn-start').style.color = mainColor;
    document.getElementById('btn-start').style.borderColor = mainColor;
    document.getElementById('gen-tail-span').style.color = document.getElementById('tail-color').value;
    document.getElementById('countdown-generator').style.color = document.getElementById('countdown-color').value;
    randomColor = document.getElementById('result-random-color').value;
    finalColor = document.getElementById('result-final-color').value;
    resultContainerHTML.style.position = "absolute";
    resultContainerHTML.style.top = "0px";
    resultContainerHTML.style.right = "0px";
    resultContainerHTML.style.bottom = "0px";
    resultContainerHTML.style.left = "0px";
    let fullScreen = document.getElementById("full-screen");
    if (fullScreen.checked) {
      // Credit for fullscreen code: https://www.w3schools.com/howto/howto_js_fullscreen.asp
      if (resultContainerHTML.requestFullscreen) {
        resultContainerHTML.requestFullscreen();
      }
    }
    resultTop.style.display = "block";
    criteriaGenerator.style.display = "flex";
    resultBottom.style.display = "block";
    btnStart.style.display = "block";
    btnClose.style.display = "block";
    let userGenTitle = document.getElementById('gen-title-user').value;
    let spanGenTitle = document.getElementById('gen-title-span');
    spanGenTitle.innerText = userGenTitle;
    let userGenCriteria = document.getElementById('criteria-user').value;
    let spanGenCriteria = document.getElementById('gen-criteria-span');
    spanGenCriteria.innerText = userGenCriteria;
    let userGenTail = document.getElementById('gen-tail-user').value;
    let spanGenTail = document.getElementById('gen-tail-span');
    spanGenTail.innerText = userGenTail;
  }
  scrollToTop();
}

/**
 * Form Validation
 */
function formValidation() {
  let validation = true;
  let options = sortOptions();
  allOptions = options;
  let optionsHTML = document.getElementById("options");
  let numberOfResults = document.getElementById("number-of-results");
  let timeUntilResult = document.getElementById("time-until-result");
  let timeUntilShow = document.getElementById("time-until-show");
  const optionsErrorMsg1 = document.getElementById("options-message-1");
  const numberOfResultsMsg1 = document.getElementById("number-of-results-message-1");
  const numberOfResultsMsg2 = document.getElementById("number-of-results-message-2");
  const timeUntilResultMsg1 = document.getElementById("time-until-result-message-1");
  const timeUntilResultMsg2 = document.getElementById("time-until-result-message-2");
  const timeUntilShowMsg1 = document.getElementById("time-until-show-message-1");
  const timeUntilShowMsg2 = document.getElementById("time-until-show-message-2");

  // Checking to make sure none of the vital inputs have been left blank, if so, display error message.
  if (options.length < 2) {
    if (!(optionsHTML.classList.contains("error"))) {
      optionsHTML.classList.add("error");
    }
    optionsErrorMsg1.style.display = "block";
    validation = false;
  }
  else {
    if (optionsHTML.classList.contains("error")) {
      optionsHTML.classList.remove("error");
    }
    optionsErrorMsg1.style.display = "none";
  }
  // Checking to make sure no vital input has been left blank, if so, display error message.
  if (!(numberOfResults.value)) {
    if (!(numberOfResults.classList.contains("error"))) {
      numberOfResults.classList.add("error");
    }
    numberOfResultsMsg1.style.display = "block";
    numberOfResultsMsg2.style.display = "none";
    validation = false;
    // Checking input value within the min and max range, if so, display error message.
  }
  else if ((parseInt(numberOfResults.value) < 1) || (parseInt(numberOfResults.value) > 20)) {
    if (!(numberOfResults.classList.contains("error"))) {
      numberOfResults.classList.add("error");
    }
    numberOfResultsMsg1.style.display = "none";
    numberOfResultsMsg2.style.display = "block";
    validation = false;
    // If no errors and there were errors previously stop displaying errors messages.
  }
  else {
    if (numberOfResults.classList.contains("error")) {
      numberOfResults.classList.remove("error");
    }
    numberOfResultsMsg1.style.display = "none";
    numberOfResultsMsg2.style.display = "none";
  }
  // Checking to make sure no vital input has been left blank, if so, display error message.
  if (!(timeUntilResult.value)) {
    if (!(timeUntilResult.classList.contains("error"))) {
      timeUntilResult.classList.add("error");
    }
    timeUntilResultMsg1.style.display = "block";
    timeUntilResultMsg2.style.display = "none";
    validation = false;
    // Checking input value within the min and max range, if so, display error message.
  }
  else if ((parseInt(timeUntilResult.value) < 0) || (parseInt(timeUntilResult.value) > 600)) {
    if (!(timeUntilResult.classList.contains("error"))) {
      timeUntilResult.classList.add("error");
    }
    timeUntilResultMsg1.style.display = "none";
    timeUntilResultMsg2.style.display = "block";
    validation = false;
    // If no errors and there were errors previously stop displaying errors messages.
  }
  else {
    if (timeUntilResult.classList.contains("error")) {
      timeUntilResult.classList.remove("error");
    }
    timeUntilResultMsg1.style.display = "none";
    timeUntilResultMsg2.style.display = "none";
  }
  // Checking to make sure no vital input has been left blank, if so, display error message.
  if (!(timeUntilShow.value)) {
    if (!(timeUntilShow.classList.contains("error"))) {
      timeUntilShow.classList.add("error");
    }
    timeUntilShowMsg1.style.display = "block";
    timeUntilShowMsg2.style.display = "none";
    validation = false;
    // Checking input value within the min and max range, if so, display error message.
  }
  else if ((parseInt(timeUntilShow.value) < 0) || (parseInt(timeUntilShow.value) > 20)) {
    if (!(timeUntilShow.classList.contains("error"))) {
      timeUntilShow.classList.add("error");
    }
    timeUntilShowMsg1.style.display = "none";
    timeUntilShowMsg2.style.display = "block";
    validation = false;
  }
  else {
    if (timeUntilShow.classList.contains("error")) {
      timeUntilShow.classList.remove("error");
    }
    timeUntilShowMsg1.style.display = "none";
    timeUntilShowMsg2.style.display = "none";
  }
  return validation;
}

/**
 * Sets the Generators background based on the user's selection in the form
 */
function setGenBackground() {
  switch (bgSelectedGlobal) {
    case 0:
      resultContainerHTML.style.backgroundColor = document.getElementById('bg-custom-0').value;
      break;
    case 1:
      resultContainerHTML.classList.add("bg-custom-1");
      break;
    case 2:
      resultContainerHTML.classList.add("bg-custom-2");
      break;
    case 3:
      resultContainerHTML.classList.add("bg-custom-3");
      break;
    case 4:
      resultContainerHTML.classList.add("bg-custom-4");
      break;
    default:
      resultContainerHTML.style.backgroundColor = document.getElementById('bg-custom-0').value;
      break;
  }
}

/**
 * When user clicks 'Start' on generator, this functions starts everything.
 */
function startGenerator() {
  resultMidPre.style.display = "none";
  countdown(false);
}

/**
 * Creates a countdown before results are shown.
 */
function countdown(countdownReset) {
  countdownHTML.style.display = "block";
  // Original code from: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown and then modified by me
  let timeleft = 4;
  let countdownTimer;
  if (countdownReset) {
    timeleft = 0;
    clearInterval(countdownTimer);
    countdownHTML.innerHTML = "";
  }
  else {
    countdownTimer = setInterval(function() {
      if (timeleft <= 0) {
        clearInterval(countdownTimer);
        countdownHTML.innerHTML = "";
        countdownHTML.style.display = "none";
        resultsListHTML.style.display = "flex";
        createRandomResults();
      } else if (globalReset) {
        clearInterval(countdownTimer);
        countdownHTML.innerHTML = "";
      } else {
        countdownHTML.innerHTML = timeleft + "";
      }
      timeleft -= 1;
    }, 1000);
  }
}

/**
 * Take random results in table and put them into a results table.
 */
function createRandomResults() {
  let options = sortOptions();
  let timeUntilResult = document.getElementById("time-until-result").value;
  let loopAmount = document.getElementById("number-of-results").value;
  let multipleWinsHTML = document.getElementById("multiple-wins");
  for (let i = 0; i < loopAmount; i++) {
    let result = Math.floor(Math.random() * options.length);
    results.push(options[result].trim());
    if (!multipleWinsHTML.checked) {
      options.splice(result, 1);
    }
  }
  show1By1(results, timeUntilResult);
}

/**
 * Takes user's input values and sorts them into an array, then returns that to calling function.
 */
function sortOptions() {
  let sortOptions = document.getElementById("options").value.split(',');
  return sortOptions;
}

/**
 * Creates DIVs from results table and adds CSS styling to reveal results 1 by 1.
 */
function show1By1(results, timeUntilResult) {
  let timeUntilShow = document.getElementById("time-until-show").value;
  for (let result of results) {
    let newDiv = document.createElement('div');
    newDiv.className = "box";
    newDiv.appendChild(document.createTextNode(result));
    resultsListHTML.appendChild(newDiv);
  }
  setTimeout(function() {
    let elements = document.querySelectorAll("span#results-list > div");
    let delay = 0;
    let i = 1; // Setting let for counter in loop
    let y = 78; //Container % size of screen
    let x = 19; //Default font size
    let z = x * (y / 100); // Initial font size for 1 row.
    let w = parseInt(y / z); // Amount of rows of text will fit before font size needs to be smaller
    let v = z; // Final font size
    if (elements.length > w) {
      v = z * (w / elements.length); // Final font size
    }
    for (let element of elements) {
      element.style.transitionDuration = `${timeUntilShow}s`;
      element.style.height = `${100/elements.length}%`;
      element.style.fontSize = `${v}vh`;
      element.style.lineHeight = `90%`;
      delay = i * timeUntilResult;
      element.classList.toggle("show");
      resultRandomAnimFunc(i, element, delay, delay, false, element.innerHTML, 0, 0, -2);
      i++;
    }
  }, 1);
}

/**
 * Cycles very quickly randomly through all options until showing final result after defined time has passed
 */
function resultRandomAnimFunc(i, element, delay, y2, bool, result, y, x, z2) {
  x = x;
  result = result;
  y = y;
  let z3 = parseInt(z2);
  if (!(globalReset)) {
    setTimeout(function() {
      if (x * 1000 < delay) {
        if (!(bool)) {
          delay = 1;
        }
        x = x + 1000;
        resultRandomAnimFunc(i, element, delay, y2, true, result, y, x, z3);
      }
      else {
        setTimeout(function() {
          y++;
          if (y <= (y2 * 18)) {
            element.style.color = randomColor;
            let z1 = Math.floor(Math.random() * allOptions.length);
            let SafetyCount = 0;
            while (!(SafetyCount >= 10)) {
              if (!(z1 == z3)) {
                break;
              }
              z1 = Math.floor(Math.random() * allOptions.length);
              SafetyCount++;
            }
            element.innerHTML = allOptions[z1];
            resultRandomAnimFunc(i, element, delay, y2, true, result, y, x, z1);
          }
          else {
            element.innerHTML = result;
            element.style.color = finalColor;
          }
        }, 50);
      }
    }, delay);
  }
}

/**
 * Close generator and reset values.
 */
function exitGenerator() {
  globalReset = true;
  results.length = 0;
  countdown(true);
  resultsListHTML.innerHTML = "";
  if (document.fullscreenElement != null) {
    document.exitFullscreen();
  }
  resultContainerHTML.removeAttribute('class');
  resultContainerHTML.removeAttribute('style');
  resultContainerHTML.style.display = "none";
  resultContainerHTML.style.position = "initial";
  btnClose.style.display = "none";
  btnStart.style.display = "none";
  resultTop.style.display = "none";
  resultBottom.style.display = "none";
  criteriaGenerator.style.display = "none";
  btnLoad.style.display = "block";
  pageContainer.style.display = "block";
  headerHTML.style.display = "block";
  footerHTML.style.display = "block";
}

/**
 * Scrolls webpage to top
 */
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}