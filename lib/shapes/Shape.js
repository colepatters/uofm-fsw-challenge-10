
class Shape {
    constructor(color = "red", text = "", textColor = "") {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    setColor(color) {
        this.color = color
    }
}

module.exports = Shape