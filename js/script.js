let body = document.body;
let topBg = document.getElementById("top-bg");

let card = document.getElementsByClassName("card");
let h1 = document.querySelectorAll("h1");
let span = document.querySelectorAll("span");
let h2 = document.querySelectorAll("h2");
let p = document.querySelectorAll("p.p-change");
/*
for (var i = 0; i < list.length; i++) {
    list[i].style.color = "white";
}
*/

let checkbox = document.getElementById("checkbox");

checkbox.addEventListener('click', toggle);

function toggle(){
  if (checkbox.checked == true) {
    body.style.backgroundColor = "hsl(230, 17%, 14%)"
    topBg.style.backgroundColor = "hsl(232, 19%, 16%)"; 
    for (var i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "hsl(228, 28%, 20%)"; 
    }
    for (var i = 0; i < h1.length; i++) {
      h1[i].style.color = "hsl(0, 0%, 100%)"
    }
    for (var i = 0; i < span.length; i++) {
      span[i].style.color = "hsl(0, 0%, 100%)"
    }
    for (var i = 0; i < h2.length; i++) {
      h2[i].style.color = "hsl(0, 0%, 100%)"; 
    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "hsl(228, 34%, 66%)"; 
    }
  }
  else {
    body.style.backgroundColor = "hsl(0, 0%, 100%)"; 
    topBg.style.backgroundColor = "hsl(225, 100%, 98%)"; 
    for (var i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "hsl(227, 47%, 96%)"; 
    }
    for (var i = 0; i < h1.length; i++) {
      h1[i].style.color = "hsl(230, 17%, 14%)"
    }
    for (var i = 0; i < span.length; i++) {
      span[i].style.color = "hsl(230, 17%, 14%)"
    }
    for (var i = 0; i < h2.length; i++) {
      h2[i].style.color = "hsl(228, 12%, 44%)"; 
    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "hsl(228, 12%, 44%)"; 
    }

  }
}

/* 
- Very Dark Blue (BG): hsl(230, 17%, 14%)
- Very Dark Blue (Top BG Pattern): hsl(232, 19%, 15%)
- Dark Desaturated Blue (Card BG): hsl(228, 28%, 20%)
- Desaturated Blue (Text): hsl(228, 34%, 66%)
- White (Text): hsl(0, 0%, 100%)
*/