input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . . . #
        . # # # #
        . # . . .
        . # . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    Rating = randint(0, 100)
    basic.showNumber(Rating)
    basic.pause(1000)
    if (Rating > 75) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    if (Rating < 25) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
})
let Rating = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `)
