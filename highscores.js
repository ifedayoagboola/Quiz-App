const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(locaStorage.getItem("highScores")) || [];

highScores
  .map((score) => {
    return `<li class="high-score"> ${score.name}-${score.score} </li>`;
  })
  .joint("");
