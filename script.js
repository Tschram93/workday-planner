// Date Variables
const date = $('#currentDay');
const time = moment().format('dddd, MMMM Do');
const currentTime = moment().format('kk:mm:ss');

const button = $('.saveBtn');
date.append(time);

// Timeblocks

timeBlocks = {
	nine: {
		begin: '09:00:00',
		end: '09:59:59',
		textArea: $('#09'),
		id: 1,
	},

	ten: {
		begin: '10:00:00',
		end: '10:59:59',
		textArea: $('#10'),
		id: 2,
	},
	eleven: {
		begin: '11:00:00',
		end: '11:59:59',
		textArea: $('#11'),
		id: 3,
	},
	twelve: {
		begin: '12:00:00',
		end: '12:59:59',
		textArea: $('#12'),
		id: 4,
	},
	one: {
		begin: '13:00:00',
		end: '13:59:59',
		textArea: $('#01'),
		id: 5,
	},
	two: {
		begin: '14:00:00',
		end: '14:59:59',
		textArea: $('#02'),
		id: 6,
	},
	three: {
		begin: '15:00:00',
		end: '15:59:59',
		textArea: $('#03'),
		id: 7,
	},
	four: {
		begin: '16:00:00',
		end: '16:59:59',
		textArea: $('#04'),
		id: 8,
	},
	five: {
		begin: '17:00:00',
		end: '17:59:59',
		textArea: $('#05'),
		id: 9,
	},
};

// Save Events to localstorage
