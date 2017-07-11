$(document).ready(function() {

  $("#formOne").submit(function(event) {

 var countTo = parseInt($("#countTo").val());//grab number from form and save to a variable
 var countBy = parseInt($("#countBy").val());
 var numbers = [];//initalizes an empty array

 if(isNaN(countTo) === true || isNaN(countBy) === true) {
   alert("Please enter a number");
 }
 else if(countTo<= 0|| countBy <= 0) {
   alert("Please enter a positive number");
 }
 else if(countTo < countBy) {
   alert("Please make sure your count to number is greater than count by");
 }
 else {
   for (var index = 0, i = 0; index <= countTo; index += countBy, i++) {
     numbers[i] = index;
 }

alert(numbers);
    event.preventDefault();
}
  });
});
