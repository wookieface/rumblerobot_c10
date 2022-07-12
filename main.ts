radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 155)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 155)
        basic.pause(1000)
        maqueen.motorStopAll()
    }
    if (receivedNumber == 2) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 155)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        basic.pause(1000)
        maqueen.motorStopAll()
    }
    if (receivedNumber == 3) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 155)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 155)
        basic.pause(1000)
        maqueen.motorStopAll()
    }
    if (receivedNumber == 4) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 155)
        basic.pause(1000)
        maqueen.motorStopAll()
    }
})
basic.showString("ROBOT")
basic.showIcon(IconNames.Happy)
radio.setGroup(10)
