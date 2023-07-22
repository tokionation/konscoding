const quizData = [
    {
      question: "Qu'est-ce que HTML signifie ?",
      choices: ["a) Hyperlinks and Text Markup Language", "b) Home Tool Markup Language", "c) Hyper Text Markup Language"],
      correctAnswer: "c",
    },
    {
      question: "Quelle balise est utilisée pour créer un lien hypertexte en HTML ?",
      choices: ["a) <link>", "b) <a>", "c) <href>"],
      correctAnswer: "b",
    },
    // Ajouter plus de questions ici...
  ];
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitBtn = document.getElementById("submitBtn");
  const resultElement = document.getElementById("result");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = `${currentQuestion.question}`;
  
    choicesElement.innerHTML = ""; // Effacer les anciens choix
  
    currentQuestion.choices.forEach((choice) => {
      const choiceElement = document.createElement("label");
      choiceElement.innerHTML = `<input type="radio" name="answer" value="${choice.charAt(0).toLowerCase()}"> ${choice}`;
      choicesElement.appendChild(choiceElement);
    });
  }
  
  loadQuestion(); // Charger la première question
  
  submitBtn.addEventListener("click", () => {
    const selectedChoice = document.querySelector("input[name='answer']:checked");
    if (selectedChoice) {
      const userAnswer = selectedChoice.value;
      if (userAnswer === quizData[currentQuestionIndex].correctAnswer) {
        score++;
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
  });
  
  function showResult() {
    resultElement.textContent = `Vous avez obtenu ${score} sur ${quizData.length} questions.`;
  }
  