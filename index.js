
window.onkeyup = keyup;
let primo = document.getElementById('primo')
let par = document.getElementById('par')
let fibbo = document.getElementById('fibbo')

var inputTextValue;

function isPerfectSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

function isFibonacci(num) {
    return isPerfectSquare(5 * num * num + 4) ||
        isPerfectSquare(5 * num * num - 4);
}

function isPar(num) {
    return (num % 2 == 0)
}

function isPrimo (num) {
    if (num == 0 || num == 1 || num == 4) return false;
    for (let x = 2; x < num / 2; x++) {
        if (num % x == 0) return false;
    }
    return true;
}

function keyup(e) {
    inputTextValue = e.target.value;
    if (inputTextValue != '') {
        if (isPrimo(inputTextValue)) { primo.innerText = 'es Primo' } else { primo.innerText = 'no es Primo' }
        if (isPar(inputTextValue)) { par.innerText = 'es par' } else { par.innerText = ' no es par' }
        if (isFibonacci(inputTextValue)) { fibbo.innerText = 'es fibbo' } else { fibbo.innerText = 'no es fibbo' }
    }


}