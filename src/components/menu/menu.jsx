import { getAlldescendants } from "../../utils/getAlldescendants"
import { SubMenu } from "../subMenu/subMenu"

export const Menu = ({categories, selected, setSelected}) => {
  const topLevel = categories.filter(item => item.parentId === undefined)

  const onCheckboxChange = id => {
    setSelected(prev => {
      if(prev.includes(id)){
        const allDescendants = getAlldescendants(id, categories)
        
        return prev.filter(prev => !allDescendants.includes(prev) && prev !== id)
      }
      return Array.from(new Set([...prev, id, ...getAlldescendants(id, categories)]))
    })
  }

  return (
    <SubMenu categories={categories} elements={topLevel} selected={selected} onCheckboxChange={onCheckboxChange} />
  )
}