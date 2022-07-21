console.log("connected");

window.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded");
  document.getElementById("btn-load").addEventListener("click", function () {
    loadGenerator();
  });
});

function loadGenerator() {
  const btnLoad = document.getElementById('btn-load');
  btnLoad.style.display = "none";
}