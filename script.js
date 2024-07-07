let slides=document.querySelectorAll(".slide")
let prev=document.querySelector(".prev")
let next=document.querySelector(".next")
let counter=0
console.log(slides)
let circle1=document.querySelector("#circle1")
let circle2=document.querySelector("#circle2")
let section2=document.querySelector(".section2")
let section4=document.querySelector(".section4")


let list=document.querySelector(".responsive-list")
let hamburger=document.querySelector("#menu")
menu.addEventListener("click",()=>{
    if(menu.classList.contains("fa-bars")){
        menu.classList.add("rotate")
       setTimeout(() => {
        menu.classList.remove("rotate")
        
       }, 400);
        menu.classList.remove("fa-bars")
        menu.classList.add("fa-x")
        list.style.top="50px"
        
    }
    else{
        menu.classList.add("rotate")
        setTimeout(() => {
         menu.classList.remove("rotate")
         
        }, 400);
        menu.classList.add("rotate")
        
        menu.classList.add("fa-bars")
        menu.classList.remove("fa-x")
        list.style.top="-200vw"

    }
})













const updateslide=()=>{


    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-counter)*100}%)`
    })

}

const autoslider=()=>{
    setInterval(() => {
        counter++
        if(counter>=slides.length){
            counter=0
        }
        updateslide()
    }, 4000);

}

next.addEventListener("click",()=>{
    counter++
    if(counter>=slides.length){
        counter=0
    }
    updateslide()


})
prev.addEventListener("click",()=>{
    counter--
    if(counter<0){
        counter=slides.length-1
    }
    updateslide()


})


autoslider()













boxes.forEach((box,index)=>{
    let content=document.createElement("div")
    content.classList.add("box")
    content.innerHTML=` 
            <img src="${box.img}" alt="">
            <div class="title"><h1>${box.title}</h1></div>
            <div class="description"><p>${box.description}</p></div>
            <button>${box.button}</button>
        </>`
        section2.appendChild(content)
        content.classList.add(`box${index}`)

})



boxes2.forEach((box2,index)=>{
    let content=document.createElement("div")
    content.classList.add("box")
    content.innerHTML=` 
            <img src="${box2.img}" alt="">
            <div class="title"><h1>${box2.title}</h1></div>
            <div class="description"><p>${box2.description}</p></div>
            <button>${box2.button}</button>
        </>`
        section4.appendChild(content)
        content.classList.add(`box2${index}`)

})







