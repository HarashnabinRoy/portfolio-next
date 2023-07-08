import React from "react";

export default function colorDropdown({ onColorChange }) {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (e) => {
        const color = e.target.value;
        setSelectedColor(color);
        onColorChange(color)
    }

    return (
        <select value={selectedColor} onChange={handleColorChange}>
            <option value="">Select a color</option>
            <option value="cyan">cyan</option>
            <option value="red">ced</option>
        </select>
    )
}