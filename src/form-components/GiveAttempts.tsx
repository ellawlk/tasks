import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function use(): void {
        setAttemptsLeft(attemptsLeft - 1);
    }
    function gain(): void {
        if (attemptsRequested) {
            setAttemptsLeft(attemptsLeft + attemptsRequested);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAttemptsRequested(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button onClick={use} disabled={attemptsLeft <= 0}>
                use
            </Button>
            <Button onClick={gain}>gain</Button>
            <div>
                Attempts Left: <span>{attemptsLeft}</span>
            </div>
        </div>
    );
}
