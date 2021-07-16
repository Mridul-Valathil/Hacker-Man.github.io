function saveInputValue() {
  let inputVal1 = document.getElementById("userName").value;
  let inputVal2 = document.getElementById("password").value;
  alert("login details saved!");
  clearAll();
}

function clearAll() {
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
}
