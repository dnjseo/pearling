fetch("/html/search/search-main.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("dropdown").innerHTML = data;
    
    var dropSearch = document.querySelector('.drop-search');
    var submenu = document.querySelector('.dropdown-submenu');
    var isOpen = false; 
    
    dropSearch.addEventListener('click', function() {
      if (isOpen) {
        submenu.style.display = 'none';
        isOpen = false;
      } else {
        submenu.style.display = 'block';
        isOpen = true;
      }
    });
  })
  .catch((error) => console.error(error));



