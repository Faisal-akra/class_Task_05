var user =  document.getElementById("user-d.o.b");
var years = document.getElementById('years');
var months = document.getElementById('months');
var days = document.getElementById('days');




function calculate() {
      years.textContent = user.value;
      user.value = ''

}

