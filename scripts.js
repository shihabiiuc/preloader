document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 1000)
});