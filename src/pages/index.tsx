import Header from "@/components/header/header";
import PaginationWrapper from "@/components/pagination/pagination";
import ProductList, { productType } from "@/components/productList/productList";
import { useWindowSize } from "@/hooks/useWindowSize";
import { getData } from "@/services/api";
import { filterItems } from "@/utils/utils";
import { useEffect, useMemo, useState } from "react";
type propsTypes = {
  data: productType[];
};
export default function Home({ data }: propsTypes) {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState<productType[] | null>(data);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesCount, setTotalPages] = useState(0);
  const [isActiveChecked, setIsActiveChecked] = useState(false);
  const [isPromoChecked, setIsPromoChecked] = useState(false);

  const size = useWindowSize();

  const filteredItems = useMemo(() => {
    return filterItems(data, searchValue, isActiveChecked, isPromoChecked);
  }, [data, searchValue, isActiveChecked, isPromoChecked]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems?.slice(startIndex, endIndex);
    paginatedItems && setItems(paginatedItems);
    setTotalPages(Math.ceil(filteredItems?.length / itemsPerPage));
  }, [currentPage, itemsPerPage, totalPagesCount, filteredItems, searchValue]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredItems]);

  //changing pagination items per page by window size
  useEffect(() => {
    if (size.width) {
      if (size.width >= 1024) {
        setItemsPerPage(8);
      } else if (size.width < 1200 && size.width >= 768) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(4);
      }
    }
  }, [size]);

  return (
    <main className="flex min-h-screen bg-background  flex-col items-center  font-primary ">
      <Header
        setIsActiveChecked={() => setIsActiveChecked(!isActiveChecked)}
        setIsPromoChecked={() => setIsPromoChecked(!isPromoChecked)}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isActiveChecked={isActiveChecked}
        isPromoChecked={isPromoChecked}
      />
      <ProductList data={items} />

      {totalPagesCount > 1 && (
        <PaginationWrapper
          totalPages={totalPagesCount}
          handleSetPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </main>
  );
}
export const getStaticProps = async () => {
  try {
    const data = await getData();
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [],
      },
    };
  }
};