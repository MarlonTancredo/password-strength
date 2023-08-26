const increaseProgressBar = (inputValue) => {
  if (inputValue.length > 20) {
    return "100%";
  }
  return `${inputValue.length * 5}%`;
};

const handlePasswordInput = (event) => {
  const inputValue = event.target.value;

  const progressBar = document.getElementById("intern-progress");
  progressBar.style.width = increaseProgressBar(inputValue);
};

const password = document.getElementById("password");
password.addEventListener("input", handlePasswordInput);
