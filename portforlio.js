

let menuBt = document.getElementById('menu-btn')
let navbar = document.getElementById('navbar')
let body = document.getElementById("body")
let btn = document.getElementById("btn")
let sections = document.querySelectorAll('.section')
let navLinks = document.querySelectorAll('header nav a')
let btnn = document.getElementsByClassName("btnn")
let invmenu = document.getElementById('invmenu')



console.log(menuBt)
console.log(body)
console.log(navbar)
console.log(navLinks)
console.log('button',btnn[2])

menuBt.addEventListener("click", function(){
    navbar.id = "navbarActive"

})

navbar.addEventListener("click", function(){
       navbar.id = "navbar"
}

)

btnn[0].addEventListener('click', function(){
    console.log('click')
    btn.id = "*"
    for(bt of btnn){
        bt.classList.remove("active")
    }
    this.classList.add('active')
})

btnn[1].addEventListener('click', function(){
    console.log('click')
     btn.id = "*"
    for(bt of btnn){
        bt.classList.remove("active")
    }
    this.classList.add('active')
})

btnn[2].addEventListener('click', function(){
    console.log('click')
        btn.id = "*"
    for(bt of btnn){
        bt.classList.remove("active")
    }
    this.classList.add('active')
})

btnn[3].addEventListener('click', function(){
    console.log('click')
        btn.id = "*"
    for(bt of btnn){
        bt.classList.remove("active")
    }
    this.classList.add('active')
})

btnn[4].addEventListener('click', function(){
    console.log('click')
        btn.id = "*"
    for(bt of btnn){
        bt.classList.remove("active")
    }
    this.classList.add('active')
})


// navLinks[1].addEventListener("click", function(){
//     navLinks.forEach(nav =>{
//         nav.classList.toggle('active')
//         nav.classList.remove('active')
//     })
//     console.log('hello')
// })



// window.onscroll = () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');


//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('.header nav a [href"=' + id + ']').classList.add('active')
//             })
//         }
//     })
// }