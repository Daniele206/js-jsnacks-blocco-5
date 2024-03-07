const arrayIniziale = [
  'Leonardo',
  'Francesco',
  'Alessandro',
  'Lorenzo',
  'Mattia',
  'Tommaso',
  'Gabriele',
  'Andrea',
  'Riccardo',
  'Edoardo'
];

let firstNumber;
let firstNumberOk = 'notOk';
let secondNumber;
let secondNumberOk = 'notOk';

while(firstNumberOk != 'ok' || secondNumberOk != 'ok'){
  if(firstNumberOk === 'notOk'){
    firstNumber = prompt('isnerisci un numero da 0 a ' + arrayIniziale.length);
  }
  if(firstNumber >= 0 && firstNumber <= arrayIniziale.length){
    firstNumberOk = 'ok';
    secondNumber = prompt('isnerisci un numero da ' + firstNumber + ' a ' + arrayIniziale.length);
    
    if(secondNumber >= firstNumber && secondNumber <= arrayIniziale.length){
      secondNumberOk = 'ok';
    }
  };
};


const arrayFinale = [];

for(let i = firstNumber - 1; i <= secondNumber - 1; i++){
  arrayFinale.push(arrayIniziale[i]);
};

console.log(arrayFinale);

const output = document.querySelector('.my-output');

output.innerHTML = 'I nomi della lista compresi tra i numeri che hai inserito cono: ' + arrayFinale;