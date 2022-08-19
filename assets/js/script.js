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

function templateSelected(i){
  console.log(i);
  switch (i) {
    case 1:
      template1ContainerHTML.style.border = "3px solid green";
      template2ContainerHTML.style.border = "3px solid transparent";
      template3ContainerHTML.style.border = "3px solid transparent";
      break;
    case 2:
      template1ContainerHTML.style.border = "3px solid transparent";
      template2ContainerHTML.style.border = "3px solid green";
      template3ContainerHTML.style.border = "3px solid transparent";
      break;
    case 3:
      template1ContainerHTML.style.border = "3px solid transparent";
      template2ContainerHTML.style.border = "3px solid transparent";
      template3ContainerHTML.style.border = "3px solid green";
      break;
  }
}

function loadGenerator() {
  btnLoad.style.display = "none";
  resultContainerHTML.style.backgroundColor = "#0D050E";
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

function exitGenerator() {
  results.length = 0;
  resultsListHTML.innerHTML = "";
  resultContainerHTML.style.backgroundColor = "#FAFAFA";
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
  document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
  document.msExitFullscreen();
  }
  resultContainerHTML.style.position = "initial";
  btnClose.style.display = "none";
  btnStart.style.display = "none";
  resultTop.style.display = "none";
  resultBottom.style.display = "none";
  criteriaGenerator.style.display = "none";
  btnLoad.style.display = "block";
}

function startGenerator() {
  criteriaGenerator.style.display = "none";
  btnStart.style.display = "none";
  countdown();
}

function sortOptions () {
  let transitionTime = document.getElementById("transisiton-time").value;
  let timeBetween = document.getElementById("time-between-results").value;
  let options = document.getElementById("options").value;
  options = options.split(',');
  createRandomResults(options, transitionTime, timeBetween)
}

function createRandomResults(options, transitionTime, timeBetween) {
  let loopAmount = document.getElementById("number-of-results").value;
  let multipleWinsHTML = document.getElementById("multiple-wins");
  for (let i = 0; i < loopAmount; i++){
    let result = Math.floor(Math.random() * options.length); 
    results.push(options[result].trim());
    if (!multipleWinsHTML.checked) {
      options.splice(result, 1)
    }
  }
  show1By1(results, transitionTime, timeBetween)
}

function show1By1(results, transitionTime, timeBetween) {
  /*let vertOrHorValue = document.getElementById('vert-or-hor').value;
   switch (vertOrHorValue) {
    case "vertical":
      resultsListHTML.style.flexDirection = "column";
      break;
    case "horizontol":
      resultsListHTML.style.flexDirection = "row";
      break;
  }
  */
  for (let i of results){
    let newDiv = document.createElement('div');
    newDiv.className = "box";
    newDiv.appendChild(document.createTextNode(i));
    resultsListHTML.appendChild(newDiv);
  }

  setTimeout(function() {
    let elements = document.querySelectorAll("span#results-list > div");
    let delay = 0
    for (let element of elements) {
      element.style.transitionDuration  = `${transitionTime}s`
      delay = delay + parseInt(timeBetween);
      element.style.transitionDelay  = `${delay}s`;
      element.classList.toggle("show");
    }
  }, 1);
}

function countdown () {
  const countdownHTML = document.getElementById('countdown-generator');
  /* Original code from: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown and modified by me*/
  var timeleft = 10;
  var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      countdownHTML.innerHTML = "";
      sortOptions()
    } else {
      countdownHTML.innerHTML = timeleft + "";
    }
    timeleft -= 1;
  }, 2000);
}