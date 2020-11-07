let question = document.getElementById('question'),
    answer   = document.getElementById('answer'),
    buttonShow   = document.getElementById('show'),
    buttonHide   = document.getElementById('hide'),
    buttonNext   = document.getElementById('next');


// Flip from question to answer

buttonShow.addEventListener("click", showAnswer)
buttonHide.addEventListener("click", hideAnswer)

function showAnswer() {
    question.style.display = "none";
    answer.style.display = "block";
    buttonHide.style.display = "inline-block";
    buttonShow.style.display = "none";
}

function hideAnswer() {
    question.style.display = "block";
    answer.style.display = "none";
    buttonHide.style.display = "none";
    buttonShow.style.display = "inline-block";
}

// Retrieve infos from json in a .js file
let i = Math.floor(Math.random() * questions.length);

question.innerHTML = questions[i].cardfront;
answer.innerHTML = questions[i].cardback;

buttonNext.addEventListener("click", addOne);

function addOne(){
    i = Math.floor(Math.random() * questions.length);
    question.innerHTML = questions[i].cardfront;
    answer.innerHTML = questions[i].cardback;
    question.style.display = "block";
    answer.style.display = "none";
    buttonHide.style.display = "none";
    buttonShow.style.display = "inline-block";
}

