




function calculate() {
var inputDate =  document.getElementById("user-d.o.b").value;

    if(!inputDate) {
        alert("plese select your age ")
        return;
    }

    var dob = new Date(inputDate) //User jo enter karayga wo show hoga
    
    

    var today = new Date(); //Aj ki date

//Years
    var age = today.getFullYear() - dob.getFullYear(); //user  ne jo enter kiya us say (-) karo


//Days:
    var days = today.getDate() - dob.getDate();
    console.log(days);
    

//months:
    var monthDifference = today.getMonth() - dob.getMonth();


    if (monthDifference < 0 || (monthDifference === 0 && days < 0)) {
        age--;
        monthDifference += 12; // Adjust month difference if needed
    }



    
    // Adjust days
    if (days < 0) {
        // If days are negative, take the previous month into account
        var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate(); // Add the total days in the previous month
        monthDifference--; // Decrease month difference
    }

  
 document.getElementById('years').textContent = `your age is ${age} Years ` 
 document.getElementById('months').textContent = `you are ${monthDifference} Months old`
 document.getElementById('days').textContent = `you are ${days} days old`
    
}


