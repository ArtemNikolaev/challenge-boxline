const boxline = require('../index');

describe('boxline', () => {
    const cases = [
        {x: 1, y: 1, z: 1, result: 12},
        {x: 2, y: 1, z: 1, result: 20},
        {x: 1, y: 2, z: 1, result: 20},
        {x: 1, y: 1, z: 2, result: 20},
        {x: 3, y: 1, z: 1, result: 28},
        {x: 1, y: 3, z: 1, result: 28},
        {x: 1, y: 1, z: 3, result: 28},
        {x: 2, y: 2, z: 1, result: 33},
        {x: 2, y: 1, z: 2, result: 33},
        {x: 3, y: 2, z: 1, result: 46},
        {x: 3, y: 1, z: 2, result: 46},
        {x: 2, y: 3, z: 1, result: 46},
        {x: 1, y: 3, z: 2, result: 46},
        {x: 2, y: 1, z: 3, result: 46},
        {x: 1, y: 2, z: 3, result: 46},
        {x: 3, y: 3, z: 1, result: 64},
        {x: 3, y: 1, z: 3, result: 64},
        {x: 1, y: 3, z: 3, result: 64},
        {x: 3, y: 3, z: 2, result: 104},
        {x: 3, y: 2, z: 3, result: 104},
        {x: 2, y: 3, z: 3, result: 104},
        {x: 3, y: 3, z: 3, result: 144},
    ];

    cases.forEach(testCase => it(
        `${testCase.x},${testCase.y},${testCase.z}`,
        () => expect(boxline(testCase.x, testCase.y, testCase.z))
            .toBe(testCase.result),
    ));
});
