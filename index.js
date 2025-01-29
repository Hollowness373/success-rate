let genSuccessRate = 0;
let genPreciseRate = 0;

const successRate = (percentage) => {
    genSuccessRate = Math.floor(Math.random() * 100); //rolls a number from 0 - 100
    return percentage > genSuccessRate
}
const preciseSRate = (percentage) => {
    genPreciseRate = parseFloat((Math.random() * 100).toFixed(2)); //rolls a number 0 - 100 includes 2 decimal
    return percentage > genPreciseRate
}
const getPreciseRate = () => {
    return genPreciseRate
}
const getSuccessRate = () => {
    return genSuccessRate
}

module.exports = {
    successRate,
    getSuccessRate,
    preciseSRate,
    getPreciseRate
}