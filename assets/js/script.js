console.log("connected");

const multipleWinsHTML = document.getElementById("multiple-wins");

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