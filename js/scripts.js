$(document).ready(function() {
  var animal = prompt("Which animal would you like to learn about today? You can learn about snakes, turtles, or insects!");

  if (animal === "turtles" || animal === "turtle") {
    $('#turtles').show();
  } else if (animal === "snakes" || animal === "snake"){
    $('#snakes').show();
  } else if (animal === "insects" || animal === "insect"){
    $('#insects').show();
  }
});
