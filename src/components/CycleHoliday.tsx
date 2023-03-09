import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🐿" | "🥰" | "🐇" | "🍩" | "🌱";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🐿");
    const alphOrder = ["🍩", "🐇", "🐿", "🥰", "🌱"];
    const dateOrder = ["🐿", "🥰", "🐇", "🍩", "🌱"];

    function alphNext(curr_hol: string): string {
        const curr_index = alphOrder.findIndex(
            (hol: string): boolean => curr_hol === hol
        );
        if (curr_index !== 4) {
            return alphOrder[curr_index + 1];
        } else {
            return alphOrder[0];
        }
    }

    function dateNext(curr_hol: string): string {
        const curr_index = dateOrder.findIndex(
            (hol: string): boolean => curr_hol === hol
        );
        if (curr_index !== 4) {
            return dateOrder[curr_index + 1];
        } else {
            return dateOrder[0];
        }
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={() => setHoliday(alphNext(holiday))}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setHoliday(dateNext(holiday))}>
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
