var black=document.getElementById("black");
var monster=document.getElementById("monster");
var skyblue=document.getElementById("skyblue");
var backgroundImage=document.getElementById("bike");

black.addEventListener("click",function(){
    backgroundImage.style.backgroundImage="url(images/black.webp)"
});

document.getElementsByTagName("div")[4].addEventListener("click",function(){
    document.getElementsByTagName("div")[0].style.backgroundImage="url(images/blue.webp)"
});

document.getElementsByTagName("div")[5].addEventListener("click",function(){
    document.getElementsByTagName("div")[0].style.backgroundImage="url(images/gray.webp)"
});

skyblue.addEventListener("click",function(){
    backgroundImage.style.backgroundImage="url(images/skyblue.webp)"
});

monster.addEventListener("click",function(){
    backgroundImage.style.backgroundImage="url(images/monster.webp)"
});






