import { getRandomNumber, run } from "./support.mjs";

console.log('🚀');

run(async (question) => {
    const secretNumber = getRandomNumber(1, 100);
    console.log('Try to guess the secret number between 1 and 100. You have 3 attempts.');

    for (let i = 0; i < 3; i++) {
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

    console.log(`Game over! The secret number was ${secretNumber}.`);
});