// ** SELECTEURS **
// document.querySelector("h4").style.background = "yellow";
// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "yellow";

//**clickEvent**
const questionCOntainer = document.querySelector(".click-event"); //. car c'est comme css avec les points
const btn1 = document.querySelector("#btn-1"); //premiere technique
const btn2 = document.getElementById("btn-2"); //deuxieme (meilleur)
const response = document.querySelector("p");

console.log(response);

questionCOntainer.addEventListener("click", () => {
  //premier pramètre = type d'évenement (scroll , input etc..)
  //console.log("Click ! "); //console log pour voir si ca marche et bien pointer
  //plus pratique pour le css | toogle quand tu double click ca s'enleve |ya add aussi
  questionCOntainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});
