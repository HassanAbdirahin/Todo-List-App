const random = Math.floor(Math.random() * 20) + 1;
const randomNumber = document.querySelector('#box');
const inputNumber = document.querySelector('#input');
const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const again = document.querySelector('.again')

// randomNumber.textContent = random; //Qish

btn.addEventListener ('click', () => {
    const value = inputNumber.value;
    const status = document.querySelector('#status')

    if(!value){
        status.textContent = 'Please Enter a Number'
        return
    }

    if(+value === random) {
        status.textContent = `You guessed correctly: ${value}`;
        body.style.backgroundColor = '#5fff37';
        status.style.color = 'white';
        value.textContent = value;
    }

    else{
        if(random < value){
            status.textContent = 'Too high'
        }

        else if(random > value){
            status.textContent = 'Too low'
        }
    }
})

// reset
again.addEventListener('click', reset);

function reset(){
    status.textContent = 'Start guessing...';
    value.textContent = '?';
}