// ANIMEJS

var lineDrawing = anime({
  targets: ".textWriting .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: 300,
});

// ANIMEJS

// Lorsque la souris survole un lien cliquable, la souris change et reviens à la normal après

const allA = document.body.querySelectorAll("a");

for (i = 0; i < allA.length; i++) {
  allA[i].style.cursor = "url('../img/pointer/pointer_cursor.svg'), auto";
}

document.body.style.cursor = "url('../img/pointer/cursor_black.svg'), auto";
