var pageContainer = document.getElementById("page-container");
var resultContainerHTML = document.getElementById("result-container");
var resultsListHTML = document.getElementById("results-list");
var btnClose = document.getElementById('btn-close');
var btnLoad = document.getElementById('btn-load');
var btnStart = document.getElementById('btn-start');
var resultMidPre = document.getElementById('result-mid-pre');
var template1ContainerHTML = document.getElementById('template1-container');
var template2ContainerHTML = document.getElementById('template2-container');
var template3ContainerHTML = document.getElementById('template3-container');
var countdownHTML = document.getElementById('countdown-generator');
var results = [];
var allOptions = [];
var resultTop = document.getElementById('result-top');
var criteriaGenerator = document.getElementById('criteria-generator');
var resultBottom = document.getElementById('result-bottom');
var countdownTimer;
var globalReset = true;
var finalColor;
var randomColor;
var zGlobal = 0;

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
});

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
  var validation = true;

  var options = sortOptions();
  allOptions = options;
  var optionsHTML = document.getElementById("options");

  var numberOfResults = document.getElementById("number-of-results");
  var timeUntilResult = document.getElementById("time-until-result");
  var timeUntilShow = document.getElementById("time-until-show");

  var optionsErrorMsg1 = document.getElementById("options-message-1");
  var numberOfResultsMsg1 = document.getElementById("number-of-results-message-1");
  var numberOfResultsMsg2 = document.getElementById("number-of-results-message-2");
  var timeUntilResultMsg1 = document.getElementById("time-until-result-message-1");
  var timeUntilResultMsg2 = document.getElementById("time-until-result-message-2");
  var timeUntilShowMsg1 = document.getElementById("time-until-show-message-1");
  var timeUntilShowMsg2 = document.getElementById("time-until-show-message-2");

  

  // Checking to make sure non of the vital imputs have been left blank, if so display error message.
  if (options.length < 2) {
    if (!(optionsHTML.classList.contains("error"))) {
      optionsHTML.classList.add("error");
    }
    optionsErrorMsg1.style.display = "block";
    validation = false;
  } else {
    if (optionsHTML.classList.contains("error")) {
      optionsHTML.classList.remove("error");
    }
    optionsErrorMsg1.style.display = "none";
  }

  // Checking to make sure vital imput has been left blank, if so display error message.
  if (!(numberOfResults.value)) {
    if (!(numberOfResults.classList.contains("error"))) {
      numberOfResults.classList.add("error");
    }
    numberOfResultsMsg1.style.display = "block";
    numberOfResultsMsg2.style.display = "none";
    validation = false;
  // Checking input value is within the min and max range, if so display error message.
  } else if ((parseInt(numberOfResults.value) < 1) || (parseInt(numberOfResults.value) > 20)){
    if (!(numberOfResults.classList.contains("error"))) {
      numberOfResults.classList.add("error");
    }
    numberOfResultsMsg1.style.display = "none";
    numberOfResultsMsg2.style.display = "block";
    validation = false;
  // If no errors and there were errors previously stop displaying errors messages.
  } else {
    if (numberOfResults.classList.contains("error")) {
      numberOfResults.classList.remove("error");
    }
    numberOfResultsMsg1.style.display = "none";
    numberOfResultsMsg2.style.display = "none";
  }

  // Checking to make sure vital imput has been left blank, if so display error message.
  if (!(timeUntilResult.value)) {
    if (!(timeUntilResult.classList.contains("error"))) {
      timeUntilResult.classList.add("error");
    }
    timeUntilResultMsg1.style.display = "block";
    timeUntilResultMsg2.style.display = "none";
    validation = false;
  // Checking input value is within the min and max range, if so display error message.
  } else if ((parseInt(timeUntilResult.value) < 1) || (parseInt(timeUntilResult.value) > 600)){
    if (!(timeUntilResult.classList.contains("error"))) {
      timeUntilResult.classList.add("error");
    }
    timeUntilResultMsg1.style.display = "none";
    timeUntilResultMsg2.style.display = "block";
    validation = false;
  // If no errors and there were errors previously stop displaying errors messages.
  } else {
    if (timeUntilResult.classList.contains("error")) {
      timeUntilResult.classList.remove("error");
    }
    timeUntilResultMsg1.style.display = "none";
    timeUntilResultMsg2.style.display = "none";
  }

  // Checking to make sure vital imput has been left blank, if so display error message.
  if (!(timeUntilShow.value)) {
    if (!(timeUntilShow.classList.contains("error"))) {
      timeUntilShow.classList.add("error");
    }
    timeUntilShowMsg1.style.display = "block";
    timeUntilShowMsg2.style.display = "none";
    validation = false;
  // Checking input value is within the min and max range, if so display error message.
} else if ((parseInt(timeUntilShow.value) < 1) || (parseInt(timeUntilShow.value) > 20)){
  if (!(timeUntilShow.classList.contains("error"))) {
    timeUntilShow.classList.add("error");
  }
  timeUntilShowMsg1.style.display = "none";
  timeUntilShowMsg2.style.display = "block";
  validation = false;
  } else {
    if (timeUntilShow.classList.contains("error")) {
      timeUntilShow.classList.remove("error");
    }
    timeUntilShowMsg1.style.display = "none";
    timeUntilShowMsg2.style.display = "none";
  }

  return validation;
}

/**
 * When user clicks Load Generator this sets up the webpage and set some variables.
*/
function loadGenerator() {
  if (formValidation()) {
    globalReset = false;
    zGlobal = 0;
    countdownHTML.style.display = "none";
    resultsListHTML.style.display = "none";
    resultMidPre.style.display = "block";
    pageContainer.style.display = "none";
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
    var fullScreen = document.getElementById("full-screen"); 
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
    var userGenTitle = document.getElementById('gen-title-user').value;
    var spanGenTitle = document.getElementById('gen-title-span');
    spanGenTitle.innerText = userGenTitle;
    var userGenCriteria = document.getElementById('criteria-user').value;
    var spanGenCriteria = document.getElementById('gen-criteria-span');
    spanGenCriteria.innerText = userGenCriteria;
    var userGenTail = document.getElementById('gen-tail-user').value;
    var spanGenTail = document.getElementById('gen-tail-span');
    spanGenTail.innerText = userGenTail;
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
  pageContainer.style.display = "block";
}

/**
 * When user clicks start on generator this fuctions starts everything.
*/
function startGenerator() {
  resultMidPre.style.display = "none";
  countdown(false);
}

/**
 * Take user input options and sorts them into an array then returns that to calling function.
*/
function sortOptions () {
  var sortOptions = document.getElementById("options").value;
  sortOptions = sortOptions.split(',');
  return sortOptions;
}

/**
 * Take random results in table and put them into a results table.
*/
function createRandomResults() {
  var options = sortOptions();
  var timeUntilResult = document.getElementById("time-until-result").value;
  var loopAmount = document.getElementById("number-of-results").value;
  var multipleWinsHTML = document.getElementById("multiple-wins");
  for (var i = 0; i < loopAmount; i++){
    var result = Math.floor(Math.random() * options.length); 
    results.push(options[result].trim());
    if (!multipleWinsHTML.checked) {
      options.splice(result, 1);
    }
  }
  show1By1(results, timeUntilResult);
}

/**
 * Creates DIVs from results table and adds CSS styling to reveal results 1 by 1.
*/
function show1By1(results, timeUntilResult) {
  var timeUntilShow = document.getElementById("time-until-show").value;
  var height = document.querySelector('#result-mid').offsetHeight;
  console.log(height);

  for (var result of results){
    var newDiv = document.createElement('div');
    newDiv.className = "box";
    newDiv.appendChild(document.createTextNode(result));
    resultsListHTML.appendChild(newDiv);
  }
  setTimeout(function() {
    var elements = document.querySelectorAll("span#results-list > div");
    var delay = 0;
    var i = 1; // Setting var for counter in loop
    var y = 78; //Container % size of screen
    var x = 19; //Default font size
    var z = x * (y / 100); // Initial font size for 1 row.
    var w = parseInt(y / z); // Amount of rows of text will fit before font size needs to be smaller
    if (elements.length > w){
      v = z * (w/elements.length); // Final font size
    } else {
      v = z; // Final font size
    }
    for (var element of elements) {
      element.style.transitionDuration = `${timeUntilShow}s`;
      element.style.height = `${100/elements.length}%`
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
function resultRandomAnimFunc(i, element, delay, y2, bool, result, y, x, z2){
  x = x;
  result = result;
  y = y;
  var z3 = parseInt(z2);
  if (!(globalReset)) {
    setTimeout(function(){
      if (x * 1000 < delay) {
        if (!(bool)) {
          delay = 1;
        }
        x = x + 1000;
        resultRandomAnimFunc(i, element, delay, y2, true, result, y, x, z3);
      } else {
        setTimeout(function() {
          y++;
          if (y <= (y2 * 18)) {
            element.style.color = randomColor;
            var z1 = Math.floor(Math.random() * allOptions.length);
            var SafetyCount = 0;
            while (!(SafetyCount >= 10)){
              if (!(z1 == z3)) { 
                break; 
              }
              z1 = Math.floor(Math.random() * allOptions.length);
              SafetyCount++;
            }
            element.innerHTML = allOptions[z1];
            resultRandomAnimFunc(i, element, delay, y2, true, result, y, x, z1);
          } else {
            element.innerHTML = result;
            element.style.color = finalColor;
          }
        }, 50);
      }
    },delay);
  }
}

/**
 * Creates a countdown before results are shown.
*/
function countdown (countdownReset) {
  countdownHTML.style.display = "block";
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
        countdownHTML.style.display = "none";
        resultsListHTML.style.display = "flex";
        createRandomResults();
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