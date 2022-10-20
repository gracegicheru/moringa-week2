
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
function checkLeapYear(year) {
    valid = false;
    // is number evenly divisible by 4
    divisibleBy4 = year%4;
    // is number evenly divisible by 100
    divisibleBy100 = year%100;
    // is number evenly divisible by 400
    divisibleBy400 = year%400;

    if (divisibleBy4 != 0) {
        // not a leap year
        return valid = false;
    } else if (divisibleBy100 != 0) {
        //Is a Leap year
        return valid = true;
    } else if (divisibleBy400 != 0) {
        //Is not Leap year.
        return valid = false;
    } else {
        //Not a leap year
        return valid = true;
    } 
}
function checkValidDays(month,day,year) {
    var validDays = ["31","28","31","30","30","30","31","31","30","31","30","31"];

    // check if the user has selected valid day for that month
    // e.g. April has 30 days not 31
    // get the valid date of the month
    valid = true;
    // convert variables to integers
    intMonth = parseInt(month);
    intDay = parseInt(day);
    intYear = parseInt(year);

    // decrement to adjust with array index. Important!
    intMonth--;
    validDate = validDays[intMonth];

    // if the month selected is february, and
    // date is 29, check if it was a leap year
    if(intMonth === 1 && intDay === 29 ){
    
        if (checkLeapYear(intYear) === true) {
            //console.log("Must have been a leap year");
            return valid = true;
        } else {
            return valid = false;
        }
    } else {
        if (intDay <= 0 || intDay > validDate){
            return valid = false;
        }
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