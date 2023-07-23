import React, { useState, useContext, useEffect } from "react";
import { ColorContext } from './colorContext';

export default function ColorDropdown() {
    const { color } = useContext(ColorContext);
    const [defaultColor, setDefaultColor] = useState('');

    useEffect(() => {
        const storedOption = localStorage.getItem('defaultColor');
        if (storedOption) {
          setDefaultColor(storedOption);
        }
      }, []);


    const { updateColor } = useContext(ColorContext);

    const handleColorChange = (event) => {
      const newColor = event.target.value;
      updateColor(newColor);

      setDefaultColor(newColor);
      localStorage.setItem('defaultColor', newColor);
    };


    return (
        <select onChange={handleColorChange} value={defaultColor} className="hover:cursor-pointer appearance-none outline-none ring-transparent bg-[#1d1f21] origin-bottom" style={{color:color}}>
            <option value="#2bbc8a">Weed</option>
            <option value="#17b8bd">Pulse</option>
            <option value="#e2b714">Serika</option>
            <option value="#00e980" className="text-[#00e980] px-4">Aurora</option>
            <option value="#79a617">Terminal</option>
            <option value="#dfd7af">Alduin</option>
            <option value="#7ebab5">Arch</option>
            <option value="#ff7a90">Bento</option>
            <option value="#408e7b">Bouquet</option>
            <option value="#f66e0d">Carbon</option>
            <option value="#d91c81" className="text-[#d91c81] px-4">Cheesecake</option>
            <option value="#55c6f0">Sky</option>
        </select>
    )
}