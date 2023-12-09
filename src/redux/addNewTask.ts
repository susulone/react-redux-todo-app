import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { Task } from "../App";

// type FetchTodosError = {
//     message: string;
// };

export const addNewTask = createAsyncThunk(
    // The first argument is the action name:
    "tasks/addNewTask",
    // The second one is a function called payload creator.
    // It contains async logic of a side-effect.
    // We can perform requests here,
    // work with device API,
    // or any other async APIs we need to.
    async (initialTask: string) => {
        const response = await fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: nanoid(),
                task: initialTask,
                completed: false,
            }),
        });
        if (response.ok) {
            const data: Task = await response.json();
            console.log(data);
            return data;
        }
    }
);
