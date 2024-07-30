const Shape = require("./Shape");

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render() {
        return `
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="25" width="50" height="50" r="50" fill="${this.color}" />
                <text x="33" y="58" font-size="25" fill="${this.textColor}">${this.text}</text>
            </svg>
            `
    }
}

module.exports = Square