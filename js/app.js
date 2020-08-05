const btnVer = document.getElementById('btn-ver')
const btnMode = document.getElementById('mode')
const btnInsertarLink = document.getElementById('btn-insertar')
const btnNegrita = document.getElementById('btn-negrita')

document.onload = cambiarbg()

btnInsertarLink.addEventListener('click',insertarLink)
btnNegrita.addEventListener('click',pasarNegrita)
btnVer.addEventListener('click',cambiarBorde)
btnMode.addEventListener('click',cambiarModo)




function cambiarBorde(e){
    e.preventDefault()
    let btn
    btn = document.querySelector('.ver-mas')
    btn.style.border='solid 2px rgb(65, 199, 199)'
    console.log(btn)
}

function pasarNegrita (e){
    e.preventDefault()
    let spanNeg=document.querySelector('.text-heading span')
    spanNeg.style.fontWeight='bold'
    console.log(spanNeg)}



function cambiarModo(e){
    e.preventDefault()
    let bodysel = document.querySelector('body')
    bodysel.style.backgroundColor='#ffff' 
    console.log(bodysel)
}


function insertarLink(e){
    e.preventDefault()
    let menu = document.getElementById('menu-nav')
    let liNuevo=document.createElement('li')
    let aNuevo=document.createElement('a')    
    aNuevo.textContent='Linkde js'
    aNuevo.style.color='rgb(65, 199, 199)'
    liNuevo.appendChild(aNuevo)
    menu.appendChild(liNuevo)    
    console.log(liNuevo)
}





function cambiarbg(){

    setTimeout(() => {
       
         document.querySelector("#imagen").style.backgroundColor='rgb(65, 199, 199)'; 
        
         

      }, 3000);


}




