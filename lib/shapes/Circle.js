const Shape = require("./Shape");

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render() {
        return `
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="${this.color}" />
                <text x="25" y="56" font-size="25" fill="${this.textColor}">${this.text}</text>
            </svg>
        `
    }
}

module.exports = Circle