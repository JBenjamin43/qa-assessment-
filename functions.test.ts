const {shuffleArray} = require('./utils')

const test1 = [1,2,3,4,5]


describe('shuffleArray should', () => {
    // CODE HERE

    test('returns arr', () => {
        expect(Array.isArray(shuffleArray(test1))).toBe(true)
    })

    test('return same length array', () => {
        expect(shuffleArray(test1)).toHaveLength(test1.length)
    })
})