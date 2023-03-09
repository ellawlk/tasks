import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        // Set visible to be the logical opposite of its previous value
        if (qType === "short_answer_question") {
            setQType("multiple_choice_question");
        } else {
            setQType("short_answer_question");
        }
    }

    // Only includes <div>Hello!</div> if `visible` is true
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            {qType === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
