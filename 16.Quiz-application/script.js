function submitQuiz() {
    let score = 0;

    let answers = document.querySelectorAll("input[type=radio]:checked");

    answers.forEach(ans => {
        score += Number(ans.value);
    });

    document.getElementById("result").innerText =
        "Your Score: " + score + " / 3";
}