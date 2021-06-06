var getUserName = prompt("Hello world");

console.log(getUserName);

document.getElementById("Username").innerText = getUserName

//tool tip example
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })