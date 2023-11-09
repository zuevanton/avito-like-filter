import { getAlldescendants } from "../../utils/getAlldescendants";
import { getAllParents } from "../../utils/getAllParents";
import { SubMenu } from "../subMenu/subMenu";

export const Menu = ({ categories, selected, setSelected }) => {
  const topLevel = categories.filter((item) => item.parentId === undefined);

  const onCheckboxChange = (id) => {
    setSelected((prev) => {
      const allDescendants = getAlldescendants(id, categories);
      const allParents = getAllParents(id, categories, selected);
      if (prev.includes(id)) {
        return prev
          .filter((prev) => prev !== id)
          .filter((prev) => !allDescendants.includes(prev))
          .filter((prev) => !allParents.includes(prev));
      }
      return Array.from(
        new Set([...prev, id, ...allDescendants, ...allParents])
      );
    });
  };

  return (
    <SubMenu
      categories={categories}
      elements={topLevel}
      selected={selected}
      onCheckboxChange={onCheckboxChange}
    />
  );
};
