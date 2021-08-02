const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const coutndownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

//Set Date input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

//Take values from Form input
function updateCountDown(e) {
	e.preventDefault();
	countdownTitle = e.srcElement[0].value;
	countdownDate = e.srcElement[1].value;
	console.log(countdownTitle, countdownDate)
	//Get number version of current Date, updateDOM
	countdownValue = new Date(countdownDate).getTime();
	console.log('countdown value: ', countdownValue);

}

// Event Listeners
countdownForm.addEventListener('submit', updateCountDown);