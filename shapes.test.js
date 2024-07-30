const { Circle, Square, Triangle } = require("./lib/shapes")

describe("Shapes Correctly Rendering", () => {
    test("Circle", () => {
        // new circle with red background and blue text
        const circle = new Circle("#eb4034", "abc", "#345eeb")
        expect(circle.render().trim()).toBe(`
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#eb4034" />
                <text x="25" y="56" font-size="25" fill="#345eeb">abc</text>
            </svg>
        `.trim())
    })

    test("Square", () => {
        const square = new Square("#eb4034", "asd", "#345eeb")
        expect(square.render().trim()).toBe(`
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="25" width="50" height="50" r="50" fill="#eb4034" />
                <text x="33" y="58" font-size="25" fill="#345eeb">asd</text>
            </svg>
        `.trim())
    })

    test("Triangle", () => {
        const tri = new Triangle("#eb4034", "asd", "#345eeb")
        expect(tri.render().trim()).toBe(`
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 20,75 80,75" fill="#eb4034" />
                <text x="32" y="65" font-size="25" fill="#345eeb">asd</text>
            </svg>
        `.trim())
    })
})

describe("Required Criteria Tests", () => {
    test("Set Shape Color", () => {
        const shape = new Triangle()
        shape.setColor("blue")
        expect(shape.render().trim()).toEqual(`
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 20,75 80,75" fill="blue" />
                <text x="32" y="65" font-size="25" fill=""></text>
            </svg>`.trim())
    })
})