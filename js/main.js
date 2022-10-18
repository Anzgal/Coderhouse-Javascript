async function fetchQuestions() {
  try {
    const response = await fetch(
      "https://anzgal.github.io/Coderhouse-Javascript/questions.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const questionsFetched = await fetchQuestions();

  const quiz = document.getElementById("quiz-container");
  const answerElements = document.getElementsByClassName("answer");
  const questionElement = document.getElementById("question");
  const a_content = document.getElementById("a_content");
  const b_content = document.getElementById("b_content");
  const c_content = document.getElementById("c_content");
  const d_content = document.getElementById("d_content");
  const submitButton = document.getElementById("submit");
  const responseData = {
    time: Date.now(),
    correctAnswers: 0,
    responses: [],
  };
  let currentQuestion = 0;
  let score = 0;
  const clearAnswers = () => {
    [...answerElements].forEach((answer) => (answer.checked = false));
  };
  const getSelected = () => {
    let answer;
    [...answerElements].forEach((answerElement) => {
      answerElement.checked && (answer = answerElement.id);
    });
    return answer;
  };
  const loadQuestion = () => {
    clearAnswers();
    const { question, a, b, c, d } = questionsFetched[currentQuestion];
    questionElement.innerText = question;
    a_content.innerText = a;
    b_content.innerText = b;
    c_content.innerText = c;
    d_content.innerText = d;
  };
  loadQuestion();
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === questionsFetched[currentQuestion].correct) {
        score++;
      }
      responseData.responses.push({
        question: questionsFetched[currentQuestion].question,
        answer: answer,
        questionIndex: currentQuestion,
      });
      currentQuestion++;
      if (currentQuestion < questionsFetched.length) {
        loadQuestion();
      } else {
        responseData.correctAnswers = score;
        const localObject = JSON.parse(localStorage.getItem("responses"));
        localStorage.setItem(
          "responses",
          JSON.stringify([...(localObject || []), responseData])
        );
        let responsesHTML = "";
        localObject.forEach((result) => {
          let resultDate = new Date(result.time);
          responsesHTML =
            responsesHTML + "<tr>" + `<td>${resultDate.toLocaleString()}</td>` + `<td>${result.correctAnswers}/${result.responses.length}</td>` + "</tr>";
        });
        Swal.fire({
          title: "Buen trabajo!",
          text: `Tuviste ${score} preguntas correctas de ${questionsFetched.length}`,
          icon: "success",
          html: `<p>Tuviste ${score} preguntas correctas de ${questionsFetched.length}</p>` + "<p><b>Resultados anteriores</b>:</p>" + "<table>" + "<tr><th>Fecha</th><th>Resultado</th></tr>" + responsesHTML + "</table>",
          confirmButtonText: "Jugar de nuevo",
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      }
    }
  });
}

main();
