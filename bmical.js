////////////////////////////////////////////
var i = Math.random() * 9;
const btn = document.querySelector(".demobtn");
const hinput = document.getElementById("height");
const winput = document.getElementById("weight");
const para = document.querySelector(".result");
const ch = document.querySelector(".demo");

btn.addEventListener("click", check);
function check() {
  event.preventDefault();
  const h = hinput.value;
  const m = winput.value;
  let bmi = (m / ((h * h) / 10000)).toFixed(2);
  para.innerHTML = bmi;
}
///////////////////////////////

// Btn.addEventListener("click", check);

/////////////////////////

// window.onload = function () {
//   event.preventDefault();
//   ch.innerHTML = i;
// };
// btn.addEventListener("click", demo);
// function demo() {
//   ch.innerHTML = "jndcekwncwecfnewneo";
// }
// btn.addEventListener("click", check);
// function check() {
//   event.preventDefault();
//   para.innerHTML = i;
// }
