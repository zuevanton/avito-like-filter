export const mockCategories = [
  {
    "id": 'A',
  },
  {
    "id": 'B',
  },
  {
    "id": 'C',
    "parentId": 'B',
  },
  {
    "id": 'D',
    "parentId": 'B',
  },
  {
    "id": 'E',
    "parentId": 'D',
  },
  {
    "id": 'X',
    "parentId": 'E',
  },
  {
    "id": 'Y',
    "parentId": 'E',
  },
  {
    "id": 'F',
    "parentId": 'D',
  },
  {
    "id": 'M',
    "parentId": 'B',
  },
]

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