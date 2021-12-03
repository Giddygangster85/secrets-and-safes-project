radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        OnOff = receivedNumber
    } else if (receivedNumber == 1) {
        OnOff = receivedNumber
    } else if (receivedNumber == 2) {
        OnOff = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    OnOff = 0
})
input.onButtonPressed(Button.AB, function () {
    OnOff = 2
})
input.onButtonPressed(Button.B, function () {
    OnOff = 1
})
let Pressure_value = 0
let OnOff = 0
radio.setGroup(130)
OnOff = 1
basic.forever(function () {
    if (OnOff == 0) {
        basic.showIcon(IconNames.No)
    } else if (OnOff == 1) {
        Pressure_value = pins.analogReadPin(AnalogPin.P0)
        basic.showNumber(Pressure_value)
        if (Pressure_value < 900) {
            radio.sendNumber(0)
            basic.showIcon(IconNames.Sad)
        } else if (Pressure_value > 900) {
            radio.sendNumber(1)
            basic.showIcon(IconNames.Happy)
        }
    } else if (OnOff == 2) {
        basic.showString("Cops Have Been Called")
    }
})
