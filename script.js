// Date Variables
const date = $('#currentDay');
const time = moment().format('dddd, MMMM Do');
const button = $('.saveBtn');
const storage = localStorage;

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Timeblocks

function timeCheck() {
	let hour = moment().hours();

	$('.time-block').each(function () {
		let currentHour = parseInt($(this).attr('id'));

		if (currentHour > hour) {
			$(this).addClass('future');
		} else if (currentHour === hour) {
			$(this).addClass('present');
		} else {
			$(this).addClass('past');
		}
	});
}

// Save Events to localstorage
$('.saveBtn').click(function (event) {
	event.preventDefault();
	let value = $(this).siblings('.time-block').val();
	let time = $(this).parent().attr('id').split('-')[1];
	localStorage.setItem(time, value);
});

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-01 .time-block").val(localStorage.getItem("01"));
$("#hour-02 .time-block").val(localStorage.getItem("02"));
$("#hour-03 .time-block").val(localStorage.getItem("03"));
$("#hour-04 .time-block").val(localStorage.getItem("04"));
$("#hour-05 .time-block").val(localStorage.getItem("05"));

timeCheck();
