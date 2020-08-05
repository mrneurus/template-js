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
    let mainsel = document.querySelector('main')
    let container=document.querySelector('#contenedor')
    mainsel.style.backgroundColor='#ffff'  
    

    

    let flagInicial=btnMode.classList.contains('dark')
    
        if(flagInicial){
            btnMode.classList.remove('dark')
            btnMode.classList.add('luz')
            container.style.setProperty('--border','rgb(34, 36, 41) solid');
            container.style.setProperty('--text-color','#000000')

        }else{
            btnMode.classList.remove('luz')
            btnMode.classList.add('dark')
            mainsel.style.backgroundColor='rgb(34, 36, 41)' 
            container.style.setProperty('--border','solid 2px #fff');
            container.style.setProperty('--text-color','#ffff')
           
            
        }

       
   




    /* otra forma de hacerlo con un for, por si lo que necesitamos no esta en un contenedor o no son familia */
   /*  let textoscolor= document.getElementsByClassName('text-color')
    for (var i = 0; i < textoscolor.length; i++) {
            textoscolor[i].style.setProperty('--text-color','#00000'); 
        } */

    
   
    
    
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




