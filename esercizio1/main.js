// Testo:
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// Elenco delle email salvate
const emails = ["pippo@email.it", "pluto@email.it", "paperino@email.it"];

let userEmail, isUserEmailValid;
while (!isUserEmailValid) {
    // Richiesta della email dell'utente
    userEmail = prompt("Inserisci la tua email: ");

    // Controllo se l'email inserita è effettivamente un'email (non perfettamente -_-)
    isUserEmailValid = userEmail.includes("@") && userEmail.includes(".");

    // Se il dato inserito non è valido informo l'utente
    if (!isUserEmailValid) {
        alert("L'email deve contenere @ e .");
    }
}

// Mostro all'utente se la mail è salvata
alert(
    emails.includes(userEmail)
        ? `Sei già registrato`
        : `Devi effetuare la registrazione`
);
