import { useContext } from "react";
import { ColorContext } from "./Footer/colorContext";

const { updateDefaultColor } = useContext(ColorContext);

const handleColorChange = (event) => {
  const newdefaultColor = event.target.value;
  updateDefaultColor(newdefaultColor);
};

export default function DefaultColor() {
    return(
        <select onChange={handleColorChange} className="hover:cursor-pointer outline-none ring-transparent bg-[#1d1f21] ">
            <option value="#2bbc8a">Weed</option>
            <option value="#17b8bd">Pulse</option>
            <option value="#e2b714">Serika</option>
            <option value="#00e980">Aurora</option>
            <option value="#79a617">Terminal</option>
        </select>
    )
}