const zucchine = [
  {
    varietá: 'nera',
    perso_in_g: 100,
    lunghezza_in_cm: 14,
  },
  {
    varietá: 'napoletana',
    perso_in_g: 225,
    lunghezza_in_cm: 21,
  },
  {
    varietá: 'tonda',
    perso_in_g: 150,
    lunghezza_in_cm: 16,
  },
  {
    varietá: 'trombetta',
    perso_in_g: 300,
    lunghezza_in_cm: 26,
  },
  {
    varietá: 'gialla',
    perso_in_g: 250,
    lunghezza_in_cm: 24,
  },
  {
    varietá: 'fiorentina',
    perso_in_g: 50,
    lunghezza_in_cm: 7,
  },
  {
    varietá: 'romanesca',
    perso_in_g: 80,
    lunghezza_in_cm: 9,
  },
];

let pesoTotale = 0;

for(zucchina of zucchine){
  pesoTotale = pesoTotale + zucchina.perso_in_g;
}

console.log(pesoTotale);

const output = document.querySelector('.my-output');

output.innerHTML = 'Tutte le zucchine insieme pesano ' + pesoTotale + 'g';