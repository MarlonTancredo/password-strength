const increaseProgressBar = (inputValue) => {
  if (inputValue.length > 20) {
    return "100%";
  }
  return `${inputValue.length * 5}%`;
};

const handleProgressBarColor = (inputValue) => {
  if (inputValue.length < 8) {
    return "red";
  } else if (inputValue.length >= 8 && inputValue.length < 12) {
    return "orange";
  } else if (inputValue.length >= 12) {
    return "green";
  }
  return "black";
};

const handlePasswordInput = (event) => {
  const inputValue = event.target.value;

  const progressBar = document.getElementById("intern-progress");
  progressBar.style.width = increaseProgressBar(inputValue);
  progressBar.style.backgroundColor = handleProgressBarColor(inputValue);
};

const password = document.getElementById("password");
password.addEventListener("input", handlePasswordInput);
