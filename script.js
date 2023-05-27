function clearAll() {
  const memeContainer = document.querySelector(".meme-content");
  memeContainer.innerHTML = "";
  const jokeContainer = document.querySelector(".joke-content");
  jokeContainer.innerHTML = "";
  const quoteContainer = document.querySelector(".quote-content");
  quoteContainer.innerHTML = "";
  const riddleContainer = document.querySelector(".riddle-content");
  riddleContainer.innerHTML = "";
}
const memes = [
  "https://www.ixbt.com/img/n1/news/2022/10/5/stepan_large.JPG",
  "https://pcpro100.info/wp-content/uploads/2019/09/post_5d80b02ac7814.jpeg",
  "https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg"
];
const jokes = ["aaaaaaa", "bbbbb", "ccccc"];
const quotes = [
  { quote: "кто обзываеться тот сам так и называется", author: "Жак фреско" },
  { quote: "2yyyhhd", author: "2hhsff" },
  { quote: "3qwqfad", author: "a3qqwa" }
];
// const quotes = ['https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-memy-13.jpg',
//                 'https://kartinkof.club/uploads/posts/2022-03/1648288320_1-kartinkof-club-p-mem-ladno-s-zhak-fresko-1.jpg',
//                 '' 
// ]
const riddles = [
  { question: "1sgq", answer: "1qgqwga" },
  { question: "1aggwa", answer: "1asfgqw" },
  { question: "asf", answer: "2faf" }
];

function rnNumb(len) {
  return Math.floor(Math.random() * len);
}
function getRandomData(data) {
  return data[rnNumb(data.length)];
}

function showMeme() {
  clearAll();
  const memeUrl = getRandomData(memes);
  const memeContainer = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src", memeUrl);
  memeContainer.appendChild(newMeme);
}
function showJoke() {
  clearAll();
  const joke = getRandomData(jokes);
  const jokeContainer = document.querySelector(".joke-content");
  const newJoke = document.createElement("p");
  newJoke.textContent = joke;
  jokeContainer.appendChild(newJoke);
}
function showRiddle() {
  clearAll();
  const riddle = getRandomData(riddles);
  const riddleContainer = document.querySelector(".riddle-content");
  const newRiddle = document.createElement("p");
  newRiddle.textContent = riddle.question;

  const newAnswer = document.createElement("p");
  newAnswer.textContent = riddle.answer;
  newAnswer.setAttribute("id", "riddle-answer");
  newAnswer.hidden = true;

  riddleContainer.appendChild(newRiddle);
  riddleContainer.appendChild(newAnswer);
}

function showAnswer() {
  const newAnswer = document.querySelector("#riddle-answer");
  newAnswer.hidden = false;
}

function showQuote() {
  clearAll();
  const quote = getRandomData(quotes);
  const quoteContainer = document.querySelector(".quote-content");
  const newQuote = document.createElement("p");
  newQuote.textContent = quote.quote;

  const newAuthor = document.createElement("p");
  newAuthor.textContent = quote.author;
  newAuthor.setAttribute("id", "quote-author");

  quoteContainer.appendChild(newQuote);
  quoteContainer.appendChild(newAuthor);
}
// showQuote();
// function showQuote() {
//   clearAll();
//   const quoteUrl = getRandomData(quotes);
//   const quoteContainer = document.querySelector(".quote-content");
//   const newQuote = document.createElement("img");
//   newQuote.setAttribute("src", quoteUrl);
//   quoteContainer.appendChild(newQuote);
// }
// c rfhnbyrf
