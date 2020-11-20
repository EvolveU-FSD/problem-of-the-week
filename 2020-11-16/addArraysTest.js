const addArrays = require('./tony-answer2')

function assertArrayEquals(message, expected, actual) {
    if(actual.length !== expected.length) {
        console.error('FAIL: ' + message + ' - expected array should be ' + expected.length + ' elements. Found ' + actual.length)
        return
    }
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== actual[i]) {
            console.error('FAIL: ' + message + ' - answer mismatch at index', i, 'expected', expected, 'found', actual)
            return
        }
    }
    console.log('SUCCESS: ' + message)
}

function confirm(message, a, b, expectedResult) {
    let actualResult = addArrays(a, b)
    assertArrayEquals(message, expectedResult, actualResult)
}

confirm("null case", [], [], [] ) 
confirm("first zero", [0], [], [] ) 
confirm("second zero", [], [0], [] ) 
confirm("double zero", [0,0], [0], [] ) 
confirm("first parameter empty", [], [6,5,4], [6,5,4] )
confirm("second parameter empty", [6,5,4], [], [6,5,4] )
confirm("same length positive values, no carry", [1,2,3], [6,5,4], [7,7,7] )
confirm("same length positive values, with carry", [5,6,7], [7,8,9], [1,3,5,6])
confirm("different length", [1,2], [6,5,4], [6,6,6] )
confirm("first value negative, no carry", [-3,2,1], [6,5,4], [3,3,3] )
confirm("second value negative, no carry", [6,5,4], [-3,2,1], [3,3,3] )
confirm("negative plus positive with carry", [-5,5], [6,5,4], [5,9,9] )
confirm("same length negative values, no carry", [-1,2,3], [-6,5,4], [-7,7,7] )
confirm("same length negative values, with carry and extension", [-5,6,7], [-7,8,9], [-1,3,5,6])
confirm("positive plus negative with negative result", [1,2,3], [-6,5,4], [-5,3,1] )
confirm("negative plus positive with negative result", [-6,5,4], [1,2,3], [-5,3,1] )
confirm("input truncated to values 0-9", [1,23], [2,2], [3,5])
confirm("leading zeros", [0,0,0,1,2], [0,0,0,2,3], [3,5])
confirm("long numbers", 
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
)
