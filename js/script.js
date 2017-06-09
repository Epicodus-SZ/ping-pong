//BIZ logic here
function evalNum(num){
  if (num%15===0) return "ping-pong";
  if (num%5===0) return "pong";
  if (num%3===0) return "ping";
  return num;
}

function pingPong(num){
  return Array.from(Array(num)
              .keys())
              .map(x => ++x) //arrow functions! .map(function(event){return ++event;});
              .map(x => evalNum(x));
}



//UI logic here
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();

    displayResults(pingPong(parseInt($("#inputPong").val())));
  }); // end of submit listener
});

function displayResults(resultArray){
  $.each(resultArray, function(index, value){
            $("#results").append(++index + ": " + value + '<br>');
        });
  // $("#results").text(resultArray);
}
