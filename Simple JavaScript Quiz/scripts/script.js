function submitAnswers() {
  var total = 5;
  var score = 0;

  // User input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q2"].value;
  var q3 = document.forms["quizForm"]["q3"].value;
  var q4 = document.forms["quizForm"]["q4"].value;
  var q5 = document.forms["quizForm"]["q5"].value;

  // Validation
  for (index = 1; index < total; index++) {
    if (eval("q" + index) == null || eval("q" + index) == "") {
      alert("You forgot to answer, at least, to the question N°" + index + "! Try again...");
      return false;
    }
  }

  // Answers
  var answers = ["a", "a", "b", "d", ""]

  // Check
  for (index = 1; index < total + 1; index ++) {
    if (eval("q" + index) == answers[index - 1]) {
      score += 1;
    }
  }

  // Results
  var results = document.getElementById("results");
  results.innerHTML = "<h2>You scored <span>" + score + "</span> out of <span>" + total + "</span></h>"

  alert("You scored " + score + " out of " + total + "!")

  return false;

}