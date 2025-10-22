import * as gameCommon from './../src/game-common.js'

const game = () => {
  const userName = gameCommon.getUserName()
  gameCommon.greetUser(userName)
  printRules()
  const result = gameCommon.processQuestions(processQuestion)

  result ? gameCommon.showSuccessMessage(userName) : gameCommon.showFailMessage(userName)
}

const processQuestion = () => {
  const randomNumber = gameCommon.getRandomInt()
  const isEvenNumber = isEven(randomNumber)
  const userAnswer = gameCommon.question(randomNumber)
  gameCommon.yourAnswer(userAnswer)

  const correctAnswer = isEvenNumber ? 'yes' : 'no'
  const isCorrectAnswer = userAnswer === correctAnswer
  if (!isCorrectAnswer) {
    gameCommon.showFailAnswer(userAnswer, correctAnswer)
  }
  else {
    console.log('Correct!')
  }

  return isCorrectAnswer
}

const isEven = number => number % 2 === 0

const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

export default game
