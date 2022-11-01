// DOM List

const displayResut = document.querySelector(".istcharac");
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
  console.log();

  if (charId1 == "0") {
    alert("You did not choose any character....");
    return false;
  }

  let totgender = [];
  //SET API OBJECT TO LOCAL STORAGE

  localStorage.setItem("weight", JSON.stringify(newResponse));
  let getWeightFromLocalStor = JSON.parse(localStorage.getItem("weight"));

  let nweight = JSON.parse(getWeightFromLocalStor.mass);
  let nwheight = JSON.parse(getWeightFromLocalStor.height);
  let nwgender = getWeightFromLocalStor.gender;

  totalweight.push(nweight);
  totalheight.push(nwheight);
  totgender.push(nwgender);

  let newtotalwaight = 0;
  for (let i = 0; i < totalweight.length; i++) {
    newtotalwaight += totalweight[i];
  }

  let newtotalheight = 0;
  for (let i = 0; i < totalheight.length; i++) {
    newtotalheight += totalheight[i];
  }
  let newtotgender = "";
  for (let i = 0; i < totgender.length; i++) {
    newtotgender += totgender[i];
  }

  //DISPLAY SUMMARY
  summary.innerHTML = ` <h2>Total height is: ${newtotalwaight} cm <h2/><h2>Total weight is: ${newtotalheight} kg<h2/><h3> Genders of last character: ${newtotgender}<h3/> `;

  const displayDiv = document.createElement("div");
  //ADDING DISPLAY WITH CSS
  displayDiv.classList.add("displaydiv");

  displayDiv.innerHTML = `<h4>Name: ${getWeightFromLocalStor.name}<br>Gender: ${getWeightFromLocalStor.gender}<br>Height: ${getWeightFromLocalStor.height}
    <br>Mass: ${getWeightFromLocalStor.mass}<br>Hair-colo: ${getWeightFromLocalStor.hair_color} </h4>`;
  displayResut.appendChild(displayDiv);

  const deletbtn = document.createElement("button");
  //ADDING DISPLAY WITH CSS
  deletbtn.classList.add("newdeletbtn");
  deletbtn.innerText = "Delete";
  displayDiv.appendChild(deletbtn);

  //DELET ITEAM
  deletbtn.addEventListener("click", () => {
    let parent = displayResut;
    let chield = parent.getElementsByTagName("div")[0];
    parent.removeChild(chield);
    alert(`You have been removed: ${getWeightFromLocalStor.name}`);
  });

  // CONDITION FOR SAME ITEAM REAPETED

  //DISPLAY IMAGE ALL IMAGE
  if (charId1 == 1) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/LukeSkywalker.jpeg");
    displayDiv.appendChild(image);
  }

  if (charId1 == 2) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/c-3po.jpg");
    displayDiv.appendChild(image);
  }

  if (charId1 == 3) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/chawbecca.jpg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 4) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/darthvader.jpeg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 5) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/leiaorgana.jpg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 6) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/berulars.jpg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 7) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/kamlabi.jpg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 8) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/BiggsDarklighter.jpeg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 9) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/obion.jpg");
    displayDiv.appendChild(image);
  }
  if (charId1 == 10) {
    const image = document.createElement("img");
    image.setAttribute("src", "/Image/Oenlars.jpg");
    displayDiv.appendChild(image);
  }
}
