import { getRandomNumber, run } from "./support.mjs";

console.log('🚀');

run(async (question) => {
    const name = await question('Enter your name: ')
    const age = parseInt(await question('Enter your age: '), 10);
    let maxNumber, maxAttempts;

    if (age >= 0 && age <= 10) {
        console.log('You have selected the easy level.');
        maxNumber = 20;
        maxAttempts = 5;
    } else if (age >= 11 && age <= 30) {
        console.log('You have selected the medium level.');
        maxNumber = 100;
        maxAttempts = 4;
    } else if (age >= 31 && age <= 80) {
        console.log('You have selected the hard level.');
        maxNumber = 500;
        maxAttempts = 3;
    } else {
        console.log('Sorry, you are not within the age range for a difficulty level.');
        return;
    }

    const secretNumber = getRandomNumber(1, maxNumber);
    console.log(`Try to guess the secret number between 1 and ${maxNumber}. You have ${maxAttempts} attempts.`);

    for (let i = 0; i < maxAttempts; i++) {
        const guess = parseInt(await question('Enter your guess: '), 10);

        if (guess === secretNumber) {
            console.log(`Congratulations ${name}! You've guessed the correct number.`);
            return;
        } else if (guess < secretNumber) {
            console.log('Your guess is too low.');
        } else {
            console.log('Your guess is too high.');
        }
    }

    console.log(`Game over ${name}! The secret number was ${secretNumber}.`);
});