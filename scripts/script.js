let nums= false

let teclado = document.getElementById("teclado")
let titulo = document.getElementById("titulo")
 
let calculadora = document.getElementById("caja")
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
