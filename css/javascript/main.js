
function validMonth(month){
    // confirm month is not greater than 12 and less than 1
    valid = true;
    intMonth = parseInt(month);

    if(intMonth <=0 || intMonth > 12){
        return valid = false;
    }

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