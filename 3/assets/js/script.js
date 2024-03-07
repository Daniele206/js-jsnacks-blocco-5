const stringa = prompt('Scrivi una frase/parola')
console.log(stringa);

function reverse(text){
  const textReverse = text.split('').reverse().join('');
  return textReverse;
};

console.log(reverse(stringa));

const output = document.querySelector('.my-output');

output.innerHTML= 'Hai scritto ' + stringa + ' che al contrario é ' + reverse(stringa);