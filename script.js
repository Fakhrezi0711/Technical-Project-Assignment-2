const bmiForm = document.getElementById("bmiForm");
const resultDiv = document.getElementById("result");

bmiForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmi = weight / ((height / 100) ** 2);

  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obesity";
  }

  resultDiv.innerHTML = `Your BMI is : ${bmi.toFixed(1)}<br>Category: ${category}`;
});
