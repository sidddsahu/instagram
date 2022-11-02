gsap.to(".container-2-child",{
    scrollTrigger:{
        trigger:".container-2-child",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 10%",
        scrub:2

    },
    scale:1.2,
    duration:2,
    // Delay:5,
})

gsap.to(".right h1",{
    scrollTrigger:{
        trigger:".right h1",
        scroller:"body",
        scrub:1

    },
    scale:1.1,
    duration:2,
    Delay:2,
})


gsap.to(".card",{
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        scrub:1

    },
    scale:1.2,
    duration:2,
    Delay:2,
})

gsap.to(".box",{
    scrollTrigger:{
        trigger:".box",
        scroller:"body",
        scrub:4

    },
    scale:.9,
    duration:2,
    Delay:2,
})

gsap.to(".content-2",{
    scrollTrigger:{
        trigger:".content-2",
        scroller:"body",
        scrub:2

    },
    scale:1.2,
    duration:2,
    Delay:2,
})


gsap.to(".right-way",{
    scrollTrigger:{
        trigger:".right-way",
        scroller:"body",
        scrub:5

    },
    rotate:360,
    // duration:2,
    // Delay:2,
})


var btn = document.querySelector("#white")
var desi = document.querySelector("#desi")

var flag = 0;

btn.addEventListener("click", function(){
    if(flag === 0){
        desi.innerHTML = "Sending Request... "
        desi.style.color = "green"
        btn.innerHTML = "Unfollow"
        setTimeout(function(){
            desi.innerHTML = "Friend "
        desi.style.color = "purple"
        btn.innerHTML = "Unfollow"
        flag = 1
        }, 2000)
    }else{
        desi.innerHTML = "stranger"
        desi.style.color = "red"
        btn.innerHTML = "Add friend"
        flag = 0
    }


});



var two = document.querySelector(".two")

var flag = 0
two.addEventListener("click",function(){
    if(flag === 0){
    two.style.transform = "rotate(360deg)"
    flag = 1
}else{
    two.style.transform = "rotate(0deg)"
    flag = 0
}
})

var three = document.querySelector(".three")

var flag = 0
three.addEventListener("click",function(){
    if(flag === 0){
    three.style.transform = "rotate(360deg)"
    flag = 1
}else{
    three.style.transform = "rotate(0deg)"
    flag = 0
}
})

var four = document.querySelector(".four")

var flag = 0
four.addEventListener("click",function(){
    if(flag === 0){
    four.style.transform = "rotate(360deg)"
    flag  = 1
}else{
    four.style.transform = "rotate(0deg)"
    flag = 0
}
})

var five = document.querySelector(".five")


var flag = 0
five.addEventListener("click",function(){
    if(flag === 0){
    five.style.transform = "rotate(360deg)"
    flag = 1
}else{
    five.style.transform = "rotate(0deg)"
     flag = 0
}
})

var rabbit = document.querySelector(".main-1")

var flag = 0
rabbit.addEventListener("click",function(){
    if(flag === 0){
    rabbit.style.backgroundColor = "yellow"
    flag = 1
}else{
    rabbit.style.backgroundColor = "#0072ff"
    flag = 0
}
})




var rose = document.querySelector(".rose")
var boxleft = document.querySelector(".box-left img")

var flag = 0
rose.addEventListener("click", function(){
    if(flag === 0){
    boxleft.style.transform = "translateX(-0%)"
    rose.style.backgroundColor = "yellow"
    flag = 1
}else{
    boxleft.style.transform = "translateX(-150%)"
    rose.style.backgroundColor = " rgb(0,255,255)"
    flag = 0
}
})