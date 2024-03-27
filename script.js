let box = document.getElementById("box");
box.addEventListener('mouseover', changePosition);
box.addEventListener('mouseover', changeText);
const viewportHeight = window.innerHeight - box.clientHeight;
const viewportWidth = window.innerWidth;

function changePosition() {
  let newLeft = Math.floor(Math.random() * viewportWidth);
  let newTop = Math.floor(Math.random() * viewportHeight);
  
  box.style.marginTop = `${newTop}px`;
  box.style.marginLeft= `${newLeft}px`;

  console.log("left : " +newLeft , " newTop :" + newTop);
}

function changeText() {
  box.innerText = " Finally !!";
}