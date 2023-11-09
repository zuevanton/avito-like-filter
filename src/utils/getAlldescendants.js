export const getAlldescendants = (id, categories) => {
  const childrenIds = categories
    .filter(category => category.parentId === id)
    .map(item => item.id)
    
  const result = []
  for(const childId of childrenIds) {
    result.push(childId)
    result.push(...getAlldescendants(childId, categories))
  }
  return result
}