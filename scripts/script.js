let nums= false

let teclado = document.getElementById("teclado")
let titulo = document.getElementById("titulo")
let retro = document.getElementById("customSwitch1")
let oscuro = document.getElementById("customSwitch2")
let fondo = document.body;
let cajas1= document.getElementById('caja').getElementsByClassName("cajita")
 
let calculadora = document.getElementById("caja")

if (!localStorage.getItem("tema")){
  localStorage.setItem("tema","white")
}
else{
  const tema = localStorage.getItem("tema")
  if(tema=="retro"){
    fondo.classList.add("bg-warning")
    fondo.classList.remove("bg-white")
    fondo.classList.remove("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.add("bg-info")
      cajas1[i].classList.remove("bg-dark")
      cajas1[i].classList.remove("bg-white")
    }
    retro.checked=true
    localStorage.setItem("tema","retro")
  }else if(tema=="dark"){
    fondo.classList.add("bg-warning")
    fondo.classList.remove("bg-white")
    fondo.classList.add("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.remove("bg-info")
      cajas1[i].classList.remove("bg-dark")
      cajas1[i].classList.add("bg-white")
    }
    oscuro.checked = true
    localStorage.setItem("tema","dark")
  }
}



caja.addEventListener("click",(e)=>{
  let temp = e.target.innerText;
  if (temp== "RES"){
    teclado.innerHTML=""
  }
  else if(temp=="CAL"){
    window.open('https://juans1lva.github.io/Calculadora/', '_self');
  }
  else if(temp.length == 3){
    if(nums==true){
      temp=temp.slice(2);
      const long= (teclado.innerHTML+temp).length
      teclado.innerHTML=teclado.innerHTML+temp;
      if(long==10){
        if((teclado.innerHTML).includes('1234567890')){
          swal("Buen trabajo", "Reto de numeros superado", "success");
          nums=false;
          teclado.innerHTML=""
          titulo.innerHTML="Reto Ansalo (Nivel I: Letras)"
        }
        else{
          let mensaje = ""
          if(!(teclado.innerHTML).includes('0')){
            mensaje=mensaje+" 0 "
          }
          if(!(teclado.innerHTML).includes('1')){
            mensaje=mensaje+" 1 "
          }
          if(!(teclado.innerHTML).includes('2')){
            mensaje=mensaje+" 2 "
          }
          if(!(teclado.innerHTML).includes('3')){
            mensaje=mensaje+" 3 "
          }
          if(!(teclado.innerHTML).includes('4')){
            mensaje=mensaje+" 4 "
          }
          if(!(teclado.innerHTML).includes('5')){
            mensaje=mensaje+" 5 "
          }
          if(!(teclado.innerHTML).includes('6')){
            mensaje=mensaje+" 6 "
          }
          if(!(teclado.innerHTML).includes('7')){
            mensaje=mensaje+" 7 "
          }
          if(!(teclado.innerHTML).includes('8')){
            mensaje=mensaje+" 8 "
          }
          if(!(teclado.innerHTML).includes('9')){
            mensaje=mensaje+" 9 "
          }
          if(mensaje.length!=0){
            mensaje= ", te faltaron los siguientes numeros: "+mensaje;
          }
          swal("Oh no! :C", "Tus numeros parecen estar en desorden" + mensaje, "error");
          teclado.innerHTML=""
        }
      }
    }else{
      temp=temp.slice(0,-2);
      const long= (teclado.innerHTML+temp).length
      teclado.innerHTML=teclado.innerHTML+temp;
      if(long==10){
        if((teclado.innerHTML).includes('ABCDEFGHIJ')){
          swal("Buen trabajo", "Reto de letras superado", "success");
          nums=true;
          teclado.innerHTML=""
          titulo.innerHTML="Reto Ansalo (Nivel II: Números)"
        }
        else{
          let mensaje = ""
          if(!(teclado.innerHTML).includes('A')){
            mensaje=mensaje+" A "
          }
          if(!(teclado.innerHTML).includes('B')){
            mensaje=mensaje+" B "
          }
          if(!(teclado.innerHTML).includes('C')){
            mensaje=mensaje+" C "
          }
          if(!(teclado.innerHTML).includes('D')){
            mensaje=mensaje+" D "
          }
          if(!(teclado.innerHTML).includes('E')){
            mensaje=mensaje+" E "
          }
          if(!(teclado.innerHTML).includes('F')){
            mensaje=mensaje+" F "
          }
          if(!(teclado.innerHTML).includes('G')){
            mensaje=mensaje+" G "
          }
          if(!(teclado.innerHTML).includes('H')){
            mensaje=mensaje+" H "
          }
          if(!(teclado.innerHTML).includes('I')){
            mensaje=mensaje+" I "
          }
          if(!(teclado.innerHTML).includes('J')){
            mensaje=mensaje+" J "
          }
          if(mensaje.length!=0){
            mensaje= ", te faltaron las siguientes letras: "+mensaje;
          }
          swal("Oh no! :C", "Tus letras parecen estar en desorden" + mensaje, "error");
          teclado.innerHTML=""
        }
      }
    }
  }
})

const temaR = ()=>{

  if (retro.checked == true){
    fondo.classList.add("bg-warning")
    fondo.classList.remove("bg-white")
    fondo.classList.remove("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.add("bg-info")
      cajas1[i].classList.remove("bg-dark")
      cajas1[i].classList.remove("bg-white")
    }
    oscuro.checked=false
    localStorage.setItem("tema","retro")
  } else {
    fondo.classList.remove("bg-warning")
    fondo.classList.add("bg-white")
    fondo.classList.remove("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.add("bg-dark")
      cajas1[i].classList.remove("bg-info")
      cajas1[i].classList.remove("bg-white")
    }
    localStorage.setItem("tema","white")
  }
}

const temaO = ()=>{

  if (oscuro.checked == true){
    fondo.classList.add("bg-warning")
    fondo.classList.remove("bg-white")
    fondo.classList.add("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.remove("bg-info")
      cajas1[i].classList.remove("bg-dark")
      cajas1[i].classList.add("bg-white")
    }
    retro.checked = false
    localStorage.setItem("tema","dark")
  } else {
    fondo.classList.remove("bg-warning")
    fondo.classList.add("bg-white")
    fondo.classList.remove("bg-dark")
    for(let i=0; i <cajas1.length; i++){
      cajas1[i].classList.add("bg-dark")
      cajas1[i].classList.remove("bg-info")
      cajas1[i].classList.remove("bg-white")
    }
    localStorage.setItem("tema","white")
  }
}
