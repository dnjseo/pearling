document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      
    });
    
    calendar.render();
    calendar.setOption('contentHeight', 350);

    let dayDetail = document.getElementById('dayDetail');
    calendar.on('dateClick', function(info) {
        console.log('clicked on ' + info.dateStr);

        
    });


    //모달로 잘못 했슈...
    // let dayDetail = document.getElementById('dayDetail');
    // calendar.on('dateClick', function(info) {
    //     dayDetail.classList.remove('hidden');
    //     console.log('clicked on ' + info.dateStr);
    // });
 

  });



