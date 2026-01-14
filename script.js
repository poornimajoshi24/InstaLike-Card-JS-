var card = document.querySelector(".card");
var love = document.querySelector("#love");

card.addEventListener("dblclick", function () {

  // show in center
  love.style.transition = "all 0.4s cubic-bezier(.65,1,.77,1.44)";
  love.style.opacity = 1;
  love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  // fly up
  setTimeout(function () {
    love.style.transform = "translate(-50%, -300%) scale(1) rotate(60deg)";
  }, 600);

  // reset WITHOUT animation
  setTimeout(function () {
    love.style.transition = "none";
    love.style.opacity = 0;
    love.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1000);
});
