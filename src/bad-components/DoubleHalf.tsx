import React, { useState } from "react";
import { Button } from "react-bootstrap";

type SetValueFunction = (value: number) => void;

function Doubler({
    value,
    setValue
}: {
    value: number;
    setValue: SetValueFunction;
}): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}

function Halver({
    value,
    setValue
}: {
    value: number;
    setValue: SetValueFunction;
}): JSX.Element {
    return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            Double Half
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue} />
            <Halver value={dhValue} setValue={setDhValue} />
        </div>
    );
}
