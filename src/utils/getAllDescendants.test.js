import { getAlldescendants } from "./getAlldescendants";
import { mockCategories } from './mockCategories'

describe("getAlldescendants", () => {
  it('should return all descendants', () => {
    const actualResult = getAlldescendants('D', mockCategories)
    const expectedResult = ['E', 'F', 'X', 'Y']

    expect(actualResult.sort()).toEqual(expectedResult.sort())
  })
})