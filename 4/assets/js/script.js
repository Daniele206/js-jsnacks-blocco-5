const numeri = [1, 2, 3, 4, 5, 6];

const lettere = ['a', 'b', 'c', 'd', 'e', 'f'];

const lettereENumeri = [];

for(let i = 0; i<numeri.length; i++){
  lettereENumeri.push(numeri[i]);
  lettereENumeri.push(lettere[i]);
}

console.log(lettereENumeri);

const output = document.querySelector('.my-output');

output.innerHTML = 'L\'array complessivo é ' + lettereENumeri;