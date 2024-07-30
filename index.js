const inqiurer = require('inquirer')
const { Circle } = require('./lib/shapes')

const colorKeywords = {
    "red": "#f54242",
    "green": "#42f575",
    "blue": "#424ef5",

    "pink": "#f542b6",
    "purple": "#b342f5",
    "yellow": "#f5e642",
    "orange": "#f59042",
    "teal": "#42f5d7"
}

const welcomeText = `
Welcome to logo generator! Let's get started. Here's a quick summary of how this works.
1. Enter text to be displayed on your shape
2. Choose the text's color (keyword or hex)
3. Choose a shape
4. Pick the shape's color (keyword or hex)

Once complete, you can find your generated shape in the root folder.
Sound good?`

const questions = [
    // intro
    {
        type: "confirm",
        message:welcomeText
    },
    // shape text (3 char max)
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters to be displayed on your shape.",
        validate: (answer) => answer.length < 4
    },
    
    // text color (keyword or hex)
    {
        type: "list",
        name: "textColorType",
        message: "(Text Color) Would you like to choose from a list of pre-defined colors, or enter your own?",
        choices: [ "keyword", "hex" ]
    },
    // text color (keyword)
    {
        type: "list",
        name: "textColorKeyword",
        message: "Choose a color keyword.",
        choices: Object.keys(colorKeywords),
        when: (answers) => answers.textColorType === "keyword"
    },
    // text color (hex)
    {
        type: "input",
        name: "textColorHex",
        message: "Enter the color hex value. (including leading #)",
        validate: (answer) => (answer.includes("#") && answer.length === 7),
        when: (answers) => answers.textColorType === "hex"
    },

    // shape
    {
        type: "list",
        name: "shape",
        message: "Choose a shape.",
        choices: [ "circle", "square", "triangle" ]
    },
    // shape color (keyword or hex)
    {
        type: "list",
        name: "shapeColorType",
        message: "(Shape Color) Would you like to choose from a list of pre-defined colors, or enter your own?",
        choices: [ "keyword", "hex" ]
    },
    // shape color (keyword)
    {
        type: "list",
        name: "shapeColorKeyword",
        message: "Choose a color keyword.",
        choices: Object.keys(colorKeywords),
        when: (answers) => answers.shapeColorType === "keyword"
    },
    // shape color (hex)
    {
        type: "input",
        name: "shapeColorHex",
        message: "Enter the color hex value. (including leading #)",
        validate: (answer) => (answer.includes("#") && answer.length === 7),
        when: (answers) => answers.shapeColorType === "hex"
    },
]

inqiurer.default.prompt(questions).then((answers) => {
    console.log(answers)

    const shapeColor = colorKeywords[answers.shapeColorKeyword] ?? answers.shapeColorHex
    const textColor = colorKeywords[answers.textColorKeyword] ?? answers.textColorHex

    if (answers.shape === "circle") {
        const circle = new Circle(shapeColor, answers.text, textColor)
    }
})