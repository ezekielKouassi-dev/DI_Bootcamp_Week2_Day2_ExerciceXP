// Exercice 1

let x = 7;
let y = 9;

if(x > y) {
    console.log(`${x} est plus grand que ${y}`);
}
else {
    console.log(`${y} est plus grand que ${x}`);
}

// Exercice 2

let newDog = "Chihuahua";
console.log(`il y a ${newDog.length} lettre dans la variable newDog`);
console.log(`en majuscule ${newDog.toUpperCase()}`);
console.log(`en minuscule ${newDog.toLowerCase()}`);

if (newDog === "Chihuahua") {
    console.log(`I love ${newDog}, it's ùy favorite dog breed`);
}
else {
    console.log("I don't care, I prefer cats");
}

// Exercice 3

let userNumber = prompt("Saissisez un nombre :");

if(userNumber % 2 == 0) {
    console.log(`${userNumber} est paire`);
}
else {
    console.log(`${userNumber} est impaire`);
}

// Exercice 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if(users.length == 0) {
    console.log("personne n'est en ligne");
}
else if (users.length == 1) {
    console.log(`${users[0]} est en ligne`);
}
else if (users.length == 2) {
    console.log(`${users[0]} et ${users[1]} sont en ligne`);
}
else {
    console.log(`${users[0]} et ${users[1]} et ${users.length - 2} autres sont en lignes`);
}