import React, { useState, useContext } from "react";
import { ColorContext } from './colorContext';

export default function colorDropdown() {
    // const [selectedColor, setSelectedColor] = useState('');

    // const handleColorChange = (e) => {
    //     const color = e.target.value;
    //     setSelectedColor(color);
    //     onColorChange(color)
    // }
    const { color } = useContext(ColorContext);

    const { updateColor } = useContext(ColorContext);

    const handleColorChange = (event) => {
      const newColor = event.target.value;
      updateColor(newColor);
    };

    return (
        <select onChange={handleColorChange} className="hover:cursor-pointer appearance-none outline-none ring-transparent bg-[#1d1f21] " style={{color:color}}>
        {/* <select> */}
            <option value="#2bbc8a">weed</option>
            <option value="#17b8bd">pulse</option>
            <option value="#e2b714">Serika Yellow</option>
            <option value="#00e980">aurora</option>
            <option value="#79a617">terminal</option>
        </select>
    )
}