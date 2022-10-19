
function validMonth(month){
    // confirm month is not greater than 12 and less than 1
    valid = true;
    enteredMonth = parseInt(month);

    if(enteredMonth <=0 || enteredMonth > 12){
        return valid = false;
    }

}
function validDay(month){
    // Determine the valid days for the month and retun the value
    var validMonthDays = ["31","28","31","30","30","30","31","31","30","31","30","31"];
    month--;
    return validEndDate = validMonthDays[month];

}

function validation() {
	var dayText = document.getElementById("day").value;
	var monthText = document.getElementById("month").value;
	var yearText = document.getElementById("year").value;
	var male = document.getElementById("male");
	var female = document.getElementById("female");
	var errorMessage = document.getElementById("error-message");

    // convert strings to integers
    day = parseInt(dayText);
    month = parseInt(monthText);
    year = parseInt(yearText);

}