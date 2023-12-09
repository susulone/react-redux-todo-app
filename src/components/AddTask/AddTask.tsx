// React
import React, { useState } from "react";

// Components
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    Stack,
} from "react-bootstrap";
import { Plus } from "react-feather";

// Redux hooks, dispatch and actions
import { useAppDispatch } from "../../redux/hooks";
import { addNewTask } from "../../redux/addNewTask";

// Interfaces, types and styles
import "./styles.css";

export const AddTask = () => {
    const dispatch = useAppDispatch();
    const [newTask, setNewTask] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTask.trim().length <= 0) {
            setErrorMsg("The task description cannot be empty.");
        } else if (newTask.trim().length > 50) {
            setErrorMsg(
                "The task description needs to be under 50 characters."
            );
        } else {
            dispatch(addNewTask(newTask));
            setNewTask("");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
        if (newTask.trim().length > 0 && newTask.trim().length < 50) {
            setErrorMsg("");
        }
    };

    return (
        <>
            <Stack
                as={Form}
                onSubmit={handleSubmit}
                direction="horizontal"
                gap={2}
                id="add-form"
            >
                <FormGroup>
                    <FormLabel column htmlFor="newTodo">
                        New Todo
                    </FormLabel>
                    <FormControl
                        autoFocus
                        required
                        id="newTodo"
                        type="text"
                        value={newTask}
                        onChange={handleChange}
                        placeholder="Add new task..."
                    />
                    {errorMsg ? (
                        <section id="add-form-error">{errorMsg}</section>
                    ) : (
                        <></>
                    )}
                </FormGroup>
                <Button type="submit" aria-label="Add Todo">
                    <Plus />
                </Button>
            </Stack>
        </>
    );
};
