document.addEventListener('DOMContentLoaded', function() {
      drawCal();  
});

function drawCal() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2021-06-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      dateClick: function(info) {
        renderPopup();
      },
      events: [
        {
          title: 'All Day Event',
          start: '2021-06-01'
        },
        {
          groupId: '999',
          title: 'Long Event',
          start: '2021-06-07',
          end: '2021-06-10'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2021-06-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2021-06-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2021-06-11',
          end: '2021-06-13'
        },
        {
          title: 'Meeting',
          start: '2021-06-12T10:30:00',
          end: '2021-06-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2021-06-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2021-06-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2021-06-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2021-06-28'
        }
      ]
    });

    calendar.render();
  };

//new add delete
  
function renderPopup(){
    document.getElementById('calendar-popup').style.display='block';
    document.getElementById('calendar-popup').style.zIndex=1;
    document.getElementById('calendar').style.opacity=.2;
}