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

const firstNumber = 2;
const secondNumber = 7;

const arrayFinale = [];

for(let i = firstNumber - 1; i <= secondNumber - firstNumber + 1; i++){
  arrayFinale.push(arrayIniziale[i]);
};

console.log(arrayFinale);

const output = document.querySelector('.my-output');

output.innerHTML = 'I nome della lista compresi tra i numeri che hai inserito cono: ' + arrayFinale;