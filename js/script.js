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

  $('#inputNum').on('input', function() {
  	var input=$(this);
  	//var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  	//var is_email=re.test(input.val());
  	//if(is_email){input.removeClass("invalid").addClass("valid");}
  	//else{input.removeClass("valid").addClass("invalid");}
    var re = /(?!^\d+$)^.+$/;
    if (input.val()<1 || input.val()>1000 || input.val().match(re) ){
      $("#submitButton").prop('disabled', true);
      input.popover('show');}
    else {
      $("#submitButton").prop('disabled', false);
      input.popover('hide');
    }

  });


});




function displayResults(resultArray){
  $.each(resultArray, function(index, value){
            $("#results").append(++index + ": " + value + '<br>');
        });
  // $("#results").text(resultArray);
}
