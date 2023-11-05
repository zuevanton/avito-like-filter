export const SubMenu = ({categories, id}) => {
  return (
    <ul>
      <li>{categories.find(item => item.id === id).name}</li>
      {
        categories.filter(item => item.parentId === id)
          .map(item => <SubMenu key={item.id} categories={categories} id={item.id} />)
      }
    </ul>
  )
}