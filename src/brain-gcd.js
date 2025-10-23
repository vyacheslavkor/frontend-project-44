import * as gameCommon from './../src/game-common.js'

const game = () => {
  gameCommon.game('Find the greatest common divisor of given numbers.', processQuestion)
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

export default game
