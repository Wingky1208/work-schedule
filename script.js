var agenda = [
    {
        "hour": "09am",
        "schedule": ""
    },
    {
        "hour": "10am",
        "schedule": ""
    },
    {
        "hour": "11am",
        "schedule": ""
    },
    {
        "hour": "12pm",
        "schedule": ""
    },
    {
        "hour": "01pm",
        "schedule": ""
    },
    {
        "hour": "02pm",
        "schedule": ""
    },
    {
        "hour": "03pm",
        "schedule": ""
    },
    {
        "hour": "04pm",
        "schedule": ""
    },
    {
        "hour": "05pm",
        "schedule": ""
    },
]

var agendaEl = document.querySelector('#agenda')


// show the agenda 

function showSchedule() {
    // agendaEl.innerHTML = '';

    agenda.forEach(
        function (item, index) {
            agendaEl.innerHTML += `<div class="row  time-block" >
            <div class="hour">
                ${item.hour}
            </div>
            <textarea  id="${index}" class="${getTime(item)} description">${item.schedule}</textarea>
            <div class="saveBtn">
               <i class="far fa-save" onClick='saveChange(event)'></i>
           </div>
            </div>`;
        }
    )
}
showSchedule();

//get Time
function getTime(item) {
    //current Time get Hour
    var currentHour = parseInt(moment().format('kk'));
    console.log(currentHour)
    //loop the objects in agenda
    console.log(item.hour.slice(2, 4));

    var agendaHour = Number(item.hour.slice(0, 2));
    var agendaAMPM = item.hour.slice(2, 4);
    var convertedTime;


    //change aganda time to 24 hours
    if (agendaAMPM == "am") {
        convertedTime = agendaHour;
    } else {
        convertedTime = agendaHour + 12;

    }
    //compare agendaTime and currentHour
    if (convertedTime < currentHour) {
        return "past";
    }
    else if (convertedTime == currentHour) {
        return "present";
    }
    else {
        return "future";
    }

}


for (var i = 0; i < agenda.length; i++) {
    let item = agenda[i];

    getTime(item);
}


//save change
function saveChange(event) {
    event.preventDefault();
    let textArea = event.target.parentElement.parentElement.children[1];
    let idx = textArea.id;
    // save input to agenda
    agenda[idx].schedule = textArea.value;
    // save to local storage
    localStorage.agenda = JSON.stringify(agenda);
}

var retrieveAgenda = localStorage.getItem('agenda');

console.log(JSON.parse(retrieveAgenda));

//set time display
setInterval(function () {

    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
}, 1000)
