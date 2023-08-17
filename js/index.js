document.getElementById('red').addEventListener("click" , function(){
    window.localStorage.setItem('color' , 'red');
    document.getElementById('p').style.backgroundColor = window.localStorage.getItem('color');
})

document.getElementById('green').addEventListener("click" , function(){
    window.localStorage.setItem('color' , 'green');
    document.getElementById('p').style.backgroundColor = window.localStorage.getItem('color');
})

document.getElementById('blue').addEventListener("click" , function(){
    window.localStorage.setItem('color' , 'blue');
    document.getElementById('p').style.backgroundColor = window.localStorage.getItem('color');
})

document.getElementById('black').addEventListener("click" , function(){
    window.localStorage.setItem('color' , 'black');
    document.getElementById('p').style.backgroundColor = window.localStorage.getItem('color');
})

if(window.localStorage.getItem('color')){
    document.getElementById('p').style.backgroundColor = window.localStorage.getItem('color');
}