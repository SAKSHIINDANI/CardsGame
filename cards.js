var arr = [
  "red",
  "black",
  "pink",
  "yellow",
  "blue",
  "orange",
  "green",
  "maroon",
  "grey",
  "violet",
  "red",
  "black",
  "pink",
  "yellow",
  "blue",
  "orange",
  "green",
  "maroon",
  "grey",
  "violet",
];
let firstcol = "";
let secondcol = "";
let count = 0;
var cards = document.querySelectorAll(".card");
var card = document.querySelectorAll(".a");

for (let i = 0; i < card.length; i++) {
  const ind = Math.floor(Math.random() * arr.length);
  card[i].style.backgroundColor = arr[ind];
  arr.splice(ind, 1);
}

for (let i = 0; i < card.length; i++) {
  document.querySelectorAll(".card")[i].addEventListener("click", fliper);
}
function fliper() {
  this.classList.toggle("flip");
  count++;
  if (count == 1) {
    firstcol = this.children[0].style.backgroundColor;
  }
  if (count == 2) {
    secondcol = this.children[0].style.backgroundColor;
    setTimeout(check, 500);
  }
}
function check() {
  if (firstcol == secondcol) {
    for(let i=0;i<cards.length;i++){
      if(cards[i].classList.contains("flip")){
        cards[i].style.visibility = "hidden";
      }
    }
  }
  else{
    for(let i=0;i<cards.length;i++){
      if(cards[i].classList.contains("flip")){
        cards[i].classList.toggle("flip");
      }
    }
  }
  count = 0;
}
