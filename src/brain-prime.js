import * as gameCommon from './game-common.js'

const game = () => {
  gameCommon.game('Answer "yes" if given number is prime. Otherwise answer "no".', processQuestion)
}

const processQuestion = () => {
  const questionValue = gameCommon.getRandomInt()
  const userAnswer = gameCommon.question(questionValue)
  const correctAnswer = isPrime(questionValue) ? 'yes' : 'no'

  const isCorrectAnswer = userAnswer === correctAnswer

  isCorrectAnswer ? console.log('Correct!') : gameCommon.showFailAnswer(userAnswer, correctAnswer)

  return isCorrectAnswer
}

const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  if (num === 2) {
    return true
  }

  if (num % 2 === 0) {
    return false
  }

  const max = Math.floor(Math.sqrt(num))
  let index = 3

  while (index <= max) {
    if (index % 2 === 0) {
      index++
      continue
    }

    if (num % index === 0) {
      return false
    }

    index++
  }

  return true
}

export default game
