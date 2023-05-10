let todayIndex = 0;

window.addEventListener("DOMContentLoaded", function() {
  updateDate(todayIndex); // 현재 날짜로 업데이트
});

function updateDate(offset) {
    let today = new Date();
    today.setDate(today.getDate() + offset);
    let month = today.getMonth();
    let day = today.getDay();
    let date = today.getDate();
  

    switch (month) 
    {
        case 0: month = "january"; break;
        case 1: month = "february"; break;
        case 2: month = "march"; break;
        case 3: month = "april"; break;
        case 4: month = "may"; break;
        case 5: month = "june"; break;
        case 6: month = "july"; break;
        case 7: month = "august"; break;
        case 8: month = "september"; break;
        case 9: month = "october"; break;
        case 10: month = "november"; break;
        case 11: month = "december"; break;
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

    document.querySelector('#today-m').innerText = month;
    document.querySelector('#today-day').innerText = day;
    document.querySelector('#today-date').innerText = date;
}

document.getElementById("todayLeft").addEventListener("click", function() {
    todayIndex--; // 어제 날짜로 업데이트
    updateDate(todayIndex);
  });
  
document.getElementById("todayRight").addEventListener("click", function() {
    todayIndex++; // 내일 날짜로 업데이트
    updateDate(todayIndex);
  });