const form = document.getElementById("container");

const textEmail = document.getElementById("textEmail"),
  weight = document.getElementById("textWeight"),
  height = document.getElementById("textHeight"),
  generateBtn = document.querySelector(".generateBtn"),
  namee = document.getElementById("text"),
  result = document.getElementById("result"),
  resetButtom = document.getElementById("resetButtom");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

generateBtn.addEventListener("click", () => {
  let bmi = (weight.value / height.value ** 2) * 10000;

  result.textContent = `${namee.value}, Your Bmi is: ${bmi}`;
});

function reset() {
  const element = document.getElementById("container");
  element.reset();
}

function reset2() {
  result.textContent = "Your Bmi is:0";
}
