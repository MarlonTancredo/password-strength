const feedbacks = {
  red: "Should be longer",
  orange: "Pretty good",
  green: "Grrrreat!",
};

const currentColor = { color: "" };

const increaseProgressBar = (inputValue) => {
  if (inputValue.length >= 20) {
    return "100%";
  }
  return `${inputValue.length * 5}%`;
};

const handleProgressBarColor = (inputValue) => {
  if (inputValue.length < 8) {
    currentColor.color = "red";
    return "progress__intern progress__intern--red";
  } else if (inputValue.length >= 8 && inputValue.length < 12) {
    currentColor.color = "orange";
    return "progress__intern progress__intern--orange";
  } else if (inputValue.length >= 12) {
    currentColor.color = "green";
    return "progress__intern progress__intern--green";
  }
};

const printFeedback = () => {
  const container = document.querySelector(".container");
  const feedback = document.createElement("p");
  feedback.className = "container__feedback";
  feedback.textContent = feedbacks[`${currentColor.color}`];
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

  const progressBar = document.querySelector(".progress__intern");
  progressBar.style.width = increaseProgressBar(inputValue);
  progressBar.className = handleProgressBarColor(inputValue);

  removeFeedback();
  printFeedback();
};

const password = document.getElementById("password");
password.addEventListener("input", handleProgressBar);
