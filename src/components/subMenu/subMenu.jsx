import { MenuItem } from "../menuItem/menuItem"

export const SubMenu = ({categories, elements, isChecked}) => {
  return (
    <ul>
      {
        elements.map(category => {
          return <MenuItem 
            key={category.id}
            name={category.name}
            id={category.id}
            categories={categories}
            checked={isChecked}
          />
        })
      }
    </ul>
  )
}