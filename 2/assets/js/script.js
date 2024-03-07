const zucchine = [
  {
    varietá: 'nera',
    peso_in_g: 100,
    lunghezza_in_cm: 14,
  },
  {
    varietá: 'napoletana',
    peso_in_g: 225,
    lunghezza_in_cm: 21,
  },
  {
    varietá: 'tonda',
    peso_in_g: 150,
    lunghezza_in_cm: 16,
  },
  {
    varietá: 'trombetta',
    peso_in_g: 300,
    lunghezza_in_cm: 26,
  },
  {
    varietá: 'gialla',
    peso_in_g: 250,
    lunghezza_in_cm: 24,
  },
  {
    varietá: 'fiorentina',
    peso_in_g: 50,
    lunghezza_in_cm: 7,
  },
  {
    varietá: 'romanesca',
    peso_in_g: 80,
    lunghezza_in_cm: 9,
  },
  {
    varietá: 'patisson',
    peso_in_g: 450,
    lunghezza_in_cm: 35,
  },
  {
    varietá: 'rugoso friulano',
    peso_in_g: 200,
    lunghezza_in_cm: 19,
  },
  {
    varietá: 'crookneck',
    peso_in_g: 170,
    lunghezza_in_cm: 16,
  },
];

const zucchineGrandi = zucchine.filter(zucchinaGrande);
const zucchinePiccole = zucchine.filter(zucchinaPiccola);

function zucchinaGrande(zucchina){
  return zucchina.lunghezza_in_cm > 15;
};

function zucchinaPiccola(zucchina){
  return zucchina.lunghezza_in_cm < 15;
};

console.log(zucchineGrandi); 

let sommaZucchineGrandi = 0;

for(zucchinaG of zucchineGrandi){
  sommaZucchineGrandi = sommaZucchineGrandi + zucchinaG.peso_in_g
}

console.log(sommaZucchineGrandi);

//-----------------------------------------------

console.log(zucchinePiccole); 

let sommaZucchinePiccole = 0;

for(zucchinaP of zucchinePiccole){
  sommaZucchinePiccole = sommaZucchinePiccole + zucchinaP.peso_in_g
}

console.log(sommaZucchinePiccole);


const output = document.querySelector('.my-output');

output.innerHTML = 'Le zucchine grandi pesano insieme ' + sommaZucchineGrandi + 'g ' + 'e quelle piccole ' + sommaZucchinePiccole + 'g';