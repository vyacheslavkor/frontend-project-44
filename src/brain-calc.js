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
  gameCommon.yourAnswer(userAnswer)

  const isCorrectAnswer = userAnswer.toString() === questionData.answer.toString()
  isCorrectAnswer ? console.log('Correct!') : gameCommon.showFailAnswer(userAnswer, questionData.answer)

  return isCorrectAnswer
}

const getQuestionWithAnswer = () => {
  const a = gameCommon.getRandomInt()
  const b = gameCommon.getRandomInt()

  const signs = [
    { sign: '+', answer: (a, b) => a + b },
    { sign: '-', answer: (a, b) => a - b },
    { sign: '*', answer: (a, b) => a * b },
  ]

  const signIndex = gameCommon.getRandomInt(0, signs.length - 1)
  const sign = signs[signIndex].sign

  return { question: `${a} ${sign} ${b}`, answer: signs[signIndex].answer(a, b) }
}

const printRules = () => {
  console.log('What is the result of the expression?')
}

export default game
