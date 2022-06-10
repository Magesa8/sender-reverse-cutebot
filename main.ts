input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("startstop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("reversemode")
})
radio.setGroup(0)
basic.showIcon(IconNames.Yes)
