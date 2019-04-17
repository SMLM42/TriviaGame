var ques = ""; var a = ""; var b = ""; var c = ""; var d = ""
var correct = 0; var incorrect = 0
var q1 = ["Who was the first Primarch to fall to Chaos?", "Horus", "Fulgrim", "Lorgar", "Konrad Curze", "3", "Lorgar.png"]
var q2 = ["On what planet did the infamous drop-site massacre take place?", "Calth", "Istvaan", "Olympia", "Cadia", "2", "Istvaan.png"]
var q3 = ["Which traitor legion was not present at the drop-site massacre?", "Word-Bearers", "Iron Warriors", "Death Guard", "Thousand Sons", "4", "1kSons.png"]
var q4 = ["Which of these loyalist legions was not present at the drop-site massacre?", "White Scars", "Iron Hands", "Salamanders", "Raven Guard", "1", "WhiteScars.png"]
var q5 = ["Who became regent of Imperium Secundus?", "Sanguinius", "Roboute Guilleman", "Lion El'Johnson", "Leman Russ", "1", "Sanguinius.png"]
var q6 = ["Who was the last Primarch to fall to Chaos?", "Angron", "Fulgrim", "Magnus", "Proturabo", "3", "Magnus.png"]
var q7 = ["Which Primarch was the first to recieve an official model?", "Fulgrim", "Lion El'Johnson", "Angron", "Rogal Dorn", "3", "Angron.png"]
var q8 = ["Which legion was sent by The Emperor to punish Magnus?", "Space Wolves", "Ultramarines", "Imperial Fists", "Dark Angels", "1", "SWolves.png"]
var q9 = ["At the start of the Horus Heresy, which legion was the largest?", "Iron Warriors", "Ultramarines", "Imperial Fists", "Sons of Horus", "2", "Ultra.png"]
var q10 = ["Which of the following is not an infamously heated post-Heresy rivalry?", "Sons of Horus and Blood Angels", "Salamanders and Alpha Legion", "Iron Warriors and Imperial Fists", "Ultramarines and Word Bearers", "2", "Salamanders.png"]
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
var rightAnswer = 0; var image = "";
var intervalID; var time = 26;
$(".endgame").hide(); $(".answer").hide()
function generate() {
    if (questions.length > 0) {
        $(".game").show(); $(".answer").hide(); $(".endgame").hide()
        var i = [Math.floor(Math.random() * (questions.length))]
        // console.log(questions[i])
        var current = questions[i]
        $("#question").text(current[0]); $("#A").text(current[1]); $("#B").text(current[2]); $("#C").text(current[3]); $("#D").text(current[4]); rightAnswer = (current[5])
        $(".answer").text("Correct answer was: " + current[(current[5])])
        questions.splice(i, 1)
        image = ("assets/images/" + current[6])
        $("#pic").attr("src", image)
        $("#pic").removeClass("mx-auto d-block")
        // console.log(questions)
        console.log(correct)
        time = 26
    }
    else {
        $("#pic").removeClass("mx-auto d-block")
        $(".endgame").show()
        $(".correct").text("Correct Answers: " + correct)
        $(".incorrect").text("Incorrect Answers: " + incorrect)
        correct = 0; incorrect = 0;
        $(".game").hide(); $(".answer").hide()
        questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
        setTimeout(generate, 5000)
    }
}

function timer() {
    time--;
    $("#timer").text(time)
    if (time === 0 && questions.length > 0) {
        $(".game").hide()
        $(".answer").show()
        $("#pic").addClass("mx-auto d-block")
        setTimeout(generate, 2000);
        incorrect++;
    }
    else if (time === 0) {
        $(".game").hide()
        $(".answer").show()
        $("#pic").addClass("mx-auto d-block")
        questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
        incorrect++;
        setTimeout(generate, 2000)

    }
}
function stop() {
    clearInterval(intervalId)
}
console.log(questions); generate();; intervalId = setInterval(timer, 1000); timer()
$(".button").on("click", function () {

    if (($(this).val()) === rightAnswer) {
        $(".answer").text("Correct!")
        $(".game").hide()
        $(".answer").show()
        $("#pic").addClass("mx-auto d-block")
        correct++;
        setTimeout(generate, 2000);
    }
    else {
        incorrect++;
        $(".game").hide()
        $(".answer").show()
        $("#pic").addClass("mx-auto d-block")
        setTimeout(generate, 2000);
    }
    console.log("c" + correct)
    console.log("i" + incorrect)
})