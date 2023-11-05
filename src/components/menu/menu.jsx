import { SubMenu } from "../subMenu/subMenu"

export const Menu = ({categories}) => {
  return (
    <>
      {
        categories.filter(item => item.parentId === undefined)
          .map(item => <SubMenu key={item.id} id={item.id} categories={categories} />)
      }
    </>
  )
}