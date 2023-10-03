import { createInterface } from 'readline';
import { promisify } from 'util';

/**
 * Runs the provided function with a promisified readline question function.
 * 
 * @param {(askQuestion: (query: string) => Promise<string>) => Promise<void>} async_function - The function to run.
 */
export async function run(async_function) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const askQuestion = promisify(rl.question).bind(rl);

    await async_function(askQuestion);

    rl.close();
}

/**
 * Generates a random number between the provided min and max values.
 * 
 * @param {number} min - The minimum value to generate.
 * @param {number} max - The maximum value to generate.
 * @returns {number} The generated random number.
 */
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
