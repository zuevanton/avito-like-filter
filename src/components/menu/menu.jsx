import { SubMenu } from "../subMenu/subMenu"

export const Menu = ({categories}) => {
  const topLevel = categories.filter(item => item.parentId === undefined)

  return (
    <SubMenu categories={categories} elements={topLevel} />
  )
}