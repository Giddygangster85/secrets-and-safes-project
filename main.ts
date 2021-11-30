let Pressure_value = 0
radio.setGroup(130)
basic.forever(function () {
    Pressure_value = pins.analogReadPin(AnalogPin.P0)
    if (Pressure_value < 900) {
        radio.sendNumber(0)
    }
})
