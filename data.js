<!DOCTYPE html>
<html>
<head>
  <title>Word Family</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1 id="title"></h1>
</header>

<section class="container">

  <div class="card">
    <h2>Words</h2>
    <p id="words"></p>
    <img src="https://via.placeholder.com/120">
  </div>

  <div class="card">
    <h2>Sentence</h2>
    <p id="sentence"></p>
  </div>

  <div class="card">
    <h2>Quiz</h2>
    <p id="quiz"></p>
    <button onclick="show()">Show Answer</button>
    <p id="answer"></p>
  </div>

</section>

<a href="level1.html">⬅ Back</a>

<script src="data.js"></script>
<script>

const order = ["at","an","ap","ad","ag","am","ab","ack","and","ang","ank","ash","ast","atch"];

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const data = families[name];

document.getElementById("title").innerText = "-" + name + " Family";
document.getElementById("words").innerText = data.words.join(" · ");
document.getElementById("sentence").innerText = data.sentence;
document.getElementById("quiz").innerText = data.quiz;

function show(){
  document.getElementById("answer").innerText = data.answer;
}

// 自动Next
const index = order.indexOf(name);
if(index !== -1 && index < order.length - 1){
  const next = order[index + 1];
  const btn = document.createElement("a");
  btn.href = "family.html?name=" + next;
  btn.innerText = "Next →";
  document.body.appendChild(btn);
} else {
  const btn = document.createElement("a");
  btn.href = "level1.html";
  btn.innerText = "🏁 Finish";
  document.body.appendChild(btn);
}

</script>

</body>
</html>
