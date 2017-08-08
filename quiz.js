function checkAnswer(questionName, correctAnswer) {
  var selectedVal = "";

  var selected = $("input[type='radio'][name='" + questionName + "']:checked");
  selectedVal = selected.val();
  if (selected.length > 0) {
      selectedVal = selected.val();
  }
  if (selectedVal == correctAnswer) {
    if (questionName == "q1") {
      $("#YAY1").show();
    }
    else if (questionName == "q2") {
      $("#YAY2").show();
    }
    else if (questionName == "q3") {
      $("#YAY3").show();
    }
    else if (questionName == "q4") {
      $("#YAY4").show();
    }
    else if (questionName == "q5") {
      $("#YAY5").show();
    }
  }

}

$(document).ready(function(){
  $("#category1").hide();
  $("#category2").hide();
  $("#category3").hide();
  $("#category4").hide();
  $("#category5").hide();

  $("#YAY1").hide();
  $("#YAY2").hide();
  $("#YAY3").hide();
  $("#YAY4").hide();
  $("#YAY5").hide();
})

function showanswer1(){
  $("#category1").show();
  checkAnswer("q1", "a");
}

function showanswer2(){
  $("#category2").show();
  checkAnswer("q2", "d");
}


function showanswer3(){
  $("#category3").show();
  checkAnswer("q3", "d");
}


function showanswer4(){
  $("#category4").show();
  checkAnswer("q4", "b");
}

function showanswer5(){
  $("#category5").show();
  checkAnswer("q5", "c");
}
