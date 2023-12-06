const utils = require('../../../language-setups/javascript/utils.js')
const path = require('path')
const readFileSync = require('fs').readFileSync
const inputPath = path.join(__dirname, 'input')
const data = readFileSync(inputPath, 'utf8')
const lines = data.split(/\n/)

const [times, distances] = lines.map(line => line.split(/:\s*/)[1].split(/\s+/).map(Number))

function beatsRecord(raceTime, recordDistance, timePressed) {
    console.log(raceTime, typeof raceTime, recordDistance, typeof recordDistance, timePressed, typeof timePressed)
    const speed = timePressed
    const distanceTravelled = speed * (raceTime - timePressed)
    return distanceTravelled > recordDistance
}

function findRaceWinPossibilities(raceTime, recordDistance) {
    let raceWinPossibilities = 0

    for (let timePressed = 0; timePressed <= raceTime; timePressed++) {
        if (beatsRecord(raceTime, recordDistance, timePressed)) {
            raceWinPossibilities++
        }
    }

    return raceWinPossibilities
}

function findSolution1(times, distances) {
    const winPossibilities = []

    for (let i = 0; i < times.length; i++) {
        winPossibilities.push(findRaceWinPossibilities(times[i], distances[i]))
    }

    return winPossibilities.reduce((p, c) => p * c, 1)
}

const SOLUTION_1 = findSolution1(times, distances)

console.log(`SOLUTION_1: ${SOLUTION_1}`)
// Example Solution: 288
