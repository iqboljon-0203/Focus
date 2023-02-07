let text = document.querySelector(".text");

window.onfocus = function () {
  text.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentisimilique repellat ut labore unde animi dicta nesciunt et veniamveritatis.";
};
window.onblur = function () {
  text.innerHTML = "";
};

window.onkeyup = function (e) {
  if (e.keyCode == 44) {
    alert("Dont try to take a screen shot");
    text.innerHTML = "";
  }
};
