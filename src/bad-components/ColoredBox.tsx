import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

type SetColorIndexFunction = (value: number) => void;

function ChangeColor({
    colorIndex,
    setColorIndex
}: {
    colorIndex: number;
    setColorIndex: SetColorIndexFunction;
}): JSX.Element {
    return (
        <Button onClick={() => setColorIndex((1 + colorIndex) % COLORS.length)}>
            Next Color
        </Button>
    );
}

function ColorPreview({ index }: { index: number }): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [CBColorIndex, setCBColorIndex] =
        useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[CBColorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={CBColorIndex}
                    setColorIndex={setCBColorIndex}
                />
                <ColorPreview index={CBColorIndex} />
            </div>
        </div>
    );
}