import { useState } from "react"
import { SubMenu } from "../subMenu/subMenu"
import { Checkbox } from "../checkbox/checkbox"

export const MenuItem = ({categories, name, id, selected, onCheckboxChange}) => {
  const childrens = categories.filter(category => category.parentId === id)
  
  const [isOpen, setIsOpen] = useState(false)

  const onItemClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li>
        {childrens.length !== 0 && isOpen && '↓'}
        {childrens.length !== 0 && !isOpen && '→'}
        <Checkbox checked={selected.includes(id)} onChange={() => onCheckboxChange(id)} />
        <span onClick={onItemClick}>{name}</span>
      </li>
      {
        childrens.length !== 0 && isOpen && 
        <SubMenu categories={categories} elements={childrens} selected={selected} onCheckboxChange={onCheckboxChange} /> 
      }
    </>
  )
}