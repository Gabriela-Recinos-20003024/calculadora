//const mousetrap = requiere('mousetrap')

//mousetrap.bind('1', clickUno)
//mousetrap.bind('2', clickUno)
//mousetrap.bind('+', clickSuma)


document.getElementById('botonUno').addEventListener('click', clickUno)
document.getElementById('botonDos').addEventListener('click', clickDos)
document.getElementById('suma').addEventListener('click', clickSuma)

document.getElementById('botonTres').addEventListener('click', clickTres)
document.getElementById('botonCuatro').addEventListener('click', clickCuatro)
document.getElementById('resta').addEventListener('click', clickResta)

document.getElementById('botonCinco').addEventListener('click', clickCinco)
document.getElementById('botonSeis').addEventListener('click', clickSeis)
document.getElementById('mult').addEventListener('click', clickMult)

document.getElementById('botonSiete').addEventListener('click', clickSiete)
document.getElementById('botonOcho').addEventListener('click', clickOcho)
document.getElementById('division').addEventListener('click', clickDiv)

document.getElementById('botonNueve').addEventListener('click', clickNueve)
document.getElementById('botonCero').addEventListener('click', clickCero)
document.getElementById('regresar').addEventListener('click', clickRegresar)
document.getElementById('borrar').addEventListener('click', clickBorrar)


var actualElemento = document.getElementById('numeroActual')
var resultadoElemento = document.getElementById('resultado')



var actual = ''
var resultado = 0

function clickUno(){
 actual += 1
 actualElemento.innerHTML = actual 
 Listado.push('1')

}
function clickDos(){
    actual += 2
    actualElemento.innerHTML = actual 
    Listado.push('2')
   
   }
function clickTres(){
    actual += 3
    actualElemento.innerHTML = actual 
    Listado.push('3')
   
   }
function clickCuatro(){
    actual += 4
    actualElemento.innerHTML = actual 
    Listado.push('4')
   
   }
function clickCinco(){
    actual += 5
    actualElemento.innerHTML = actual 
    Listado.push('5')
   
   }
function clickSeis(){
    actual += 6
    actualElemento.innerHTML = actual 
    Listado.push('6')
   
   }
function clickSiete(){
    actual += 7
    actualElemento.innerHTML = actual 
    Listado.push('7')
   
   }
function clickOcho(){
    actual += 8
    actualElemento.innerHTML = actual 
    Listado.push('8')
   
   }
function clickNueve(){
    actual += 9
    actualElemento.innerHTML = actual 
    Listado.push('9')
   
   }
function clickCero(){
    actual += 0
    actualElemento.innerHTML = actual 
    Listado.push('0')
   
   }

   var Listado= Array()

  
    function clickBorrar(){
    actual = 0
    actualElemento.innerHTML= actual
    resultado = 0
    resultadoElemento.innerHTML= actual
   
   } 
   
   function clickRegresar(){
     
    alert(Listado)
   }

function clickSuma(){
    if(actual != ''){
        resultado += parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
        Listado.push('+')
    }
}

function clickResta(){
    if(actual != ''){
        resultado -= parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
        Listado.push('-')
    }
}
function clickMult(){
    if(actual != ''){
        resultado *= parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
        Listado.push('x')
    }
}
function clickDiv(){
    if(actual != ''){
        resultado /= parseInt(actual)
        actual = ''
        actualElemento.innerHTML = '0'
        resultadoElemento.innerHTML = resultado
        Listado.push('/')
    }
}




