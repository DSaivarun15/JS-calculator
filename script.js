function Addinputs(){
    let num1=document.getElementById('firstinput').value
    let num2=document.getElementById('secondinput').value
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let h1 = document.getElementById("result")
    res= num1+num2
    h1.innerHTML="Result: " + res
}

function Subinputs(){
    let num1 = document.getElementById('firstinput').value 
    let num2 = document.getElementById('secondinput').value
    let h1 = document.getElementById("result")
    res= num1-num2
    h1.innerHTML="Result: " + res
}

function Mulinputs(){
    let num1 = document.getElementById('firstinput').value 
    let num2 = document.getElementById('secondinput').value
    let h1 = document.getElementById("result")
    res= num1*num2
    h1.innerHTML="Result: " + res
}

function Divinputs(){
    let num1 = document.getElementById('firstinput').value 
    let num2 = document.getElementById('secondinput').value
    let h1 = document.getElementById("result")
    res= num1/num2
    h1.innerHTML="Result: " + res
}

function Powinputs(){
    let num1 = document.getElementById('firstinput').value 
    let num2 = document.getElementById('secondinput').value
    let h1 = document.getElementById("result")
    res= num1**num2
    h1.innerHTML="Result: " + res
}