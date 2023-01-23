
function checkSum(num1, num2, result) {
    const sumValue = num1 + num2
    
    if (sumValue === result) {
        return 'OK, is correct'
    }

    return 'Fail, not is correct!!!!'
}

export default {
    checkSum,
}