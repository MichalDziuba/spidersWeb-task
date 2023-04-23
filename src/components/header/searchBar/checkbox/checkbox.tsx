import { SetStateAction } from "react";

type CheckboxProps = {
  text: string;
  checked: boolean;
  changeChecked: (value:boolean)=>void;
}
const Checkbox = ({ text, checked, changeChecked }: CheckboxProps) => {
  
  const changeCheckboxState = () => {
  changeChecked(!checked)
}

    return (
      <label className="flex gap-2 text-primary font-semibold items-center text-center h-fit ">
        <input
          type="checkbox"
          name={text}
          id={text}
          className=" border-1 rounded h-6 w-6 border-gray-300   checked:bg-blue focus:ring-0  cursor-pointer"
          checked={checked}
          onChange={changeCheckboxState}
        />
        {text}
      </label>
    );
}
export default Checkbox