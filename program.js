const displayNewCharacters = document.querySelector(".display-new-character");
const addCharactersButton = document.querySelector(".add-character");
const sumOfAddedCharecterProperty = document.querySelector(
  ".sum-of-all-characters"
);
const totalHeightOfSelectedCharacters = [];
const totalWeightOfSelectedCharacter = [];
const gendersOfSelectedCharacters = [];

let starWarsApiData = [];

addCharactersButton.addEventListener("click", fetchFunction);
async function fetchFunction() {
  const selectedCharacter = document.querySelector(
    ".charecter-of-movies"
  ).value;
  const response = await fetch(
    `https://swapi.dev/api/people/${selectedCharacter}`
  );

  const dataFromApi = await response.json();
  starWarsApiData.push(dataFromApi.name);

  localStorage.setItem("dataToLocalStorage", JSON.stringify(starWarsApiData));
  let getDataFromLocal = localStorage.getItem("dataToLocalStorage")
    ? JSON.parse(localStorage.getItem("dataToLocalStorage"))
    : [];

  if (selectedCharacter == "0") {
    alert("You did not choose any character.Please choose a character.");
  }

  function displayGroupCharacters() {
    const nweheight = JSON.parse(dataFromApi.mass);
    const nwweight = JSON.parse(dataFromApi.height);
    const newgender = dataFromApi.gender;

    // gendersOfSelectedCharacters.push(newgender);
    totalWeightOfSelectedCharacter.push(nwweight);
    totalHeightOfSelectedCharacters.push(nweheight);
    gendersOfSelectedCharacters.push(newgender);

    let addedCharactersHeight = 0;
    for (let i = 0; i < totalWeightOfSelectedCharacter.length; i++) {
      addedCharactersHeight += totalWeightOfSelectedCharacter[i];
    }

    let addedCharactersWeight = 0;
    for (let i = 0; i < totalHeightOfSelectedCharacters.length; i++) {
      addedCharactersWeight += totalHeightOfSelectedCharacters[i];
    }

    const countTotalgender = gendersOfSelectedCharacters.reduce(
      (gender, num) => {
        gender[num] = (gender[num] || 0) + 1;
        return gender;
      },
      {}
    );

    let maleCharacter = countTotalgender.male;
    let femaleCharacter = countTotalgender.female;
    console.log(femaleCharacter);

    const totalWeightOfSelectedCharacterHeader = ` <h2>Total height is: ${addedCharactersHeight} cm <h2/>`;
    const totalHeightOfSelectedCharactersHeader = ` <h2>Total weight is: ${addedCharactersWeight} kg<h2/>`;
    const GenderGroupProperties = "Your gender group is :";

    let genderGroup;

    if (maleCharacter > 0 && femaleCharacter > 0) {
      genderGroup = `<h3>${GenderGroupProperties} MIX<h3/>`;
    } else if (femaleCharacter > 0) {
      genderGroup = `<h3>${GenderGroupProperties} FEMAL<h3/>`;
    } else if (maleCharacter > 0) {
      genderGroup = `<h3>${GenderGroupProperties} MALE<h3/>`;
    } else {
      genderGroup = `<h3>${GenderGroupProperties} ROBOT<h3/>`;
    }
    sumOfAddedCharecterProperty.innerHTML = `${totalWeightOfSelectedCharacterHeader}${totalHeightOfSelectedCharactersHeader}${genderGroup}`;
  }
  displayGroupCharacters();

  if (getDataFromLocal) {
    const displayDiv = document.createElement("div");
    // ADD CLASS TO WORK WITH CSS
    displayDiv.classList.add("displaydiv");
    displayDiv.innerHTML = `<h4>Name: ${dataFromApi.name}<br>Gender: ${dataFromApi.gender}<br>Height: ${dataFromApi.height}
      <br>Mass: ${dataFromApi.mass}<br>Hair-colo: ${dataFromApi.hair_color} </h4>`;
    displayNewCharacters.appendChild(displayDiv);

    const deleteAddedCharacter = document.createElement("addCharactersButton");
    //ADDING DISPLAY WITH CSS
    deleteAddedCharacter.classList.add("newdeleteAddedCharacter");
    deleteAddedCharacter.innerText = "Delete";
    displayDiv.appendChild(deleteAddedCharacter);

    //DELET ITEAM

    function deleteCharacters(e) {
      var result = confirm("Are you sure to delete?");
      if (result == false) {
        e.preventDefault();
      } else {
        let parent = displayNewCharacters;
        let chield = parent.getElementsByTagName("div")[0];
        parent.removeChild(chield);
        console.log(chield);

        localStorage.removeItem("dataToLocalStorage");
      }
    }

    deleteAddedCharacter.addEventListener("click", deleteCharacters);

    //DISPLAY IMAGE ALL IMAGE

<<<<<<< HEAD
    function imageFunction() {
      const arrayOfCharImagesById = {
        1: {
          imageSource: "LukeSkywalker.jpeg",
        },
        2: {
          imageSource: "c-3po.jpg",
        },
        3: {
          imageSource: "chawbecca.jpg",
        },
        4: {
          imageSource: "darthvader.jpeg",
        },
        5: {
          imageSource: "leiaorgana.jpg",
        },
        6: {
          imageSource: "berulars.jpg",
        },
        7: {
          imageSource: "kamlabi.jpg",
        },
        8: {
          imageSource: "BiggsDarklighter.jpeg",
        },
        9: {
          imageSource: "obion.jpg",
        },
        10: {
          imageSource: "Oenlars.jpg",
        },
      };

      function addImageFunction() {
        const imageElement = document.createElement("img");
        const image = arrayOfCharImagesById[selectedCharacter].imageSource;
        console.log(image);
        imageElement.setAttribute("src", "/Image/" + image);
        displayDiv.appendChild(imageElement);
      }
      addImageFunction();
=======
    let imageSource;
    const arrayOfCharImagesById = {
      1: {
        imageSource: "LukeSkywalker.jpeg",
      },
      2: {
        imageSource: "c-3po.jpg",
      },
      3: {
        imageSource: "chawbecca.jpg",
      },
      4: {
        imageSource: "darthvader.jpeg",
      },
      5: {
        imageSource: "leiaorgana.jpg",
      },
      6: {
        imageSource: "berulars.jpg",
      },
      7: {
        imageSource: "kamlabi.jpg",
      },
      8: {
        imageSource: "BiggsDarklighter.jpeg",
      },
      9: {
        imageSource: "obion.jpg",
      },
      10: {
        imageSource: "Oenlars.jpg",
      },
    };

   function addImageFunction() {
      const imageElement = document.createElement("img");
      const image = arrayOfCharImagesById[selectedCharacter].imageSource;
      console.log(image);
      imageElement.setAttribute("src", "/Image/" + image);
      displayDiv.appendChild(imageElement);
>>>>>>> 4064865217ee798ab93f08c71e78b4760945a54c
    }
  }
  imageFunction();
}
