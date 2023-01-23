import math from '../src/index.js'

describe.only('/src/index.js', () => {

    context('on correct sum of natural numbers', () => {
        it ('should return OK', () => {
            const res = math.checkSum(2,2, 4)

            expect(res).to.equal('OK, is correct')
        })
    })

    context('on correct sum of decimal numbers', () => {
        it ('should return OK', () => {
            const res = math.checkSum(2.1, 3.4, 5.5)

            expect(res).to.equal('OK, is correct')
        })
    })
    

    context('on non correct sum', () => {
        it ('should return fail', () => {
            const res = math.checkSum(2, 3, 16)

            expect(res).to.equal('Fail, not is correct!!!!')
        })
    })
})