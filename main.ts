function Alarm () {
    music.setVolume(0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(494, music.beat(BeatFraction.Double))
    pins.digitalWritePin(DigitalPin.P2, 0)
    music.playTone(262, music.beat(BeatFraction.Double))
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(494, music.beat(BeatFraction.Double))
    pins.digitalWritePin(DigitalPin.P2, 0)
    music.playTone(262, music.beat(BeatFraction.Double))
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(494, music.beat(BeatFraction.Double))
    pins.digitalWritePin(DigitalPin.P2, 0)
    music.playTone(262, music.beat(BeatFraction.Double))
}
let Pressure_value = 0
radio.setGroup(130)
basic.forever(function () {
    Pressure_value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (Pressure_value < 900) {
        radio.sendNumber(0)
        Alarm()
    } else if (Pressure_value > 900) {
        radio.sendNumber(1)
    }
})
