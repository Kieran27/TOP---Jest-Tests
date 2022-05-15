import analyseArray from './analyse_array.js'

test('Array values', () => {
  const expected = {
    average: 2,
    min: 0,
    max: 4,
    length: 5
  }
  const arr = [0,1,2,3,4];
  expect(analyseArray(arr)).toEqual(expected);

})

test('Array values', () => {
  const expected = {
    average: 4.8,
    min: -1,
    max: 10,
    length: 5
  }
  const arr = [-1,2,5,8,10];
  expect(analyseArray(arr)).toEqual(expected);

})

test('Array values', () => {
  const expected = {
    average: 7.5,
    min: 5,
    max: 10,
    length: 6
  }
  const arr = [5,6,7,8,9,10];
  expect(analyseArray(arr)).toEqual(expected);

})
