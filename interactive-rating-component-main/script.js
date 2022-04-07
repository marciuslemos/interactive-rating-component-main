let choice1 = document.getElementById('1');
let choice2 = document.getElementById('2');
let choice3 = document.getElementById('3');
let choice4 = document.getElementById('4');
let choice5 = document.getElementById('5');

let mediumGrey = '#262f38'
let lightGrey = '#848d96'
let orange = '#fb7413'
let white = '#fff'
let checkORange = 'rgb(251, 116, 19)'

let userChoice = 1;

choice1.addEventListener('click', () => {
    choice2.style.backgroundColor = mediumGrey;
    choice2.style.color = lightGrey
    choice3.style.backgroundColor = mediumGrey;
    choice3.style.color = lightGrey
    choice4.style.backgroundColor = mediumGrey;
    choice4.style.color = lightGrey
    choice5.style.backgroundColor = mediumGrey;
    choice5.style.color = lightGrey 
    choice1.style.backgroundColor = orange
    choice1.style.color = white;
})
choice2.addEventListener('click', () => {
    choice1.style.backgroundColor = mediumGrey;
    choice1.style.color = lightGrey
    choice3.style.backgroundColor = mediumGrey;
    choice3.style.color = lightGrey
    choice4.style.backgroundColor = mediumGrey;
    choice4.style.color = lightGrey
    choice5.style.backgroundColor = mediumGrey;
    choice5.style.color = lightGrey 
    choice2.style.backgroundColor = orange
    choice2.style.color = white;
})
choice3.addEventListener('click', () => {
    choice2.style.backgroundColor = mediumGrey;
    choice2.style.color = lightGrey
    choice1.style.backgroundColor = mediumGrey;
    choice1.style.color = lightGrey
    choice4.style.backgroundColor = mediumGrey;
    choice4.style.color = lightGrey
    choice5.style.backgroundColor = mediumGrey;
    choice5.style.color = lightGrey 
    choice3.style.backgroundColor = orange
    choice3.style.color = white;
})
choice4.addEventListener('click', () => {
    choice2.style.backgroundColor = mediumGrey;
    choice2.style.color = lightGrey
    choice3.style.backgroundColor = mediumGrey;
    choice3.style.color = lightGrey
    choice1.style.backgroundColor = mediumGrey;
    choice1.style.color = lightGrey
    choice5.style.backgroundColor = mediumGrey;
    choice5.style.color = lightGrey 
    choice4.style.backgroundColor = orange
    choice4.style.color = white;
})
choice5.addEventListener('click', () => {
    choice2.style.backgroundColor = mediumGrey;
    choice2.style.color = lightGrey
    choice3.style.backgroundColor = mediumGrey;
    choice3.style.color = lightGrey
    choice4.style.backgroundColor = mediumGrey;
    choice4.style.color = lightGrey
    choice1.style.backgroundColor = mediumGrey;
    choice1.style.color = lightGrey 
    choice5.style.backgroundColor = orange
    choice5.style.color = white;
})

let choices = [choice1, choice2,choice3,choice4,choice5]

document.getElementById('submit-btn').addEventListener('click',() => {
    choices.forEach(choice => {
        if(choice.style.backgroundColor == checkORange) {
            userChoice = choice.id
        }
    })
    document.querySelector('#container-geral').style.display = 'none'
    document.querySelector('.nota-selecionada').textContent = `You selected ${userChoice} out of 5`
    document.querySelector('.attribution').style.display = 'none'
    document.querySelector('#geral2').style.display = 'flex'
})

