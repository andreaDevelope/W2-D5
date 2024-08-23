/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

const es1 = (param = pets) => {
  for (i = 0; i < param.length; i++) {
    console.log(param[i]);
  }
};

es1();

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const es2 = () => {
  pets.sort();
  console.log(pets);
};

es2();

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const es3 = () => {
  // pets.reverse();  //USO IL METODO REVERSE() DEGLI ARRAY
  // console.log(pets);

  for (let i = pets.length - 1; i >= 0; i--) {
    //USO IL CICLO FOR
    console.log(pets[i]);
  }
};

es3();

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const es4 = () => {
  const firstPet = pets.shift();
  pets.push(firstPet);

  console.log(pets);
};

es4();

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const es5 = (param = cars) => {
  param.forEach((car) => {
    car.licensePlate = "New York";
  });
  console.log(param);
};

es5();

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
  brand: "Volkswagen",
  model: "Polo",
  color: "black",
  trims: ["life", "style", "r-line"],
  licensePlate: "New York",
};

const es6 = (param1 = cars, param2 = newCar) => {
  param1.push(param2);
  param1.forEach((car) => {
    car.trims.pop();
  });
  console.log(param1);
};

// // es6();

// /* ESERCIZIO 7
//     Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
// */
const justTrims = [];

const es7 = () => {
  cars.forEach((car) => {
    justTrims.push(car.trims[0]); // Aggiungi solo il primo elemento di trims
  });
};

es7();
console.log(justTrims); // Output: ['titanium', 'allure', 'life']

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const es8 = () => {
  cars.forEach((car) => {
    if (car.color[0].toLowerCase() === "b") {
      // Controlla la prima lettera di color
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  });
};

es8();

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

const es9 = () => {
  let i = 0;

  while (i < numericArray.length) {
    console.log(numericArray[i]);

    if (numericArray[i] === 32) {
      break;
    }

    i++;
  }
};

es9();

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alfabetoIt = "abcdefghijklmnopqrstuvwxyz";

const es10 = () => {
  const listaPos = [];

  const getPosition = (char) => {
    let position = 0;
    switch (char) {
      case "a":
        position = 1;
        break;
      case "b":
        position = 2;
        break;
      case "c":
        position = 3;
        break;
      case "d":
        position = 4;
        break;
      case "e":
        position = 5;
        break;
      case "f":
        position = 6;
        break;
      case "g":
        position = 7;
        break;
      case "h":
        position = 8;
        break;
      case "i":
        position = 9;
        break;
      case "j":
        position = 10;
        break;
      case "k":
        position = 11;
        break;
      case "l":
        position = 12;
        break;
      case "m":
        position = 13;
        break;
      case "n":
        position = 14;
        break;
      case "o":
        position = 15;
        break;
      case "p":
        position = 16;
        break;
      case "q":
        position = 17;
        break;
      case "r":
        position = 18;
        break;
      case "s":
        position = 19;
        break;
      case "t":
        position = 20;
        break;
      case "u":
        position = 21;
        break;
      case "v":
        position = 22;
        break;
      case "w":
        position = 23;
        break;
      case "x":
        position = 24;
        break;
      case "y":
        position = 25;
        break;
      case "z":
        position = 26;
        break;
    }
    return position;
  };

  charactersArray.forEach((char) => {
    listaPos.push(getPosition(char));
  });

  console.log(listaPos);
};

es10();
