import readlineSync from 'readline-sync';

export default () => {
    const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
    console.log(`Hello, ${name}!`)
}