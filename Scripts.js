const menu =document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () =>{
    menu.classList.toggle('activo')
    NavMenu.classList.toggle('activo')
})


//Typed text

document.addEventListener("DOMContentLoaded", function() {
    let text = "Sou um apaixonado por Designer Gráfico e desemvolvimento Frontend. Combino criatividade e habilidades técnicas para criar uma experiencia visual inpactante. Em busca continua de novas oportunidade de colocar minhas habilidades em prática, dando vida as ideias de cada cliente atrávez do designer e do desenvolvimento web."
    let index= 0
    let speed = 30

    function typeWriter(){
        if(index < text.length){
            document.getElementById('typed-output').innerHTML += text.charAt(index)
            index ++
            setTimeout(typeWriter, speed)
        }
    } 

    typeWriter()
})
