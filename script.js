// Date Variables
const date = $('#currentDay');
const time = moment().format('dddd, MMMM Do');

const button = $('.saveBtn');
const storage = localStorage;

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Timeblocks

function timeCheck() {
    let hour = moment().hours();

    $(".time-block").each(function() {
        let currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Save Events to localstorage

saveBtn.on("click", function() {
    let event = $(this).siblings(".event").val();
    let time = $(this).siblings(".hour").text();

    storage.setItem(time, event);
});

timeCheck();