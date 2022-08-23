const ul = document.getElementsByTagName('ul')[0]
const btn = document.getElementsByTagName('button')[0]

let i = -1

btn.onclick = function(){
    changeLight(getNextColor())
}

function changeLight(color){
    ul.getElementsByClassName('on')[0]?.classList.remove('on')
    ul.getElementsByClassName(color)[0].classList.add('on')
}

function getNextColor(){
    const colors = ['red', 'yellow', 'green', 'yellow']

    i++

    if (i > 3) i = 0

    return colors[i]
}