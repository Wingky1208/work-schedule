// show today time
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY"))


//add class to textare
function formatHour() {
    var currentHour = moment().hours();

    $('.time-block').each(function () {
        var convertedTime = parseInt($(this).attr('id'))

        if (convertedTime < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass('past');
        } else if (convertedTime === currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass('present');
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass('future');
        }
    })
}

formatHour()

//click save button to save to local storage
$('.saveBtn').on('click', function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();

    localStorage.setItem(key, value)
})

//show local storage on the textarea
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));