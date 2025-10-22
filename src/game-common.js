import readlineSync from 'readline-sync'

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

export const getRandomInt = () => {
  const randomValues = crypto.getRandomValues((new Uint8Array(1)))
  return randomValues[0]
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
