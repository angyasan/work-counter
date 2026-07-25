let count = localStorage.getItem("workCount") || 1066;

document.getElementById("count").textContent = count;

let currentType = "";
let nightType = "";

document.getElementById("startBtn").onclick = function() {
  document.getElementById("appArea").classList.remove("hidden");
  document.getElementById("startBtn").classList.add("hidden");
};


// 昼勤
function selectDay() {

  currentType = "day";
document.getElementById("nightArea").classList.add("hidden");
  document.getElementById("inputArea").classList.remove("hidden");

  document.getElementById("firstLabel").textContent = "午前";
  document.getElementById("secondLabel").textContent = "午後";

  let date = new Date();

  let week = ["日","月","火","水","木","金","土"];

  document.getElementById("title").textContent =
    "出勤" + count + "日目 " + week[date.getDay()] + "曜日";

}


// 夜勤
function selectNight() {

  document.getElementById("nightArea").classList.remove("hidden");

}


// 夜勤種類
function selectNightType(type) {

  nightType = type;
  currentType = "night";

  document.getElementById("inputArea").classList.remove("hidden");

  let date = new Date();

  let week = ["日","月","火","水","木","金","土"];

  document.getElementById("title").textContent =
    "出勤" + count + "日目 " +
    week[date.getDay()] + "曜日夜勤" + nightType;

}


// X投稿
function postX() {

  let title = document.getElementById("title").textContent;

  let firstLabel = document.getElementById("firstLabel").textContent;

  let secondLabel = document.getElementById("secondLabel").textContent;

  let first = document.getElementById("first").value;

  let second = document.getElementById("second").value;

  let overtime = document.getElementById("overtime").value;


 let text =
`${title}

${firstLabel} ${first}

${secondLabel} ${second}

残業${overtime}`;


  let url =
  "https://twitter.com/intent/tweet?text=" +
  encodeURIComponent(text);


  window.open(url, "_blank");

}
