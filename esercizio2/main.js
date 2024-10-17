// Testo:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero il numero dell'utente e del computer
let userNumber = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;

// Controllo che i numeri non siano uguali
while (userNumber === computerNumber) {
    computerNumber = Math.floor(Math.random() * 6) + 1;
}

// Informo l'utente dei numeri generati
alert(
    `Il tuo numero è: ${userNumber}. \nIl numero del computer è: ${computerNumber}.`
);

// Informo l'utente del vincitore
alert(
    userNumber > computerNumber
        ? `HAI VINTO!🎉 \n(☞ﾟヮﾟ)☞`
        : `Hai perso!😥 \nಥ_ಥ`
);
