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
  if (!isCorrectAnswer) {
    gameCommon.showFailAnswer(userAnswer, questionData.answer)
  }
  else {
    console.log('Correct!')
  }

  return isCorrectAnswer
}

const getQuestionWithAnswer = () => {
  const randomInt = gameCommon.getRandomInt()
  const secondRandomInt = gameCommon.getRandomInt()

  const signRandomInt = gameCommon.getRandomInt()

  const multiplicationDivider = 3
  const minusDivider = 2

  const result = {}

  if (signRandomInt % multiplicationDivider === 0) {
    result.question = `${randomInt} * ${secondRandomInt}`
    result.answer = randomInt * secondRandomInt
  }
  else if (signRandomInt % minusDivider === 0) {
    result.question = `${randomInt} - ${secondRandomInt}`
    result.answer = randomInt - secondRandomInt
  }
  else {
    result.question = `${randomInt} + ${secondRandomInt}`
    result.answer = randomInt + secondRandomInt
  }

  return result
}

const printRules = () => {
  console.log('What is the result of the expression?')
}

export default game
