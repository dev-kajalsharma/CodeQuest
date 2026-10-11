/* ================= RESULT PAGE LOGIC ================= */
const resultData=JSON.parse(localStorage.getItem("quizResult")||"null");
if(!resultData){ window.location.href="index.html"; }

const $=id=>document.getElementById(id);
$("resultTitle").textContent=`${resultData.topic} • ${resultData.level.charAt(0).toUpperCase()+resultData.level.slice(1)}`;
$("resultSubtitle").textContent="Here is how you performed. Review your answers whenever you’re ready.";
$("score").textContent=`${resultData.correct}/${resultData.total}`;
$("percentage").textContent=`${resultData.percentage}%`;
$("attempted").textContent=resultData.attempted;
$("skipped").textContent=resultData.skipped;
$("correct").textContent=resultData.correct;
$("incorrect").textContent=resultData.incorrect;
$("timeTaken").textContent=formatTime(resultData.totalTime);

function formatTime(seconds){
  return `${Math.floor(seconds/60).toString().padStart(2,"0")}:${(seconds%60).toString().padStart(2,"0")}`;
}
const motivationMessages={
  15:["Great job! 🌟 You’re building a strong understanding. Keep practicing!","Nice work! 💪 You’re on the right track. Keep pushing forward!"],
  17:["Excellent work! 🔥 Your knowledge is really showing. Keep going!","Fantastic performance! 🌟 Your hard work is paying off!"],
  19:["Outstanding! 🏆 You’re just one step away from a perfect score!","Almost perfect! 🚀 That was an impressive performance!"],
  20:["Perfect score! 🎉 Absolutely amazing — you’ve mastered this quiz!","20/20! 🏆 Incredible work! Keep that winning mindset!"]
};
function getMotivation(score){
  const messages=score===20?motivationMessages[20]:score===19?motivationMessages[19]:score>=17?motivationMessages[17]:motivationMessages[15];
  return messages[Math.floor(Math.random()*messages.length)];
}
if(resultData.correct>=15){ $("motivationBox").classList.remove("hidden"); $("motivationText").textContent=getMotivation(resultData.correct); }

const reviewPanel=$("reviewPanel");
const reviewList=$("reviewList");
const reviewCount=$("reviewCount");
const reviewTitle=$("reviewTitle");
const reviewIntro=$("reviewIntro");
let reviewOpen=false;
let activeFilter="incorrect";

function renderReview(filter){
  activeFilter=filter;
  const details=Array.isArray(resultData.details)?resultData.details:[];
  const items=details.filter(x=>x.status===filter);
  reviewCount.textContent=items.length;
  const labels={incorrect:"Incorrect answers",correct:"Correct answers",skipped:"Skipped questions"};
  reviewTitle.textContent=labels[filter];
  reviewIntro.textContent=filter==="incorrect"?"See what you selected and the correct answer.":filter==="correct"?"Review the questions you answered correctly.":"These questions were left unanswered.";
  reviewList.innerHTML="";

  if(!details.length){
    const empty=document.createElement("div");
    empty.className="empty-review";
    empty.textContent="Answer review data is not available for this attempt. Please start a new quiz to enable answer review.";
    reviewList.appendChild(empty);
    return;
  }

  if(!items.length){
    const empty=document.createElement("div");
    empty.className="empty-review";
    empty.textContent=filter==="incorrect"?"No incorrect questions in this attempt. 🎉":filter==="correct"?"No correctly answered questions in this attempt.":"No questions were skipped in this attempt.";
    reviewList.appendChild(empty);
    return;
  }

  items.forEach(item=>{
    const card=document.createElement("article");
    card.className=`review-item ${item.status}`;

    const questionRow=document.createElement("div");
    questionRow.className="review-q";
    const qNumber=document.createElement("span");
    qNumber.textContent=`Q${item.index+1}`;
    const qText=document.createElement("strong");
    qText.textContent=item.question;
    questionRow.append(qNumber,qText);
    card.appendChild(questionRow);

    const makeAnswerLine=(label,text,className)=>{
      const row=document.createElement("div");
      row.className=`answer-line ${className}`;
      const labelEl=document.createElement("b");
      labelEl.textContent=label;
      const valueEl=document.createElement("span");
      valueEl.textContent=text;
      row.append(labelEl,valueEl);
      return row;
    };

    if(filter!=="skipped"){
      const selectedText=item.selected===null?"Skipped":`${String.fromCharCode(65+item.selected)}. ${item.options[item.selected]}`;
      card.appendChild(makeAnswerLine("Your answer",selectedText,"user-answer"));
    }else{
      card.appendChild(makeAnswerLine("Status","Skipped","skipped-answer"));
    }

    if(filter==="incorrect"){
      const correctText=`${String.fromCharCode(65+item.correctAnswer)}. ${item.options[item.correctAnswer]}`;
      card.appendChild(makeAnswerLine("Correct answer",correctText,"correct-answer"));
    }

    reviewList.appendChild(card);
  });
}
$("reviewToggle").addEventListener("click",()=>{
  reviewOpen=!reviewOpen; reviewPanel.classList.toggle("hidden",!reviewOpen); $("reviewToggle").textContent=reviewOpen?"Hide Answer Review ↑":"Review My Answers ↓";
  if(reviewOpen){renderReview("incorrect"); reviewPanel.scrollIntoView({behavior:"smooth",block:"start"});}
});
document.querySelectorAll(".review-filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".review-filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderReview(btn.dataset.filter);}));
$("tryAgainBtn").addEventListener("click",()=>{window.location.href="quiz.html";});
$("homeBtn").addEventListener("click",()=>{window.location.href="index.html";});
