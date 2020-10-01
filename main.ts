basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 26) {
        basic.showString("T. BAJA")
    }
    while (input.temperature() > 34) {
        basic.showString("T. ALTA")
    }
    basic.showString("T. OK")
    basic.showIcon(IconNames.Happy)
})
