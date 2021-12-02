radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        OnOff = receivedNumber
    } else if (receivedNumber == 1) {
        OnOff = receivedNumber
    } else if (receivedNumber == 2) {
        Reaction = 0
    }
})
input.onButtonPressed(Button.A, function () {
    OnOff = 0
})
input.onButtonPressed(Button.AB, function () {
    Reaction = 2
})
input.onButtonPressed(Button.B, function () {
    OnOff = 1
})
let Pressure_value = 0
let Reaction = 0
let OnOff = 0
radio.setGroup(130)
OnOff = 0
basic.forever(function () {
    Pressure_value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Pressure_value)
    if (OnOff == 0) {
        basic.showString("Alarm Deactive")
    } else if (OnOff == 1) {
        basic.showString("Alarm Active")
        if (Pressure_value < 900) {
            radio.sendNumber(0)
        } else if (Pressure_value > 900) {
            radio.sendNumber(1)
        }
    } else if (Reaction == 2) {
        basic.showString("Cops Have Been Called")
    }
})
