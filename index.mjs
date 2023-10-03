import { getRandomNumber, run } from "./support.mjs";

console.log('🚀');

run(async (question) => {
    const name = await question('Enter your name: ');
    const lucky_number = getRandomNumber(1, 7);
    console.log(`Hello ${name}! Your lucky number is ${lucky_number}.`);
});
