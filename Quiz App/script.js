const quizData = [
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
      answer: "Document Object Model"
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Oracle"],
      answer: "Netscape"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "<!-- -->"],
      answer: "//"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach(option => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      li.appendChild(btn);
      optionsEl.appendChild(li);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
  }
  
  nextBtn.addEventListener("click", () => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    }
  });
  
  loadQuestion();
  