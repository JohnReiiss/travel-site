
const texts = [
  "em memórias instagramáveis",
  "into Instagrammable memories",
  "en souvenirs dignes d'Instagram",
  "in Instagram-würdige Erinnerungen",
  "in ricordi da Instagram",
  "インスタ映えする思い出に",
  "인스타그램에올릴수있는추억중",
  "在难忘的回忆中",
  "en recuerdos instagrameables",
  "בזיכרונות אינסטגרם",
  "في الذكريات التي يمكن نشرها على الانستغرام"
];

const span = document.getElementById("typing-text");
let currentTextIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[currentTextIndex];

  if (!isDeleting) {
    span.textContent = currentText.substring(0, currentLetterIndex + 1);
    currentLetterIndex++;

    if (currentLetterIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 5000);
      return;
    }
  } else {
    span.textContent = currentText.substring(0, currentLetterIndex - 1);
    currentLetterIndex--;

    if (currentLetterIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);
