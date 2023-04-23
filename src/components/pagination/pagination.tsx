import { PaginationItem } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";

type PaginationProps = {
  currentPage: number;
  handleSetPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const PaginationWrapper = ({
  totalPages,
  handleSetPage,
  currentPage,
}: PaginationProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    handleSetPage(value);
  };
  return (
    <div className="flex justify-center items-center h-1/6 w-full py-5 bg-productsBg ">
      <Pagination
        count={totalPages}
        size="small"
        hideNextButton
        onChange={handleChange}
        hidePrevButton
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            sx={{
              color: item.selected ? "#4763EE" : "inherit",
              fontSize: "14px",
              fontWeight:"600",
              "&.Mui-selected": {
                color: "#4763EE",
                background: "none",
              },
            }}
            slots={{
              first: () => <>First</>,
              last: () => <>Last</>,
            }}
            {...item}
          />
        )}
      />
    </div>
  );
};
export default PaginationWrapper;
