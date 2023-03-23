import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({
    position,
    setPosition
}: {
    position: number;
    setPosition: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        >
            <ShoveBoxButton
                position={position}
                setPosition={setPosition}
            ></ShoveBoxButton>
        </div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <div>
                <MoveableBox position={position} setPosition={setPosition} />
            </div>
        </div>
    );
}
