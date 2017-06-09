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

function validForm(num) {
  if (num>0 && num<1000) {
    return true;
  }
  else {
    return false;
  }
}


//UI logic here
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    var submittedNum = parseInt($("#inputNum").val());
    if (validForm(submittedNum)) {
      displayResults(pingPong(submittedNum));
    } else {
      $("#inputNum").popover('show');
    }

  }); // end of submit listener

  //validation on input text field
  $('#inputNum').on('input', function() {
  	var input=$(this);
    var re = /(?!^\d+$)^.+$/;
    if (input.val()<1 || input.val()>1000 || input.val().match(re) ){
      $("#submitButton").prop('disabled', true);
      input.popover('show');}
    else {
      $("#submitButton").prop('disabled', false);
      input.popover('hide');
    }
  }); // end of input event listener

  $("#resetButton").click(function(){
    $("#results").text("");
    $("div.results").hide();

  });

});

function displayResults(resultArray){
  $.each(resultArray, function(index, value){
      var tempString = ++index + ": " + value + "<br>";
      $("#results").append(tempString);
      //$("#results").append('<p>');
      //$("#results p").append('<center>');
      //$("#results p center").append('<center>');

      //.append($'<center>').text(++index + ": " + value);
  });
  $("div.results").show();
}
