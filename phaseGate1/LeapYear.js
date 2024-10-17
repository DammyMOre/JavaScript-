let result = "false";

let leapYear = 1200;

function isLeapYear(year){

if(year % 4 == 0) result = true;
else
 if(year % 4 != 0) result = false;

return result;

}

console.log(isLeapYear(result));
