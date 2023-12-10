import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../App";

export const toggleTaskComplete = createAsyncThunk(
    "tasks/toggleTaskComplete",
    async (payload: Task) => {
        const response = await fetch(
            `http://localhost:3001/tasks/${payload.id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: payload.id,
                    task: payload.task,
                    completed: payload.completed,
                }),
            }
        );
        if (response.ok) {
            const task: Task = await response.json();
            console.log(task);
            return task;
        }
    }
);
