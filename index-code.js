// manually change font size
let currentPt = 12;

  function updateParagraphFont() {
    document.querySelectorAll("p").forEach(p => {
      p.style.fontSize = currentPt + "pt";
    });
  }

  function increaseFont() {
    currentPt += 1;
    if (currentPt > 20) currentPt = 20;
    updateParagraphFont();
  }

  function decreaseFont() {
    currentPt -= 1;
    if (currentPt < 8) currentPt = 8;
    updateParagraphFont();
  }


updateParagraphFont();