const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

//Set Date input Min with Today's Date
const today = new Date().toISOString();
console.log(today);