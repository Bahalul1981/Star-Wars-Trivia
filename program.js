const displayResut = document.querySelector(".istcharac");
const button = document.querySelector(".add-charactor");
const summary = document.querySelector(".summary");
const deletbtn = document.querySelector("#delet");

// TOTAL HEIGHT AND WAIGHT

let totalheight = [];
let totalweight = [];
let totgender = [];

let stareWareAPI = [];

button.addEventListener("click", fetchFunction);
async function fetchFunction() {
  const charId1 = document.querySelector(".kar1").value;
  const response = await fetch(`https://swapi.dev/api/people/${charId1}`);

  const totgenderesponse = await response.json();
  stareWareAPI.push(totgenderesponse.name);

  localStorage.setItem("dataToLocalStorage", JSON.stringify(stareWareAPI));

  let getDataFromLocal = JSON.parse(localStorage.getItem("dataToLocalStorage"));

  if (charId1 == "0") {
    alert("You did not choose any character....");
    return false;
  }

  let nweheight = JSON.parse(totgenderesponse.mass);
  let nwweight = JSON.parse(totgenderesponse.height);
  let newgender = totgenderesponse.gender;

  // totgender.push(newgender);
  totalweight.push(nwweight);
  totalheight.push(nweheight);
  totgender.push(newgender);

  let newtotalwaight = 0;
  for (let i = 0; i < totalweight.length; i++) {
    newtotalwaight += totalweight[i];
  }

  let newtotalheight = 0;
  for (let i = 0; i < totalheight.length; i++) {
    newtotalheight += totalheight[i];
  }

  let countTotalgender = totgender.reduce((gender, num) => {
    gender[num] = (gender[num] || 0) + 1;
    return gender;
  }, {});

  let male = countTotalgender.male;
  let female = countTotalgender.female;

  if (male > 0 && female > 0) {
    summary.innerHTML = ` <h2>Total height is: ${newtotalwaight} cm <h2/><h2>Total weight is: ${newtotalheight} kg<h2/><h3>Gender group is: MIXED<h3/> `;
  } else if (male > 0) {
    summary.innerHTML = ` <h2>Total height is: ${newtotalwaight} cm <h2/><h2>Total weight is: ${newtotalheight} kg<h2/><h3>Gender group is MALE<h3/> `;
  } else if (female > 0) {
    summary.innerHTML = ` <h2>Total height is: ${newtotalwaight} cm <h2/><h2>Total weight is: ${newtotalheight} kg<h2/><h3>Gender group is FEMALE<h3/> `;
  } else {
    summary.innerHTML = ` <h2>Total height is: ${newtotalwaight} cm <h2/><h2>Total weight is: ${newtotalheight} kg<h2/><h3>Gender group is: NONE/ROBOT<h3/> `;
  }

  if (getDataFromLocal) {
    const displayDiv = document.createElement("div");
    //ADDING DISPLAY WITH CSS
    displayDiv.classList.add("displaydiv");
    displayDiv.innerHTML = `<h4>Name: ${totgenderesponse.name}<br>Gender: ${totgenderesponse.gender}<br>Height: ${totgenderesponse.height}
      <br>Mass: ${totgenderesponse.mass}<br>Hair-colo: ${totgenderesponse.hair_color} </h4>`;
    displayResut.appendChild(displayDiv);

    const deletbtn = document.createElement("button");
    //ADDING DISPLAY WITH CSS
    deletbtn.classList.add("newdeletbtn");
    deletbtn.innerText = "Delete";
    displayDiv.appendChild(deletbtn);

    //DELET ITEAM
    let sureTodelete = (e) => {
      var result = confirm("Are you sure to delete?");
      if (result == false) {
        e.preventDefault();
      } else {
        let parent = displayResut;
        let chield = parent.getElementsByTagName("div")[0];
        parent.removeChild(chield);
        console.log(chield);

        localStorage.removeItem("dataToLocalStorage");
      }
    };

    deletbtn.addEventListener("click", sureTodelete);

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
}
