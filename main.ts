radio.onReceivedNumber(function (receivedNumber) {
    // asks if the received signal is meant to turn the alarm on/off or to call the police.
    if (receivedNumber == 0) {
        OnOff = receivedNumber
    } else if (receivedNumber == 1) {
        OnOff = receivedNumber
    } else if (receivedNumber == 2) {
        OnOff = receivedNumber
    }
})
// Manually turns the alarm off
input.onButtonPressed(Button.A, function () {
    OnOff = 0
})
// Manually contacts local authorities.
input.onButtonPressed(Button.AB, function () {
    OnOff = 2
})
// Manually turns the alarm on
input.onButtonPressed(Button.B, function () {
    OnOff = 1
})
// Establishes radio group and begins the code with alarm deactivated.
let Pressure_value = 0
let OnOff = 0
radio.setGroup(130)
OnOff = 0
basic.forever(function () {
    // This asks if the user had the Alarm engaged and whether or not they have called the cops.
    if (OnOff == 0) {
        basic.showIcon(IconNames.No)
    } else if (OnOff == 1) {
        // detects the value on the pressure sensor which rises when an object is on top of it and decreases when no object is present.
        Pressure_value = pins.analogReadPin(AnalogPin.P0)
        basic.showNumber(Pressure_value)
        // This code asks whether or not the pressure sensor is detecting enough pressure for the item to still be there and if not then a signal is sent to set of an alarm.
        if (Pressure_value < 900) {
            radio.sendNumber(0)
            basic.showIcon(IconNames.Sad)
        } else if (Pressure_value > 900) {
            radio.sendNumber(1)
            basic.showIcon(IconNames.Happy)
        }
    } else if (OnOff == 2) {
        // Warns the robber to return the objects as the cops have been called.
        basic.showString("Cops Have Been Called")
    }
})
