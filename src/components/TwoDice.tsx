import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(4);
    const [d2, setD2] = useState<number>(1);

    function rollLeft() {
        setD1(d6);
    }

    function rollRight() {
        setD2(d6);
    }

    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">
                    Left Die: {d1 > 0 ? <span>{d1}</span> : ""} |
                </span>
                <span data-testid="right-die">
                    Right Die: {d2 > 0 ? <span>{d2}</span> : ""}
                </span>
            </div>
            <div>
                {d1 === 1 && d2 === 1 ? <div>Lose</div> : <div> </div>}
                {d1 === d2 && d1 !== 1 ? <div>Win</div> : <div> </div>}
            </div>
        </div>
    );
}
