console.log("connected");

const multipleWinsHTML = document.getElementById("multiple-wins");
const resultContainerHTML = document.getElementById("result-container");
const resultsListHTML = document.getElementById("results-list");

window.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded");
  document.getElementById("btn-load").addEventListener("click", function () {
    loadGenerator();
    sortOptions();
  });
});

function loadGenerator() {
  const btnLoad = document.getElementById('btn-load');
  btnLoad.style.display = "none";
  resultContainerHTML.style.backgroundColor = "red";
  
  resultContainerHTML.style.position = "absolute";
  resultContainerHTML.style.top = "0px";
  resultContainerHTML.style.right = "0px";
  resultContainerHTML.style.bottom = "0px";
  resultContainerHTML.style.left = "0px";
  
  // Credit for fullscreen code: https://www.w3schools.com/howto/howto_js_fullscreen.asp
  if (resultContainerHTML.requestFullscreen) {
    resultContainerHTML.requestFullscreen();
  } else if (resultContainerHTML.webkitRequestFullscreen) { /* Safari */
  resultContainerHTML.webkitRequestFullscreen();
  } else if (resultContainerHTML.msRequestFullscreen) { /* IE11 */
  resultContainerHTML.msRequestFullscreen();
  }

}

function sortOptions() {
  let transitionTime = document.getElementById("transisiton-time").value;
  let timeBetween = document.getElementById("time-between-results").value;
  let options = document.getElementById("options").value;
  options = options.split(',');
  createRandomResults(options, transitionTime, timeBetween)
}

function createRandomResults(options, transitionTime, timeBetween) {
  const results = [];
  let loopAmount = document.getElementById("number-of-results").value;
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
  for (let i of results){
    let newLi = document.createElement('li');
    newLi.className = "box";
    newLi.appendChild(document.createTextNode(i));
    resultsListHTML.appendChild(newLi);
    console.log(newLi)
  }
  setTimeout(function() {
    let elements = document.querySelectorAll("ul#results-list > li");
    let delay = 0
    for (let element of elements) {
      element.style.transitionDuration  = `${transitionTime}s`
      delay = delay + parseInt(timeBetween);
      element.style.transitionDelay  = `${delay}s`;
      element.classList.toggle("show");
    }
  }, 1);
}