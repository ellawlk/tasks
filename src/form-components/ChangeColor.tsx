import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "aqua",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    "silver",
    "teal"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("red");
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        label={color}
                        type="radio"
                        name="color"
                        id={`color-${color}`}
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                        style={{ backgroundColor: color }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor
                }}
            >
                You have chosen {selectedColor}.
            </div>
        </div>
    );
}
