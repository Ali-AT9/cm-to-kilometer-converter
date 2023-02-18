let btn = document.getElementById("btn");
let result = document.getElementById("result");
let input = document.getElementById("input");

function run() {
  cmToKilometer();
}

function cmToKilometer() {
  let res = input.value / 100000;

  document.getElementById("result").innerHTML = res + "km";
}
