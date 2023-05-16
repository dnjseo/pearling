document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        
    });

    calendar.render();
    calendar.setOption('contentHeight', 350);

    let mstoday = document.querySelector("#ms4")        
    let dayIndex = 0;
    updateDate(dayIndex);

    function updateDate(offset) {
        let today = new Date();
        today.setDate(today.getDate() + offset);
        let month = today.getMonth();
        let day = today.getDay();
        let date = today.getDate();
        
        switch (month) 
        {
            case 0: month = "01"; break;
            case 1: month = "02"; break;
            case 2: month = "03"; break;
            case 3: month = "04"; break;
            case 4: month = "05"; break;
            case 5: month = "06"; break;
            case 6: month = "07"; break;
            case 7: month = "08"; break;
            case 8: month = "09"; break;
            case 9: month = "10"; break;
            case 10: month = "11"; break;
            case 11: month = "12"; break;
        }
        
        switch (date) {
            case 1: date = "01"; break;
            case 2: date = "02"; break;
            case 3: date = "03"; break;
            case 4: date = "04"; break;
            case 5: date = "05"; break;
            case 6: date = "06"; break;
            case 7: date = "07"; break;
            case 8: date = "08"; break;
            case 9: date = "09"; break;
        }

    
        switch(day)
        {
            case 0 : day = "sun"; break; 
            case 1 : day = "mon"; break;
            case 2 : day = "tue"; break;
            case 3 : day = "wed"; break;
            case 4 : day = "thu"; break;
            case 5 : day = "fri"; break;
            case 6 : day = "sat"; break;
        }

        mstoday.querySelector('.today-day').innerText = month+"."+date+" "+day;    

    }


    let dayDetail = document.getElementById('dayDetail');
        calendar.on('dateClick', function(info) {
        console.log('clicked on ' + info.dateStr);
        
    });


    calendar.on('dateClick', function(info) {
        let clickedDate = new Date(info.dateStr);
        let month = (clickedDate.getMonth() + 1).toString().padStart(2, '0');
        let day = clickedDate.getDate().toString().padStart(2, '0');
        let date = clickedDate.toLocaleString('en-US', { weekday: 'short' }).toLowerCase();
     
        let mstoday = document.querySelector("#ms4");
        mstoday.querySelector('.today-day').innerText = month + "." + day + " " + date;
    });
    





    //모달로 잘못 했슈...
    // let dayDetail = document.getElementById('dayDetail');
    // calendar.on('dateClick', function(info) {
    //     dayDetail.classList.remove('hidden');
    //     console.log('clicked on ' + info.dateStr);
    // });
 

  });



