const image=document.getElementById("imglama")
// On a d'abord declarer une constante en haut

// Pour changer l'image a l'interieur on a ca :
image.addEventListener("mouseenter",function (){
    image.src="img/image2.jpg"
} )
// Pour changer l'image a l'interieur pour remettre l'initial on a ca :
image.addEventListener("mouseout",function (){
    image.src="img/monimage.jpg"
} )


// const card=document.getElementById("card")
//     card.addEventListener("mouseenter",function () {
//         card.style.color="white"
//     })

document.addEventListener("DOMContentLoaded",function () {
    
})
