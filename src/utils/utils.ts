import { productType } from "@/components/productList/productList";

export function filterItems(
  items: productType[],
  searchName: string,
  active: boolean,
  promotion: boolean
) {
  let filteredItems = [...items];

  if (searchName) {
    filteredItems = filteredItems.filter((item) =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
    );
  }

  if (active === true) {
    filteredItems = filteredItems.filter((item) => item.active === true);
  }

  if (promotion === true) {
    filteredItems = filteredItems.filter((item) => item.promotion === true);
  }

  return filteredItems;
}
