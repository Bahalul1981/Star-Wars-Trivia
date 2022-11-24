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
  const characterId1 = document.querySelector(".kar1").value;
  const response = await fetch(`https://swapi.dev/api/people/${characterId1}`);

  const totgenderesponse = await response.json();
  stareWareAPI.push(totgenderesponse.name);

  localStorage.setItem("dataToLocalStorage", JSON.stringify(stareWareAPI));

  let getDataFromLocal = localStorage.getItem("dataToLocalStorage")
    ? JSON.parse(localStorage.getItem("dataToLocalStorage"))
    : [];

  if (characterId1 == "0") {
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

  const totalWeightHeader = ` <h2>Total height is: ${newtotalwaight} cm <h2/>`;
  const totalHeightHeader = ` <h2>Total weight is: ${newtotalheight} kg<h2/>`;
  const GenderGroupProperties = "Your gender group is :";
  let genderGroup;

  if (male > 0 && female > 0) {
    genderGroup = `<h3>${GenderGroupProperties} MIXED<h3/>`;
  } else if (male > 0) {
    genderGroup = `<h3>${GenderGroupProperties} MALE<h3/>`;
  } else if (female > 0) {
    genderGroup = `<h3>${GenderGroupProperties} FEMALE<h3/> `;
  } else {
    genderGroup = `<h3>${GenderGroupProperties} NONE/ROBOT<h3/>`;
  }
  summary.innerHTML = `${totalWeightHeader}${totalHeightHeader}${genderGroup}`;

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
    const imageElement = document.createElement("img");
    displayDiv.appendChild(imageElement);
    let imageSource;

    const arrayOfCharImagesById = {
      1: {
        characterId: 1,
        imageSource: "LukeSkywalker.jpeg",
      },
      2: {
        characterId: 2,
        imageSource: "c-3po.jpg",
      },
      3: {
        characterId: 3,
        imageSource: "chawbecca.jpg",
      },
      4: {
        characterId: 4,
        imageSource: "darthvader.jpeg",
      },
      5: {
        characterId: 5,
        imageSource: "leiaorgana.jpg",
      },
      6: {
        characterId: 6,
        imageSource: "berulars.jpg",
      },
      7: {
        characterId: 7,
        imageSource: "kamlabi.jpg",
      },
      8: {
        characterId: 8,
        imageSource: "BiggsDarklighter.jpeg",
      },
      9: {
        characterId: 9,
        imageSource: "obion.jpg",
      },
      10: {
        characterId: 10,
        imageSource: "Oenlars.jpg",
      },
    };

    function kjfdlsk() {
      for (key in arrayOfCharImagesById) {
        characterId1 == arrayOfCharImagesById[key].imageSource;
      }
    }
    kjfdlsk();

    // arrayOfCharImagesById.forEach((newelement) => {
    //   characterId1 == newelement.characterId;
    // });

    if (characterId1 == 1) {
      imageSource = "LukeSkywalker.jpeg";
    }

    if (characterId1 == 2) {
      imageSource = "c-3po.jpg";
    }

    if (characterId1 == 3) {
      imageSource = "chawbecca.jpg";
    }
    if (characterId1 == 4) {
      imageSource = "darthvader.jpeg";
    }
    if (characterId1 == 5) {
      imageSource = "leiaorgana.jpg";
    }
    if (characterId1 == 6) {
      imageSource = "berulars.jpg";
    }
    if (characterId1 == 7) {
      imageSource = "kamlabi.jpg";
    }
    if (characterId1 == 8) {
      imageSource = "BiggsDarklighter.jpeg";
    }
    if (characterId1 == 9) {
      imageSource = "obion.jpg";
    }
    if (characterId1 == 10) {
      imageSource = "Oenlars.jpg";
    }
    imageElement.setAttribute("src", "/Image/" + imageSource);
  }
}
