/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/
var n = 4;
var user1 = Math.floor(Math.random() * (25)) + 1;
var user2 = Math.floor(Math.random() * (25)) + 1;
var a = 0;
var b = Math.floor(Math.random() * (25)) + 1;
var c = 0;


  for (i = 0;i < n; i++){
b++;
user1 += i;

user2 += i;

document.write(b);

if (user1 < user2) {
  a = ' user 2 is the winner ';
} if (user1 > user2) {
a =' user 1 is the winner ';
} if (user1 == user2) {
a = ' drow ';
}



}
console.log(a, user1, user2);
