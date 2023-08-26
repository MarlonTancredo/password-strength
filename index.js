const handlePasswordInput = (event) => {
  console.log(event.target.value);
};

const password = document.getElementById("password");
password.addEventListener("input", handleInput);
