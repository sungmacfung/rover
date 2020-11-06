basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Red))
    if (input.buttonIsPressed(Button.A)) {
        Rover.MotorRunDual(100, 100)
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3_4), Rover.colors(RoverColors.Blue))
        basic.pause(1000)
        Rover.MotorRunDual(-100, -100)
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1_2), Rover.colors(RoverColors.Purple))
        basic.pause(1000)
        Rover.MotorStopAll(MotorActions.Stop)
    } else if (input.buttonIsPressed(Button.B)) {
        Rover.setALLRGB(Rover.showColor(0x7f00ff))
        music.setVolume(121)
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.pause(2000)
    } else {
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Red))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Green))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Blue))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.colors(RoverColors.Purple))
        basic.pause(1000)
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Orange))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Yellow))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Indigo))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.colors(RoverColors.Green))
    }
})
