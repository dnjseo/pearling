//마이쉘 메뉴 
document.addEventListener("DOMContentLoaded", function() {
fetch("/html/shell/myshell-menu.html")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data, "text/html");

    const monthlyLink = htmlDocument.querySelector(".monthly");
    const diaryLink = htmlDocument.querySelector(".diary");
    const guestbookLink = htmlDocument.querySelector(".guestbook");
    
    monthlyLink.classList.remove("monthly")
    guestbookLink.classList.remove("guestbook")
    diaryLink.classList.remove("notselected");
    document.getElementById("myshell-menu").innerHTML = htmlDocument.documentElement.innerHTML;
  })
  .catch((error) => console.error(error));
});

//달력 
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      
    });
    
    calendar.render();
    calendar.setOption('contentHeight', 150);        
    });
