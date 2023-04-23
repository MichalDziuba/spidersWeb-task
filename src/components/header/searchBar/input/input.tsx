import { useRouter } from "next/router";
import { useState } from "react";
import { debounce } from "lodash";
type SearchingInputProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};


const SearchingInput = ({  searchValue, setSearchValue }: SearchingInputProps) => {
  
  const [value, setValue] = useState(searchValue)

  const handleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
       setSearchValue(newValue);
 
   
  }
    return (
      <input
        value={value}
        placeholder="Search"
        className="outline-none placeholder:text-primary placeholder:font-semibold pl-2 w-full"
        onChange={handleChange}
      />
    );
}
export default SearchingInput