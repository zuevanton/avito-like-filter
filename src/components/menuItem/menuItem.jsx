import { useEffect, useState } from "react"
import { SubMenu } from "../subMenu/subMenu"
import { Checkbox } from "../checkbox/checkbox"

export const MenuItem = ({categories, name, id, checked}) => {
  const childrens = categories.filter(category => category.parentId === id)
  
  const [isOpen, setIsOpen] = useState(false)
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const onItemClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <li>
        {childrens.length !== 0 && isOpen && '↓'}
        {childrens.length !== 0 && !isOpen && '→'}
        <Checkbox checked={isChecked} onChange={setIsChecked} />
        <span onClick={onItemClick}>{name}</span>
      </li>
      {
        childrens.length !== 0 && isOpen && 
        <SubMenu categories={categories} elements={childrens} isChecked={isChecked} /> 
      }
    </>
  )
}

// дети должны иметь возможность "выключать" чекбокс
// включение у родителя, активирует всех детей
// сейчас не меняется у чекбокс чекед, потому что у него нет стейта. 