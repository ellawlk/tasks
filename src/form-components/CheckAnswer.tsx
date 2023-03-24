import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <h3>Check Answer:</h3>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>
                <span>{answer}</span> {answer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
