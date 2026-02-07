let words = ["エンジニア","写真家"];
let i = 0, j = 0;
let speed = 200;

function type() {
  if (j < words[i].length) {
    text.textContent += words[i][j++];
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (j > 0) {
    text.textContent = words[i].slice(0, --j);
    setTimeout(erase, speed / 2);
  } else {
    i = (i + 1) % words.length; // move to next word (loop)
    setTimeout(type, speed);
  }
}

type();
