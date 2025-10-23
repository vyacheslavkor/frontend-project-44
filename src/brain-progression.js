import * as gameCommon from './game-common.js'
import _ from 'lodash'

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
  const progression = generateProgression()
  const questionIndex = gameCommon.getRandomInt(0, progression.length - 1)
  const questionProgression = progression.map((num, index) => index === questionIndex ? '..' : num)

  return { question: `${questionProgression.join(' ')}`, answer: progression[questionIndex] }
}

const generateProgression = () => {
  const step = gameCommon.getRandomInt(2, 7)
  const progressionLength = gameCommon.getRandomInt(5, 10)

  const result = [gameCommon.getRandomInt()]

  while (result.length < progressionLength) {
    result.push(_.last(result) + step)
  }

  return result
}

const printRules = () => {
  console.log('What number is missing in the progression?')
}

export default game
