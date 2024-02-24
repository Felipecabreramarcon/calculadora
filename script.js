var res = window.document.getElementById('res').innerHTML
var btnc = window.document.getElementById('btnC').innerHTML
var btn1 = window.document.getElementById('btn1').innerHTML
var btn2 = window.document.getElementById('btn2').innerHTML
var btn3 = window.document.getElementById('btn3').innerHTML
var btn4 = window.document.getElementById('btn4').innerHTML
var btn5 = window.document.getElementById('btn5').innerHTML
var btn6 = window.document.getElementById('btn6').innerHTML
var btn7 = window.document.getElementById('btn7').innerHTML
var btn8 = window.document.getElementById('btn8').innerHTML
var btn9 = window.document.getElementById('btn9').innerHTML
var btnmais = window.document.getElementById('btn+').innerHTML
var btn0 = window.document.getElementById('btn0').innerHTML
var btnvir = window.document.getElementById('btn,').innerHTML
var btnigual = window.document.getElementById('btn=').innerHTML
var btnx = window.document.getElementById('btnx').innerHTML
var num1;
var num2;
var operador;

function botaoc() {

    res = ''
    window.document.getElementById('res').innerHTML = res

}
function botao1() {
    res += btn1.trim()
    window.document.getElementById('res').innerHTML = res
    console.log(btn1)

}
function botao2() {
    res += btn2.trim()
    window.document.getElementById('res').innerHTML = res
    console.log(btn2)

}
function botao3() {
    res += btn3.trim()
    window.document.getElementById('res').innerHTML = res
    console.log(btn3)

}
function botao4() {
    res += btn4.trim()
    window.document.getElementById('res').innerHTML = res

}
function botao5() {
    res += btn5.trim()
    window.document.getElementById('res').innerHTML = res

}
function botao6() {
    res += btn6.trim()
    window.document.getElementById('res').innerHTML = res

}
function botao7() {
    res += btn7.trim()
    window.document.getElementById('res').innerHTML = res

}
function botao8() {
    res += btn8.trim()
    window.document.getElementById('res').innerHTML = res

}
function botao9() {
    res += btn9.trim()
    window.document.getElementById('res').innerHTML = res

}
function botao0() {
    res += btn0.trim()
    window.document.getElementById('res').innerHTML = res

}
function botaox() {
    num1 = parseFloat(res)
    operador = '*'
    res = ''
    window.document.getElementById('res').innerHTML = res
}

function botaovir() {
    res += btnvir.trim()
    window.document.getElementById('res').innerHTML = res
    res = res.replace(',', '.')
}

function botaomais() {
    num1 = parseFloat(res)
    operador = '+'
    res = ''
    window.document.getElementById('res').innerHTML = res

}

function botaobar() {
    num1 = parseFloat(res)
    operador = '/'
    res = ''
    window.document.getElementById('res').innerHTML = res

}
function botaomen() {
    num1 = parseFloat(res)
    operador = '-'
    res = ''
    window.document.getElementById('res').innerHTML = res
}

function calculo() {
    num2 = parseFloat(res)

    if (operador == '*') {
        res = num1 * num2
        window.document.getElementById('res').innerHTML = res

    } else if (operador == '+') {
        res = num1 + num2
        window.document.getElementById('res').innerHTML = res

    } else if (operador == '/') {
        res = num1 / num2
        window.document.getElementById('res').innerHTML = res
    } else if (operador == '-') {
        res = num1 - num2
        window.document.getElementById('res').innerHTML = res
    }

}