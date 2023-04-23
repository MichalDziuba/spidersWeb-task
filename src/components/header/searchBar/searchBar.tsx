import { api } from "@/services/api";
import Checkbox from "./checkbox/checkbox";
import SearchingInput from "./input/input";
import SubmitButton from "./submitButton/submitButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type SearchBarProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsActiveChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPromoChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveChecked: boolean;
  isPromoChecked: boolean;
  searchValue: string;

};
const SearchBar = ({
  setSearchValue,
  setIsActiveChecked,
  setIsPromoChecked,
  isActiveChecked,
  isPromoChecked,
  searchValue,

}: SearchBarProps) => {
  return (
    <form className="flex flex-col w-full order-3 md:items-center md:order-2 md:w-4/6 md:flex-row  md:justify-start gap-5">
      <div className=" flex justify-between border-solid border-gray-300 border px-2 rounded-md md:items-center shadow-sm h-10 md:w-1/2">
        <SearchingInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <SubmitButton />
      </div>
      <div className="flex gap-4">
        <Checkbox
          text="Active"
          checked={isActiveChecked}
          changeChecked={setIsActiveChecked}
        />
        <Checkbox
          text="Promo"
          checked={isPromoChecked}
          changeChecked={() => setIsPromoChecked(!isPromoChecked)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
