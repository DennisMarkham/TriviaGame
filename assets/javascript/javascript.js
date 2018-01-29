
var unanswered = 10;
var correct = 0
var wrong = 0


var question1 = document.myForm.q1.value;
	var question2 = document.myForm.q2.value;
	var question3 = document.myForm.q3.value;
	var correct = 0;

console.log(question1);

$(".correct").on("click", function () {
correct++;
unanswered--;
console.log(correct);
});

$(".wrong").on("click", function () {
wrong++;
unanswered--;
console.log(wrong);
});



setTimeout(function(){

        $("body").text("Time's up.  You got " + correct + " correct, " + wrong + " wrong, and left " + unanswered + " unanswered.");
        console.log("test");
      }, 60 * 1000);



