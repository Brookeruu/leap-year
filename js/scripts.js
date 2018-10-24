
function isItLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return (year + " is a leap year");
  }
  else if (year % 100 === 0 && year % 400 === 0) {
    return (year + " is a leap year");
  }
  else {return (year + " is not a leap year");}
}

$(document).ready(function() {
  $("#leapYearForm").submit(function(event) {
    event.preventDefault();
    var inputYear = parseInt($("#leapYearInput").val());
    var result = isItLeapYear(inputYear);
    $("#leapYearResult").text(result);
    console.log(result);
  });
});
