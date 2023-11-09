export const getAllParents = (id, categories, selected) => {
  const {parentId} = categories.find(item => item.id === id);
  const isEveryChildSelected = categories
    .filter(item => item.parentId === parentId && item.id !== id)
    .every(item => selected.includes(item.id))
  
  if(parentId === undefined || !isEveryChildSelected) {
    return []
  }

  return [parentId, ...getAllParents(parentId, categories, selected)]
}