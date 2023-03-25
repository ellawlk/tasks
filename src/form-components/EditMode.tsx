import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        if (editMode) {
            setStatus(event.target.checked);
        }
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        if (editMode) {
            setName(event.target.value);
        }
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="formStudName">
                <Form.Control
                    value={name}
                    onChange={updateName}
                    style={{ display: editMode ? "block" : "none" }}
                />
            </Form.Group>
            <Form.Group controlId="formStatus">
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Is Student?"
                    checked={status}
                    onChange={updateStatus}
                    style={{ display: editMode ? "block" : "none" }}
                />
            </Form.Group>
            {!editMode ? (
                <>
                    {name ? name : "Your Name"} is {status ? "" : "not "}a
                    student
                </>
            ) : (
                ""
            )}
            <Form.Group controlId="formEditMode">
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit mode"
                    checked={editMode}
                    onChange={updateMode}
                />
            </Form.Group>
        </div>
    );
}
