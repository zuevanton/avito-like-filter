import { getAllParents } from "./getAllParents";
import { mockCategories } from "./mockCategories";

describe('getParents, clicks on X', () => {
  it('get EDB', () => {
    const actualResult = getAllParents('X', mockCategories, ['C', 'D', 'E', 'Y', 'F', 'M'])
    const expectedResult = ['E', 'D', 'B']

    expect(actualResult.sort()).toEqual(expectedResult.sort())
  }) 

  it('get E', () => {
    const actualResult = getAllParents('X', mockCategories, ['Y'])
    const expectedResult = ['E']

    expect(actualResult.sort()).toEqual(expectedResult.sort())
  })

  it('get empty array', () => {
    const actualResult = getAllParents('X', mockCategories, [])
    const expectedResult = []

    expect(actualResult.sort()).toEqual(expectedResult.sort())
  })
})

//  A  
//  B
//     C
//    +D
//        +E
//            ✓X
//            Y
// 
//        ✓F
//    ✓M