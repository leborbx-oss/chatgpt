basic.forever(function () {
    let startTime = 0
    let reactionTime = 0

    basic.showString("GET READY")

    basic.pause(randint(2000, 5000))

    basic.showIcon(IconNames.Target)
    startTime = input.runningTime()

    input.onButtonPressed(Button.A, function () {
        reactionTime = input.runningTime() - startTime
        basic.clearScreen()
        basic.showString("TIME")
        basic.showNumber(reactionTime)
    })
	
})
