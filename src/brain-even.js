import * as gameCommon from './../src/game-common.js'

const game = () => {
  gameCommon.game('Answer "yes" if the number is even, otherwise answer "no".', processQuestion)
}

const processQuestion = () => {
  const randomNumber = gameCommon.getRandomInt()
  const isEvenNumber = isEven(randomNumber)
  const userAnswer = gameCommon.question(randomNumber)
  gameCommon.yourAnswer(userAnswer)

  const correctAnswer = isEvenNumber ? 'yes' : 'no'
  const isCorrectAnswer = userAnswer === correctAnswer
  isCorrectAnswer ? console.log('Correct!') : gameCommon.showFailAnswer(userAnswer, correctAnswer)

  return isCorrectAnswer
}

const isEven = number => number % 2 === 0

export default game
