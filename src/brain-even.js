import readlineSync from 'readline-sync'

const game = () => {
  const userName = getUserName()
  greetUser(userName)
  printRules()
  const result = processQuestions()

  result ? showSuccessMessage(userName) : showFailMessage(userName)
}

const showSuccessMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`)
}

const showFailMessage = (userName) => {
  console.log(`Let's try again, ${userName}!`)
}

const processQuestions = () => {
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

const processQuestion = () => {
  const randomNumber = getRandomInt()
  const isEvenNumber = isEven(randomNumber)
  const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`)

  console.log(`Your answer: ${userAnswer}`)

  const correctAnswer = isEvenNumber ? 'yes' : 'no'
  const isCorrectAnswer = userAnswer === correctAnswer
  if (!isCorrectAnswer) {
    showFailAnswer(userAnswer, correctAnswer)
  }

  return isCorrectAnswer
}

const showFailAnswer = (userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
}

const greetUser = (userName) => {
  console.log(`Hello, ${userName}!`)
}

const isEven = number => number % 2 === 0

const printRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

const getUserName = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ')

const getRandomInt = () => {
  const randomValues = crypto.getRandomValues((new Uint8Array(1)))
  return randomValues[0]
}

export default game
