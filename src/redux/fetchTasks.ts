import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../App";

type FetchTodosError = {
    message: string;
};

export const fetchTasks = createAsyncThunk<
    Task[],
    number,
    { rejectValue: FetchTodosError }
>(
    // The first argument is the action name:
    "tasks/fetch",
    // The second one is a function called payload creator.
    // It contains async logic of a side-effect.
    // We can perform requests here,
    // work with device API,
    // or any other async APIs we need to.
    async (limit: number, thunkApi) => {
        const response = await fetch("http://localhost:3001/tasks");
        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch todos.",
            });
        }
        const data: Task[] = await response.json();
        return data;
    }
);
