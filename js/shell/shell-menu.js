fetch("/html/shell/shell-menu.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("shell-menu").innerHTML = data;
  })
  .catch((error) => console.error(error));