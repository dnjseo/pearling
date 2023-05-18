fetch("/html/header/header.html")
  .then((response) => response.text())
  .then((data) => {
      document.getElementById("header").innerHTML = data;
      
      var menu = document.getElementById('menu');
      var subMenu = document.getElementById('sub_menu');
      var close = document.getElementById('close');
      
      menu.addEventListener('click', function() {
        subMenu.style.right = "0";
        console.log("클릭");
      });

      close.addEventListener('click', function(){
        subMenu.style.right = "-100%";
      });
  })
  .catch((error) => console.error(error));

