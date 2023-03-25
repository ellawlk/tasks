import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentChoice, setCurrChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMCQs">
                <Form.Label>What is your answer?</Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((opt: string) => (
                        // eslint-disable-next-line react/jsx-key
                        <option value={opt}>{opt}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            {currentChoice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
