const dateInput = document.getElementById('date');
  
const today = new Date();
today.setFullYear(today.getFullYear() - 9); 

const maxDate = today.toISOString().split('T')[0];

dateInput.max = maxDate;