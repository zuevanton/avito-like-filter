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
export const getAllParents = (id, categories, selected, result = []) => {
  const parentId = categories.filter(item => item.id === id)[0].parentId
  const isEveryChildSelected = categories
    .filter(item => item.parentId === id)
    .every(item => selected.includes(item.id))
  // console.log(categories.filter(item => item.parentId === id))
  // console.log(isEveryChildSelected)
  //!selected.includes(parentId)
  if(parentId === undefined || !isEveryChildSelected) {
    return result
  }

  return getAllParents(parentId, categories, selected, [...result, parentId])
}