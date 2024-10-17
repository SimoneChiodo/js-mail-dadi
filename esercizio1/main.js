// Testo:
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// Elenco delle email salvate
const emails = ["pippo@email.it", "pluto@email.it", "paperino@email.it"];

// Richiesta della email dell'utente
const userEmail = prompt("Inserisci la tua email: ");

// Mostro all'utente se la mail è salvata
alert(
    emails.includes(userEmail)
        ? `Sei già registrato`
        : `Devi effetuare la registrazione`
);
