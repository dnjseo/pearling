
fetch("footer_list.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer_list").innerHTML = data;
  })
  .catch((error) => console.error(error));