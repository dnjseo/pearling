fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
      document.getElementById("header").innerHTML = data;
      
      var menu = document.getElementById('menu');
      var subMenu = document.getElementById('sub_menu');
      var close = document.getElementById('close');
      
      menu.addEventListener('click', function() {
        subMenu.style.display = 'block';
      });

      close.addEventListener('click', function(){
        subMenu.style.display = 'none';
      });
  })
  .catch((error) => console.error(error));

