const colorsFeedbacks = {
  red: "Should be longer",
  orange: "Pretty good",
  green: "Grrrreat!",
};
const { red, orange, green } = colorsFeedbacks;

const increaseProgressBar = (inputValue) => {
  if (inputValue.length >= 20) {
    return "100%";
  }
  return `${inputValue.length * 5}%`;
};

const handleCurrentColor = (inputValueLength) => {
  if (inputValueLength < 8) {
    return "red";
  } else if (inputValueLength >= 8 && inputValueLength < 12) {
    return "orange";
  } else if (inputValueLength >= 12) {
    return "green";
  }
};

const printFeedback = (color) => {
  const container = document.querySelector(".container");
  const feedback = document.createElement("p");
  feedback.className = "container__feedback";
  feedback.textContent = colorsFeedbacks[`${color}`];
  container.append(feedback);
};

const removeFeedback = () => {
  const feedback = document.querySelector(".container__feedback");
  if (feedback) {
    feedback.remove();
  }
};

const handleProgressBar = (event) => {
  const inputValue = event.target.value;
  const color = handleCurrentColor(inputValue.length);

  const progressBar = document.querySelector(".progress__intern");
  progressBar.style.width = increaseProgressBar(inputValue);
  progressBar.className = `progress__intern progress__intern--${color}`;

  removeFeedback();
  printFeedback(color);
};

const password = document.getElementById("password");
password.addEventListener("input", handleProgressBar);
