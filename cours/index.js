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

// div > #id > .class > baliseHTML

//-------------------------------------------------
//Mouse Events

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  //event
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px"; //pour linstant pas centre
});

window.addEventListener("mousemove", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)"; //2 fois plus gors
});

window.addEventListener("mouseup", () => {
  //quand tu releve la souris
  mousemove.style.transform = "scale(1) translate(-50%,-50%)"; //2 fois plus gors
  mousemove.style.border = "2px solid teal";
});

questionCOntainer.addEventListener("mouseenter", () => {
  //survole
  questionCOntainer.style.background = "rgba(0,0,0,0.6)";
});

questionCOntainer.addEventListener("mouseout", () => {
  //desurvole
  questionCOntainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------

// **Key Press event**

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key"); //get element pour les id

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  // ring();
});

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

//-----------------------------------------------------------

// **Scroll event

const nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------
//** fromulaire */
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value; //comme ca qu'on recupere donnée
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //la page ne se recharge plus quand tu clique

  if (cgv.checked) {
    //pointe la balise et kinjecter de l'innerHTML (injecte des balise)
    //utilise textCOntent si c'est juste du texte
    document.querySelector("form > div").innerHTML = ` 
     <h3>Pseudo : ${pseudo}</h3>
     <h4>Langage préféré : ${language}</h4>

    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//----------------------------------------

// ** Load Event **
window.addEventListener("load", () => {
  console.log("document chargé !");
});

//----------------------------------------

// ** Les forEach **
//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//--------------------------------------------------------

// addEventListener  Vs onClick

// document.body.onclick = ()=> {
//   console.log("CLick");
// };

//Bubbling ==> fin (de base l'eventListener est paramamètre en mode Bubbling)
document.body.addEventListener(
  "click",
  () => {
    console.log("CLikc1");
  },
  false
);

//par défault c'est false

//UseCapture
document.body.addEventListener(
  "click",
  () => {
    console.log("CLikc2");
  },
  true
);

//--------------------------------------------------

// Stop propagation

questionCOntainer.addEventListener("click", (e) => {
  alert("test");
  e.stopPropagation(); //pour que une fois que tu fait ca arrete les autres
});

// removeEventListeners

//-------------------------------------------------
