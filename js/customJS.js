const text = "Park's PORTFOLIO";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100 + Math.floor(Math.random() * 100));
  }
}
typeWriter();