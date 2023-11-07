import { getAlldescendants } from "../../utils/getAlldescendants"
import { getAllParents } from "../../utils/getAllParents"
import { SubMenu } from "../subMenu/subMenu"

export const Menu = ({categories, selected, setSelected}) => {
  const topLevel = categories.filter(item => item.parentId === undefined)

  const onCheckboxChange = id => {
    setSelected(prev => {
      console.log(getAllParents(id, categories, selected))
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