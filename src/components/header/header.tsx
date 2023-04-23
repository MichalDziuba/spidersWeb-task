import LoginBtn from "./loginBtn/loginBtn";
import Logo from "./logo/logo";
import SearchBar from "./searchBar/searchBar";
type HeaderProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setIsActiveChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPromoChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isActiveChecked: boolean;
  isPromoChecked: boolean;
  searchValue: string;
};
const Header = ({
  setSearchValue,
  setIsActiveChecked,
  setIsPromoChecked,
  isActiveChecked,
  isPromoChecked,
  searchValue,

}: HeaderProps) => {
  return (
    <header className="w-full bg-white flex justify-center py-5 items-center">
      <div className=" w-11/12 flex flex-row flex-wrap justify-between gap-6 md:gap-0">
        <Logo />
        <LoginBtn />
        <SearchBar
          searchValue={searchValue}
          isActiveChecked={isActiveChecked}
          isPromoChecked={isPromoChecked}
          setSearchValue={setSearchValue}
          setIsActiveChecked={setIsActiveChecked}
          setIsPromoChecked={setIsPromoChecked}

        />
      </div>
    </header>
  );
};
export default Header;
