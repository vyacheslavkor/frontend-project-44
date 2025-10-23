import readlineSync from 'readline-sync'
import _ from 'lodash'

export const game = (rules, processQuestion) => {
  const userName = getUserName()
  greetUser(userName)
  printRules(rules)
  const result = processQuestions(processQuestion)

  result ? showSuccessMessage(userName) : showFailMessage(userName)
}

const printRules = (rules) => {
  console.log(rules)
}

export const getUserName = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')

export const greetUser = (userName) => {
  console.log(`Hello, ${userName}!`)
}

export const showSuccessMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`)
}

export const showFailMessage = (userName) => {
  console.log(`Let's try again, ${userName}!`)
}

export const showFailAnswer = (userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
}

export const getRandomInt = (min = 1, max = 100) => {
  return _.random(min, max)
}

export const question = question => readlineSync.question(`Question: ${question}\n`)

export const yourAnswer = (answer) => {
  console.log(`Your answer: ${answer}`)
}

export const processQuestions = (processQuestion) => {
  const questionsCount = 3
  let result = true
  let questionCounter = 1

  while (result && questionCounter <= questionsCount) {
    let questionResult = processQuestion()
    questionCounter++
    if (questionResult) {
      continue
    }

    result = false
    break
  }

  return result
}
