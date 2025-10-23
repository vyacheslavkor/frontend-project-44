import * as gameCommon from './../src/game-common.js'

const game = () => {
  const userName = gameCommon.getUserName()
  gameCommon.greetUser(userName)
  printRules()
  const result = gameCommon.processQuestions(processQuestion)

  result ? gameCommon.showSuccessMessage(userName) : gameCommon.showFailMessage(userName)
}

const processQuestion = () => {
  const questionData = getQuestionWithAnswer()
  const userAnswer = gameCommon.question(questionData.question)

  const isCorrectAnswer = userAnswer.toString() === questionData.answer.toString()

  isCorrectAnswer ? console.log('Correct!') : gameCommon.showFailAnswer(userAnswer, questionData.answer)

  return isCorrectAnswer
}

const getQuestionWithAnswer = () => {
  const a = gameCommon.getRandomInt()
  const b = gameCommon.getRandomInt()
  const gcd = findGcd(a, b)

  return { question: `${a} ${b}`, answer: gcd }
}

const findGcd = (a, b) => {
  while (b !== 0) {
    const r = a % b
    a = b
    b = r
  }

  return a
}

const printRules = () => {
  console.log('Find the greatest common divisor of given numbers.')
}

export default game
