const Shape = require("./Shape");

class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor)
    }

    render() {
        return `
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 20,75 80,75" fill="${this.color}" />
                <text x="32" y="65" font-size="25" fill="${this.textColor}">${this.text}</text>
            </svg>
        `
    }
}

module.exports = Triangle