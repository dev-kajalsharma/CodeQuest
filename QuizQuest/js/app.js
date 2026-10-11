/* ================= HOME PAGE LOGIC ================= */

let selectedTopic = null;
let selectedLevel = null;

const topicGrid = document.getElementById("topicGrid");
const levelSection = document.getElementById("levelSection");
const startQuizBtn = document.getElementById("startQuizBtn");
const selectedTopicLabel = document.getElementById("selectedTopicLabel");

/* Create all topic cards dynamically from the TOPICS array. */
TOPICS.forEach(topic => {
  const card = document.createElement("button");
  card.className = "topic-card";
  card.innerHTML = `
    <div class="topic-icon">${topic.icon}</div>
    <div>
      <strong>${topic.key}</strong>
      <span>${topic.description}</span>
    </div>
  `;

  card.addEventListener("click", () => {
    /* Remove previous selection. */
    document.querySelectorAll(".topic-card").forEach(item => {
      item.classList.remove("selected");
    });

    card.classList.add("selected");
    selectedTopic = topic.key;
    selectedTopicLabel.textContent = `${selectedTopic} selected`;

    /* Show level selection after choosing a topic. */
    levelSection.classList.remove("hidden");
    levelSection.scrollIntoView({ behavior: "smooth", block: "start" });

    updateStartButton();
  });

  topicGrid.appendChild(card);
});

/* Handle Easy / Medium / Hard buttons. */
document.querySelectorAll(".level-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".level-card").forEach(item => {
      item.classList.remove("selected");
    });

    card.classList.add("selected");
    selectedLevel = card.dataset.level;

    updateStartButton();
  });
});

/* Enable Start Quiz only after both choices are made. */
function updateStartButton() {
  startQuizBtn.disabled = !(selectedTopic && selectedLevel);
}

/* Save the user's selection before opening quiz.html. */
startQuizBtn.addEventListener("click", () => {
  localStorage.setItem("selectedTopic", selectedTopic);
  localStorage.setItem("selectedLevel", selectedLevel);

  window.location.href = "quiz.html";
});