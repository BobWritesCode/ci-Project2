console.log("connected");

const multipleWinsHTML = document.getElementById("multiple-wins");
const resultContainerHTML = document.getElementById("result-container");

window.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded");
  document.getElementById("btn-load").addEventListener("click", function () {
    loadGenerator();
    sortOptions();
  });
});

function loadGenerator() {
  const btnLoad = document.getElementById('btn-load');
  //btnLoad.style.display = "none";
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
  createRandomResults(options)
}

function createRandomResults(options) {
  const results = [];
  let loopAmount = document.getElementById("number-of-results").value;
  for (let i = 0; i < loopAmount; i++){
    let result = Math.floor(Math.random() * options.length); 
    console.log(result)
    results.push(options[result].trim());
    console.log(results)
    if (!multipleWinsHTML.checked) {
      options.splice(result, 1)
    }
  }
  console.log(results)
}