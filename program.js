
// Jag skapade en class condtructor here

class Strcharaters{

    constructor(Name,gender,height,mass,hairColor){

        this.Name=Name;
        this.gender=gender;
        this.height=height;
        this.mass=mass;
        this.hairColor=hairColor;
        

    }

}

// DOM
let displayResut=document.getElementById("datafrom")
let displayResut2=document.getElementById("datafrom2")
let button=document.getElementById("Compare")
let firstimg=document.getElementById("firstimg")
let secondimg=document.getElementById("secondimg")
let displaybutton=document.getElementById("button")
let displaynewcompareinfo=document.getElementById("displaynewcompareinfo")




// Fetch API

button.addEventListener("click",fetchFunction)

 async function fetchFunction(){
   
      const charId1 = document.querySelector("#kar1").value;
      const response = await fetch(`https://swapi.dev/api/people/${charId1}`);
      const newResponse = await response.json();

      const charId2 = document.querySelector("#kar2").value;
      const response2 = await fetch(`https://swapi.dev/api/people/${charId2}`);
      const newResponse2 = await response2.json();


      const charactor1 =new Strcharaters(newResponse.name,newResponse.gender,newResponse.height,newResponse.mass,newResponse.hair_color);
      const charactor2 =new Strcharaters(newResponse2.name,newResponse2.gender,newResponse2.height,newResponse2.mass,newResponse2.hair_color);
    //   displayResut.innerHTML= `Name: ${newResponse.name}<br><br>`
    //   displayResut2.innerHTML= `Name: ${newResponse2.name}<br><br>`

    //   displayResut.innerHTML=`Name: ${newResponse.name}<br>Gender: ${newResponse.gender} <br>Height: ${newResponse.height} <br>Mass: ${newResponse.mass}<br>Hair color: ${newResponse.hair_color}`


     //Skapt "Button" för Charakter-1
     if(charId1==charId2){
         alert("Du får inte jämföra samma karektär.Gärna välj olika karäkter")
       return false
     }
    

      const creatbutto1=document.createElement("button")
      creatbutto1.innerText="Vikt"
      displayResut.appendChild(creatbutto1)
      const creatbutto2=document.createElement("button")
      creatbutto2.innerText="Höjd"
      displayResut.appendChild(creatbutto2)
      const creatbutto3=document.createElement("button")
      creatbutto3.innerText="Hörfärg"
      displayResut.appendChild(creatbutto3)
      const creatbutto4=document.createElement("button")
      creatbutto4.innerText="Kön"
      displayResut.appendChild(creatbutto4)
      
      
    //   creatbutto1.addEventListener("click",compareHight())

    
    //    const newelem= document.createElement("p")
    //    newelem.innerText= `Name: ${newResponse.height-newResponse2.height}`
    //    displayResut.appendChild(newelem)


        function characterOneInfo(){
        const newelem=document.createElement("p")
        newelem.innerHTML=`Name: ${newResponse.name}<br>Gender: ${newResponse.gender}<br>Height: ${newResponse.height}<br>Mass: ${newResponse.mass}<br>Hair-colo: ${newResponse.hair_color}`
        displayResut.appendChild(newelem)

        // if(newResponse.height>newResponse2.height){
        //    newelem.innerHTML=`I am ${newResponse.height-newResponse2.height} cm. taller then him` 
        // }
        // if(newResponse.height<newResponse2.height){
        //     newelem.innerHTML=`I am ${newResponse.height-newResponse2.height} cm. smoler then him` 
        // }
        // else{
        //     newelem.innerHTML=" we are same hight"
        // }

    }
    characterOneInfo()

    //compare height
   
    




    //Skapt "Button" för Charakter-2

    const creatbutto5=document.createElement("button")
    creatbutto5.innerText="Vikt"
    displayResut2.appendChild(creatbutto5)
    const creatbutto6=document.createElement("button")
    creatbutto6.innerText="Höjd"
    displayResut2.appendChild(creatbutto6)
    const creatbutto7=document.createElement("button")
    creatbutto7.innerText="Hörfärg"
    displayResut2.appendChild(creatbutto7)
    const creatbutto8=document.createElement("button")
    creatbutto8.innerText="Kön"
    displayResut2.appendChild(creatbutto8)


    function characterTwoInfo(){
        const twoelem=document.createElement("p")
        twoelem.innerHTML=`Name: ${newResponse2.name}<br>Gender: ${newResponse2.gender}<br>Height: ${newResponse2.height}<br>Mass: ${newResponse2.mass}<br>Hair-colo: ${newResponse.hair_color}`
        displayResut2.appendChild(twoelem)
    }
    characterTwoInfo()
   

      
    creatbutto2.addEventListener("click",()=>{
        const character1height=newResponse.height
        const character2height=newResponse2.height

        if(character1height>character2height){
        displaynewcompareinfo.innerHTML=`I am: ${character1height-character2height} cm. bigger then him`   
        }
        if(character1height<character2height){
            displaynewcompareinfo.innerHTML=`I am: ${character2height-newResponse.height} cm. smaller then him`
        }

        
    })

    creatbutto6.addEventListener("click",()=>{
        const character2height=newResponse2.height
            
    })
        
    //     if(`${newResponse.height>newResponse2.height}`){
    //         displaynewcompareinfo.innerHTML=`I am: ${newResponse2.height-newResponse.height}cm. bigger then him`
            
    //     }
    // //    if(newResponse.height<newResponse2.height){
    //     else{
    //     displaynewcompareinfo.innerHTML=`I am: ${newResponse2.height-newResponse.height}cm. smaller then him`
    //    }
       

   




      if(charId1==1){
          firstimg.src="/Image/berulars.jpg"

      }
      if(charId1==2){
        firstimg.src="/Image/biggsdarklighter.jpg"

    }
    if(charId1==3){
        firstimg.src="/Image/darthvader.png"

    }
    if(charId1==4){
        firstimg.src="/Image/c-3p0.jpg"

    }
    if(charId1==5){
        firstimg.src="/Image/kamlabi.jpg"

    }
    if(charId1==6){
        firstimg.src="/Image/leiaorgana.jpg"

    }
    if(charId1==7){
        firstimg.src="/Image/obion.jpg"

    }
    if(charId1==8){
        firstimg.src="/Image/Oenlars.jpg"

    }

    // displayResut2.innerHTML= `Name: ${newResponse2.name}<br>Gender: ${newResponse2.gender} <br>Height: ${newResponse2.height} <br>Mass: ${newResponse2.mass}<br>Hair color: ${newResponse2.hair_color}`

    if(charId2==1){
        secondimg.src="/Image/berulars.jpg"

    }
    if(charId2==2){
      secondimg.src="/Image/biggsdarklighter.jpg"

  }
  if(charId2==3){
      secondimg.src="/Image/darthvader.png"

  }
  if(charId2==4){
      secondimg.src="/Image/c-3p0.jpg"

  }
  if(charId2==5){
      secondimg.src="/Image/kamlabi.jpg"

  }
  if(charId2==6){
      secondimg.src="/Image/leiaorgana.jpg"

  }
  if(charId2==7){
      secondimg.src="/Image/obion.jpg"

  }
  if(charId2==8){
      secondimg.src="/Image/Oenlars.jpg"

  }



}

















 // button.addEventListener("click",fetchFunction)
// function fetchFunction(){
//     async function getdata1(){
//         const data= await fetch("https://swapi.dev/api/people/1/")
//         const newData= await data.json()
//         const character1= new Strcharaters(newData.name,newData.gender,newData.height,newData.mass,newData.hair_color,newData.picUrl)
//         console.log(character1)

//         const data2= await fetch("https://swapi.dev/api/people/2/")
//         const newData2= await data2.json()
//         const character2= new Strcharaters(newData2.name,newData2.gender,newData2.height,newData2.mass,newData2.hair_color,newData2.picUrl)
//         console.log(character2)

//         if (character1!==character2){
            
//             displayResut.innerHTML=`Hello,I am ${newData2.name} <br> And my height is ${newData2.height} <br> 
//             I am shorter then my friend`


//         }


       

        
//     }
//    getdata1()
  
// }