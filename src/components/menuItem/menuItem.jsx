import { SubMenu } from "../subMenu/subMenu"

export const MenuItem = ({categories, name, id}) => {
  const childrens = categories.filter(category => category.parentId === id)

  return (
    <li>
      {name}
      {childrens.length !== 0 && <SubMenu categories={categories} elements={childrens} /> }
    </li>
  )
}