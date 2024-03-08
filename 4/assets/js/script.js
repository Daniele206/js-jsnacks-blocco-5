const numeri = [1, 2, 3, 4, 5, 6, 7, 8];

const lettere = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const lettereENumeri = [];

const maggioreLunghezza = numeri.length > lettere.length ? numeri.length : lettere.length;

for(let i = 0; i<maggioreLunghezza; i++){
  if(numeri[i])lettereENumeri.push(numeri[i]);
  if(lettere[i])lettereENumeri.push(lettere[i]);
};

console.log(lettereENumeri);

const output = document.querySelector('.my-output');

output.innerHTML = 'L\'array complessivo é ' + lettereENumeri;