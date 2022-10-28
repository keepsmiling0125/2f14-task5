let xvalue = 0
let yvalue = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    yvalue = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
        }
        xvalue = 0
        yvalue += 1
    }
})
input.onButtonPressed(Button.B, function () {
    xvalue = 0
    yvalue = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
        }
        xvalue = 4
        yvalue += 1
    }
})
