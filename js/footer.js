fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error(error));

  fetch("footer_list.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer_list").innerHTML = data;
  })
  .catch((error) => console.error(error));