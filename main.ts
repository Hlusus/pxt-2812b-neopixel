
let pasek: neopixel.Strip = neopixel.create(DigitalPin.P8, 29, NeoPixelMode.RGB)

pasek.showRainbow(15, 360)

basic.forever(function() {
    pasek.rotate(1)
    pasek.show()

    basic.pause(0.0001)
})