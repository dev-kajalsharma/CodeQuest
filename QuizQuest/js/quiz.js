/* ================= QUIZ PAGE LOGIC ================= */
const topic = localStorage.getItem("selectedTopic");
const level = localStorage.getItem("selectedLevel");
const questions = QUESTION_BANK?.[topic]?.[level];

if (!topic || !level || !questions) {
  window.location.href = "index.html";
}

let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
const startTime = Date.now();
let timerInterval = setInterval(updateTimer, 1000);

const topicLevel = document.getElementById("topicLevel");
const timer = document.getElementById("timer");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const progressBar = document.getElementById("progressBar");
const answeredCount = document.getElementById("answeredCount");
const previousBtn = document.getElementById("previousBtn");
const clearBtn = document.getElementById("clearBtn");
const skipBtn = document.getElementById("skipBtn");
const nextBtn = document.getElementById("nextBtn");

topicLevel.textContent = `${topic} • ${level.charAt(0).toUpperCase()+level.slice(1)}`;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2,"0");
  const s = (seconds % 60).toString().padStart(2,"0");
  return `${m}:${s}`;
}
function updateTimer() {
  timer.textContent = formatTime(Math.floor((Date.now()-startTime)/1000));
}
function updateAnsweredCount() {
  answeredCount.textContent = userAnswers.filter(a => a !== null).length;
}
function renderQuestion() {
  const current = questions[currentQuestion];
  questionNumber.textContent = `Question ${currentQuestion+1} of ${questions.length}`;
  questionText.textContent = current.question;
  progressBar.style.width = `${((currentQuestion+1)/questions.length)*100}%`;
  optionsContainer.innerHTML = "";
  current.options.forEach((option,index)=>{
    const button=document.createElement("button");
    button.className="option";
    button.type="button";
    if(userAnswers[currentQuestion]===index) button.classList.add("selected");

    // Build the option with textContent instead of innerHTML.
    // This is important for coding questions because options can contain
    // HTML/CSS/JavaScript such as <p>, <input>, <div>, etc.
    const letter=document.createElement("span");
    letter.className="option-letter";
    letter.textContent=String.fromCharCode(65+index);

    const optionText=document.createElement("span");
    optionText.className="option-text";
    optionText.textContent=String(option);

    button.append(letter, optionText);
    button.addEventListener("click",()=>{ userAnswers[currentQuestion]=index; renderQuestion(); });
    optionsContainer.appendChild(button);
  });
  previousBtn.disabled=currentQuestion===0;
  nextBtn.textContent=currentQuestion===questions.length-1?"Finish ✓":"Next →";
  updateAnsweredCount();
}
function moveNext(){
  if(currentQuestion<questions.length-1){ currentQuestion++; renderQuestion(); }
  else finishQuiz();
}
clearBtn.addEventListener("click",()=>{ userAnswers[currentQuestion]=null; renderQuestion(); });
previousBtn.addEventListener("click",()=>{ if(currentQuestion>0){currentQuestion--;renderQuestion();} });
skipBtn.addEventListener("click",()=>{ userAnswers[currentQuestion]=null; moveNext(); });
nextBtn.addEventListener("click",moveNext);

function finishQuiz(){
  clearInterval(timerInterval);
  const totalTime=Math.floor((Date.now()-startTime)/1000);
  let attempted=0, correct=0;
  const details=questions.map((q,i)=>{
    const selected=userAnswers[i];
    const status=selected===null?"skipped":(selected===q.answer?"correct":"incorrect");
    if(selected!==null){attempted++; if(status==="correct") correct++;}
    return {index:i, question:q.question, options:q.options, selected, correctAnswer:q.answer, status};
  });
  const skipped=questions.length-attempted;
  const incorrect=attempted-correct;
  const percentage=Math.round((correct/questions.length)*100);
  localStorage.setItem("quizResult",JSON.stringify({topic,level,total:questions.length,attempted,skipped,correct,incorrect,percentage,totalTime,details}));
  window.location.href="result.html";
}
renderQuestion();
