const resultContainerHTML = document.getElementById("result-container");
const resultsListHTML = document.getElementById("results-list");
const btnClose = document.getElementById('btn-close');
const btnLoad = document.getElementById('btn-load');
const btnStart = document.getElementById('btn-start');
const templateHTML = document.getElementsByClassName('template');
const template1ContainerHTML = document.getElementById('template1-container');
const template2ContainerHTML = document.getElementById('template2-container');
const template3ContainerHTML = document.getElementById('template3-container');
const results = [];
const resultTop = document.getElementById('result-top');
const criteriaGenerator = document.getElementById('criteria-generator');
const resultBottom = document.getElementById('result-bottom');
var countdownTimer;
const resultRandomAnim = [];
let globalReset = true;
let finalColor;
let randomColor;
let z = 0;

window.addEventListener('DOMContentLoaded', function() {
  btnLoad.addEventListener("click", function () {
    loadGenerator();
  });
  btnStart.addEventListener("click", function () {
    startGenerator();
  });
  btnClose.addEventListener("click", function () {
    exitGenerator();
  });
})

/**
 * When user chooses one of the preset templates this will set those values ready for when user loads generator.
*/
function templateSelected(i){
  switch (i) {
    case 1:
      template1ContainerHTML.style.border = "3px solid green";
      template2ContainerHTML.style.border = "3px solid transparent";
      template3ContainerHTML.style.border = "3px solid transparent";
      document.getElementById('background-color').value = "#0D050E";
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
      document.getElementById('background-color').value = "#6441a5";
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
      document.getElementById('background-color').value = "#00FF00";
      document.getElementById('title-color').value = "#FAFAFA";
      document.getElementById('body-text-color').value = "#FAFAFA";
      document.getElementById('tail-color').value = "#FAFAFA";
      document.getElementById('countdown-color').value = "#FAFAFA";
      document.getElementById('result-random-color').value = "#FF0000";
      document.getElementById('result-final-color').value = "#FFFF00";
      break;
  }
}

/**
 * Form Validation
*/
function formValidation(){
  validation = true;
  let options = document.getElementById("options");
  let numberOfResults = document.getElementById("number-of-results");
  let timeUntilResult = document.getElementById("time-until-result");
  let timeUntilShow = document.getElementById("time-until-show");
  let optionsErrorMsg1 = document.getElementById("options-message-1");
  let numberOfResultsMsg1 = document.getElementById("number-of-results-message-1");
  let timeUntilResultMsg1 = document.getElementById("time-until-result-message-1");
  let timeUntilShowErrorMsg1 = document.getElementById("time-until-show-message-1");

  // Checking to make sure non of the vital imputs have been left blank
  if (!(options.value)) {
    if (!(options.classList.contains("error"))) {
      options.classList.add("error");
    }
    optionsErrorMsg1.style.display = "block";
    validation = false;
  } else {
    if (options.classList.contains("error")) {
      options.classList.remove("error");
    }
    optionsErrorMsg1.style.display = "none";
  }
  if (!(numberOfResults.value)) {
    if (!(numberOfResults.classList.contains("error"))) {
      numberOfResults.classList.add("error");
    }
    numberOfResultsMsg1.style.display = "block";
    validation = false;
  } else {
    if (numberOfResults.classList.contains("error")) {
      numberOfResults.classList.remove("error");
    }
    numberOfResultsMsg1.style.display = "none";
  }
  if (!(timeUntilResult.value)) {
    if (!(timeUntilResult.classList.contains("error"))) {
      timeUntilResult.classList.add("error");
    }
    timeUntilResultMsg1.style.display = "block";
    validation = false;
  } else {
    if (timeUntilResult.classList.contains("error")) {
      timeUntilResult.classList.remove("error");
    }
    timeUntilResultMsg1.style.display = "none";
  }
  if (!(timeUntilShow.value)) {
    if (!(timeUntilShow.classList.contains("error"))) {
      timeUntilShow.classList.add("error");
    }
    timeUntilShowErrorMsg1.style.display = "block";
    validation = false;
  } else {
    if (timeUntilShow.classList.contains("error")) {
      timeUntilShow.classList.remove("error");
    }
    timeUntilShowErrorMsg1.style.display = "none";
  }
  
  return validation;
}

/**
 * When user clicks Load Generator this sets up the webpage and set some variables.
*/
function loadGenerator() {
  if (formValidation()) {
    globalReset = false;
    z = 0;
    btnLoad.style.display = "none";
    resultContainerHTML.style.display = "grid";
    resultContainerHTML.style.backgroundColor = document.getElementById('background-color').value;
    document.getElementById('gen-title-span').style.color = document.getElementById('title-color').value;
    document.getElementById('gen-criteria-span').style.color = document.getElementById('body-text-color').value;
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
      } else if (resultContainerHTML.webkitRequestFullscreen) { /* Safari */
      resultContainerHTML.webkitRequestFullscreen();
      } else if (resultContainerHTML.msRequestFullscreen) { /* IE11 */
      resultContainerHTML.msRequestFullscreen();
      }
    }
    resultTop.style.display = "block";
    criteriaGenerator.style.display = "flex";
    resultBottom.style.display = "block";
    btnStart.style.display = "block";
    btnClose.style.display = "block";
    const userGenTitle = document.getElementById('gen-title-user').value;
    const spanGenTitle = document.getElementById('gen-title-span');
    spanGenTitle.innerText = userGenTitle
    const userGenCriteria = document.getElementById('criteria-user').value;
    const spanGenCriteria = document.getElementById('gen-criteria-span');
    spanGenCriteria.innerText = userGenCriteria
    const userGenTail = document.getElementById('gen-tail-user').value;
    const spanGenTail = document.getElementById('gen-tail-span');
    spanGenTail.innerText = userGenTail
  }
  scrollToTop();
}

/**
 * Close generator and reset values.
*/
function exitGenerator() {
  globalReset = true;
  results.length = 0;
  countdown(true);
  resultsListHTML.innerHTML = "";
  resultContainerHTML.style.backgroundColor = "#FAFAFA";
  if ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
    }
  }
  resultContainerHTML.style.display = "none";
  resultContainerHTML.style.position = "initial";
  btnClose.style.display = "none";
  btnStart.style.display = "none";
  resultTop.style.display = "none";
  resultBottom.style.display = "none";
  criteriaGenerator.style.display = "none";
  btnLoad.style.display = "block";
}

/**
 * When user clicks start on generator this fuctions starts everything.
*/
function startGenerator() {
  criteriaGenerator.style.display = "none";
  btnStart.style.display = "none";
  countdown(false);
}

/**
 * Take user input options and sor them into a table.
*/
function sortOptions () {
  let timeUntilShow = document.getElementById("time-until-show").value;
  let timeUntilResult = document.getElementById("time-until-result").value;
  let options = document.getElementById("options").value;
  options = options.split(',');
  createRandomResults(options, timeUntilShow, timeUntilResult)
}

/**
 * Take random results in table and put them into a results table.
*/
function createRandomResults(options, timeUntilShow, timeUntilResult) {
  let loopAmount = document.getElementById("number-of-results").value;
  let multipleWinsHTML = document.getElementById("multiple-wins");
  for (let i = 0; i < loopAmount; i++){
    let result = Math.floor(Math.random() * options.length); 
    results.push(options[result].trim());
    if (!multipleWinsHTML.checked) {
      options.splice(result, 1)
    }
  }
  show1By1(results, timeUntilShow, timeUntilResult, options)
}

/**
 * Creates DIVs from results table and adds CSS styling to reveal results 1 by 1.
*/
function show1By1(results, timeUntilShow, timeUntilResult, options) {
  for (let result of results){
    let newDiv = document.createElement('div');
    newDiv.className = "box";
    newDiv.appendChild(document.createTextNode(result));
    resultsListHTML.appendChild(newDiv);
  }
  setTimeout(function() {
    let elements = document.querySelectorAll("span#results-list > div");
    let delay = 0;
    let i = 0;
    for (let element of elements) {
      element.style.transitionDuration  = `${timeUntilShow}s`
      if (i >= 1) {
        delay = delay + parseInt(timeUntilResult);
      }
      element.classList.toggle("show");
      resultRandomAnimFunc(i, element, delay, timeUntilResult, false, options, element.innerHTML, 0, 0);
      i++;
    }
  }, 1);
}

/**
 * Cycles very quickly randomly through all options until showing final result after defined time has passed
*/
function resultRandomAnimFunc(i, element, delay, y2, bool, options, result, y, x){
  var x = x;
  var result = result;
  var y = y;
  var y2 = y2;
  if (!(bool)) {
    delay = ((delay * 1000) + (z * 2000));
    z++;
  }
  if (!(globalReset)) {
    setTimeout(function(){
      if (x * 1000 < delay) {
        if (!(bool)) {
          delay = 1;
        }
        x = x + 1000;
        resultRandomAnimFunc(i, element, delay, y2, true, options, result, y, x);
      } else {
        setTimeout(function() {
          y++;
          if (y <= (y2 * 18)) {
            element.style.color = randomColor;
            element.innerHTML = options[Math.floor(Math.random() * options.length)];
            resultRandomAnimFunc(i, element, delay, y2, true, options, result, y, x);
          } else {
            element.innerHTML = result;
            element.style.color = finalColor;
          }
        }, 50);
      }
    },delay)
  }
}

/**
 * Creates a countdown before results are shown.
*/
function countdown (countdownReset) {
  const countdownHTML = document.getElementById('countdown-generator');
  // Original code from: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown and then modified by me
  var timeleft = 2;
  if (countdownReset) {
    timeleft = 0;
    clearInterval(countdownTimer);
    countdownHTML.innerHTML = "";
  } else {
    countdownTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(countdownTimer);
        countdownHTML.innerHTML = "";
        sortOptions();
      } else {
        countdownHTML.innerHTML = timeleft + "";
      }
      timeleft -= 1;
    }, 2000);
  }

}

/**
 * Scrolls webpage to top
*/
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}