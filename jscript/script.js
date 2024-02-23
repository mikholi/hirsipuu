const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')


const word = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let guesses = 0

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = word[random]
    maskedWord = "*".repeat(randomizedWord.length)
    guesses = 0
    console.log(randomizedWord)
    output.innerHTML = maskedWord
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        if (guess.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                win()
            }
            guesses++
            span.innerHTML = guesses
        } else {
            alert("You guessed wrong!")

        }
        input.value=''
    }
})

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}.`)
    newGame()
}




