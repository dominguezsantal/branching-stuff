$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 16) {
    $('#over-16').show();
  } else if (age === 16) {
    alert("Congratulations and don't vote for DJT!");
    $('#just-16').show();

  } else {
    alert("Become an informed voter!");
    $('#under-16').show();
    }


});
