function createCalendar(selector, events) {
    var WEEKS_IN_MONTH = 5;
    var MONTH = 'October';
    var MAX_MONTH_DAYS = 31;
    var YEAR = '2014';
    var WEEK_DAYS = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

    var preparedEvents = prepareEvents(events);

    var day = document.createElement('div');
    var week = document.createElement('div');
    var dayTitle = document.createElement('h4');
    var dayContent = document.createElement('div');
    var dayEvent = document.createElement('span');

    applyDayAttributes(day);
    applyDayTitleAttributes(dayTitle);
    applyDayEventsAttributes(dayEvent);

    var calendar = document.querySelector(selector);
    var month = generateMonth();
    calendar.appendChild(month);

    calendar.addEventListener('click', function (ev) {
        var selectedDay = ev.target;
        selectedDay = getParentIfDateTitle(selectedDay);
        if(selectedDay.classList.contains('calendar-day')){
            changeDateTimeBackgroundColor(selectedDay, 'white');

            var otherSelected = calendar.getElementsByClassName('selected');
            for (var i = 0; i < otherSelected.length; i++) {
                changeDateTimeBackgroundColor(otherSelected[i], 'lightgray');
                otherSelected[i].classList.remove('selected');
            }

            selectedDay.classList.add('selected');
        }
    });

    calendar.addEventListener('mouseover', function (ev) {
        var selectedDay = ev.target;
        selectedDay = getParentIfDateTitle(selectedDay);
        if(checkIfCalendarDayNotSelected(selectedDay)){
            changeDateTimeBackgroundColor(selectedDay, 'gray');
        }
    });

    calendar.addEventListener('mouseout', function (ev) {
        var selectedDay = ev.target;
        selectedDay = getParentIfDateTitle(selectedDay);
        if(checkIfCalendarDayNotSelected(selectedDay)){
            changeDateTimeBackgroundColor(selectedDay, 'lightgray');
        }
    });

    function prepareEvents(events) {
        var result = [];
        for (var i = 0; i < events.length; i+=1) {
            var currentDay = events[i].date;
            result[currentDay] = events[i];
        }
        return result;
    }

    function generateMonth(){
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < WEEKS_IN_MONTH; i+=1) {
            var startDay = i * 7 + 1;
            var endDay = startDay + 6;
            var currentWeek = generateWeek(startDay, endDay);
            fragment.appendChild(currentWeek);
        }
        return fragment;
    }

    function generateWeek(startDay, endDay){
        var currentWeek = week.cloneNode(true);
        for (var i = startDay; i <= endDay && i <= MAX_MONTH_DAYS; i+=1) {
            var currentDay = generateDay(i);
            currentWeek.appendChild(currentDay);
        }
        return currentWeek;
    }

    function generateDay(date) {
        var currentDay = day.cloneNode(true);
        var currentDateTitle = generateDayTitle(date);
        currentDay.appendChild(currentDateTitle);
        getCurrentEvent(date, currentDay);
        return currentDay;
    }

    function getCurrentEvent(date, dayElement) {
        var currentDateEvent = preparedEvents[date];
        if(currentDateEvent){
            var currentDayEvent = dayEvent.cloneNode(true);
            currentDayEvent.innerText =
                currentDateEvent.hour + ' - ' +
                currentDateEvent.title;
            dayElement.appendChild(currentDayEvent);
        }
    }

    function generateDayTitle(date){
        var currentDayTitle = dayTitle.cloneNode(true);
        var currentDaysAsString = WEEK_DAYS[date % 7];
        currentDayTitle.innerText = currentDaysAsString + ' ' + date + ' ' + MONTH + ' ' + YEAR;
        return currentDayTitle;
    }

    function applyDayAttributes(day) {
        day.classList.add('calendar-day');
        day.style.display = 'inline-block';
        day.style.width = '150px';
        day.style.height = '150px';
        day.style.border = '1px solid black';
        day.style.overflowWrap = 'normal';
    }

    function applyDayTitleAttributes(dayTitle){
        dayTitle.classList.add('calendar-day-title');
        dayTitle.style.backgroundColor = 'lightgray';
        dayTitle.style.textAlign = 'center';
        dayTitle.style.borderBottom = '1px solid black';
        dayTitle.style.margin = '0';
    }

    function applyDayEventsAttributes(dayEvent) {
        dayEvent.style.float = 'left';
    }

    function changeDateTimeBackgroundColor(element, color) {
        element.getElementsByClassName('calendar-day-title')[0].style.backgroundColor = color;
    }

    function getParentIfDateTitle(element) {
        if (element.classList.contains('calendar-day-title')){
            element = element.parentNode;
        }
        return element;
    }

    function checkIfCalendarDayNotSelected(element) {
        return element.classList.contains('calendar-day') &&
              !element.classList.contains('selected');
    }
}