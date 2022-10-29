// DOM List

const displayResut = document.querySelector("#istcharac1");
const button = document.querySelector(".add-charactor");
const summary = document.querySelector(".summary");
const deletbtn = document.querySelector("#delet");
let hhj = document.getElementsByTagName;

// TOTAL HEIGHT AND WAIGHT
let totalheight = [];
let totalweight = [];

button.addEventListener("click", fetchFunction);
async function fetchFunction() {
  const charId1 = document.querySelector(".kar1").value;
  const response = await fetch(`https://swapi.dev/api/people/${charId1}`);
  const newResponse = await response.json();

  //SET API OBJECT TO LOCAL STORAGE

  localStorage.setItem("waight", JSON.stringify(newResponse));
  let getWeightFromLocalStor = JSON.parse(localStorage.getItem("waight"));

  let nweight = JSON.parse(getWeightFromLocalStor.mass);
  let nwheight = JSON.parse(getWeightFromLocalStor.height);
  totalweight.push(nweight);
  totalheight.push(nwheight);

  let newtotalwaight = 0;
  for (let i = 0; i < totalweight.length; i++) {
    newtotalwaight += totalweight[i];
  }

  let newtotalheight = 0;
  for (let i = 0; i < totalheight.length; i++) {
    newtotalheight += totalheight[i];
  }
  //DISPLAY SUMMARY
  summary.innerHTML = ` <h2>Total height is: ${newtotalwaight} kg<h2/><h2>Total weight is: ${newtotalheight} kg<h2/>`;

  const newelem = document.createElement("div");
  newelem.style.backgroundColor = "red";
  newelem.style.margin = "50px";

  newelem.innerHTML = `<p>Name: ${getWeightFromLocalStor.name}<br>Gender: ${getWeightFromLocalStor.gender}<br>Height: ${getWeightFromLocalStor.height}
    <br>Mass: ${getWeightFromLocalStor.mass}<br>Hair-colo: ${getWeightFromLocalStor.hair_color} </p>`;
  displayResut.appendChild(newelem);

  const deletbtn = document.createElement("button");
  deletbtn.innerText = "Delete";
  newelem.appendChild(deletbtn);
  deletbtn.style.height = "30px";
  deletbtn.style.width = "80px";
  deletbtn.style.margin = "20px";

  //DELET ITEAM
  deletbtn.addEventListener("click", () => {
    let parent = displayResut;
    let chield = parent.getElementsByTagName("div")[0];
    parent.removeChild(chield);
  });

  // CONDITION FOR SAME ITEAM REAPETED

  if (newResponse.name == undefined) {
    alert("You did not choose any character....");
    return false;
  }

  //DISPLAY IMAGE ALL IMAGE
  if (charId1 == 1) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/LukeSkywalker.jpeg");
    newelem.appendChild(image);
  }

  if (charId1 == 2) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/c-3po.jpg");
    newelem.appendChild(image);
  }

  if (charId1 == 3) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/chawbecca.jpg");
    newelem.appendChild(image);
  }
  if (charId1 == 4) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/darthvader.jpeg");
    newelem.appendChild(image);
  }
  if (charId1 == 5) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/leiaorgana.jpg");
    newelem.appendChild(image);
  }
  if (charId1 == 6) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/berulars.jpg");
    newelem.appendChild(image);
  }
  if (charId1 == 7) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/kamlabi.jpg");
    newelem.appendChild(image);
  }
  if (charId1 == 8) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/BiggsDarklighter.jpeg");
    newelem.appendChild(image);
  }
  if (charId1 == 9) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/obion.jpg");
    newelem.appendChild(image);
  }
  if (charId1 == 10) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/Oenlars.jpg");
    newelem.appendChild(image);
  }
}
