// class constractor

class Strcharaters{

    constructor(Name,gender,height,mass,hairColor){

        this.Name=Name;
        this.gender=gender;
        this.height=height;
        this.mass=mass;
        this.hairColor=hairColor;
        

    }

}

// DOM List

let displayResut=document.getElementById("datafrom")
let displayResut2=document.getElementById("datafrom2")
let button=document.getElementById("Compare")
let firstimg=document.getElementById("firstimg")
let secondimg=document.getElementById("secondimg")
let displaybutton=document.getElementById("button")
let compareinfo1=document.querySelector(".compareinfo1")
let compareinfo2=document.querySelector(".compareinfo2")
let kar1=document.getElementById("kar1")
let kar2=document.getElementById("kar2")







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
    
    
    // Om value är tomt eller sammar karak

     if(charId1===charId2){
         alert("Du får inte jämföra samma karektär.Gärna välj olika karäkter")
         return false
       

     }

     if(charId1=="Karaktär-1"&&charId2=="Karaktär-2"){
         alert("Du måste välja din favoritkorrektor")
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
      
      
  

        function characterOneInfo(){
        const newelem=document.createElement("p")
        newelem.innerHTML=`Name: ${newResponse.name}<br>Gender: ${newResponse.gender}<br>Height: ${newResponse.height}<br>Mass: ${newResponse.mass}<br>Hair-colo: ${newResponse.hair_color}`
        displayResut.appendChild(newelem)
       

       

    }
    characterOneInfo()

   
   
    




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
        twoelem.innerHTML=`Name: ${newResponse2.name}<br>Gender: ${newResponse2.gender}<br>Height: ${newResponse2.height}<br>Mass: ${newResponse2.mass}<br>Hair-colo: ${newResponse2.hair_color}`
        displayResut2.appendChild(twoelem)
        
    }
    characterTwoInfo()
   

     
    // Jämföra höjd
    
    creatbutto2.addEventListener("click",()=>{
        
        if(newResponse.height===newResponse2.height){
            compareinfo1.innerHTML=`${newResponse2.name} and me, we have same hight. That is: ${newResponse2.height} m`

        }
        else if(newResponse.height<newResponse2.height){
            compareinfo1.innerHTML=`${newResponse2.name} hight is ${newResponse2.height} m. and that is ${newResponse2.height-newResponse.height} m. more then me`
        }

        else if(newResponse.height>newResponse2.height){
            compareinfo1.innerHTML= `${newResponse2.name} hight is ${newResponse2.height} m. and that is ${newResponse.height-newResponse2.height} m. less then me`  
        }
        

        
    })

    creatbutto6.addEventListener("click",()=>{
        
        if(newResponse.height===newResponse2.height){
            compareinfo2.innerHTML=`${newResponse2.name} and me, we have same hight. That is: ${newResponse2.height} m`

        }
        else if(newResponse.height>newResponse2.height){
            compareinfo2.innerHTML=`${newResponse.name} hight is ${newResponse.height} m. and that is ${newResponse.height-newResponse2.height} m. more then me`
        }

        else if(newResponse.height<newResponse2.height){
            compareinfo2.innerHTML= `${newResponse.name} hight is ${newResponse.height} m. and that is ${newResponse2.height-newResponse.height} m. less then me`  
        }
        

        
    })

    

    // Jämföra vikt
    creatbutto1.addEventListener("click",()=>{
        

        if(newResponse.mass===newResponse2.mass){
            compareinfo1.innerHTML=`${newResponse2.name} weighs ${newResponse2.mass}kg. The same weight as me!`
             
        }
        else if(newResponse.mass<newResponse2.mass){
            compareinfo1.innerHTML=`${newResponse2.name} weighs ${newResponse2.mass}kg. That's ${newResponse.mass - newResponse2.mass} kg less than me.`
        }
        else {
            compareinfo1.innerHTML=`${newResponse2.name} weighs ${newResponse2.mass} kg. That's  ${newResponse2.mass - newResponse.mass } kg more than me.`; 

        } 

        
    })

    creatbutto5.addEventListener("click",()=>{

        if(newResponse2.mass===newResponse.mass){
            compareinfo2.innerHTML=`${newResponse.name} weighs ${newResponse.mass}kg. The same weight as me!`
             
        }
        else if(newResponse2.mass<newResponse.mass){
            compareinfo2.innerHTML=`${newResponse.name} weighs ${newResponse.mass}kg. That's ${newResponse2.mass - newResponse.mass} kg less than me.`
        }
        else {
            compareinfo2.innerHTML=`${newResponse.name} weighs ${newResponse.mass} kg. That's  ${newResponse.mass - newResponse2.mass } kg more than me.`; 

        } 
        
    })

    //Jämföra kön

    creatbutto4.addEventListener("click",()=>{
        if(newResponse.gender===newResponse2.gender){
            compareinfo1.innerHTML=`${newResponse2.name} is like me and we boath are: ${newResponse2.gender}`

        }
        else{
            compareinfo1.innerHTML=`${newResponse2.name} gender is : ${newResponse2.gender} and we are not same gender `
        }
    })

    creatbutto8.addEventListener("click",()=>{
        if(newResponse2.gender===newResponse.gender){
            compareinfo2.innerHTML=`${newResponse.name} is like me and we boath are: ${newResponse.gender}`

        }
        else{
            compareinfo2.innerHTML=`${newResponse.name} gender is : ${newResponse.gender} and we are not same gender `
        }
    })

    // jäföra hörfärg

    creatbutto3.addEventListener("click",()=>{


        if(newResponse.hair_color === newResponse2.hair_color){
            compareinfo1.innerHTML=`${newResponse2.name} mad me ,we boath have same hair color and that is:${newResponse2.hair_color}`

        }
        else{
            compareinfo1.innerHTML=`${newResponse2.name} hair color is : ${newResponse2.hair_color}, and we have not same hair color `
        }
    })


    creatbutto7.addEventListener("click",()=>{
        if(newResponse2.hair_color===newResponse.hair_color){
            compareinfo2.innerHTML=`${newResponse.name} mad me ,we boath have same hair color and that is:${newResponse.hair_color}`

        }
        else{
            compareinfo2.innerHTML=`${newResponse.name} hair color is : ${newResponse.hair_color},and we have not same hair color `
        }
    })

    
   





    // bild för div 1

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

   // Nild för div 2
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