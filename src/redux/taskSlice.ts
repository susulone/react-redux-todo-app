import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Task } from "../App";
import type { RootState } from "./store";
import { fetchTasks } from "./fetchTasks";
import { addNewTask } from "./addNewTask";

// Define a type for the slice state
type TasksState = {
    status: "loading" | "idle" | "succeeded" | "failed";
    error: string | null;
    tasks: Task[];
};

// Define the initial state using that type
const initialState: TasksState = {
    tasks: [],
    error: null,
    status: "idle",
};

/**
 * taskSlice with intial state and reducers to mutate state.
 * They perform CRUD and also toggle todo. Redux-Toolkit uses
 * Immutable.js which allows us to mutate state but on the
 * background everything works as immutated state.
 */
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: nanoid(),
                task: action.payload.task,
                completed: false,
            };
            state.tasks.push(newTask);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload.id
            );
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map((task) =>
                task.id === action.payload.editedTask.id
                    ? action.payload.editedTask
                    : task
            );
        },
        toggleComplete: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks[index].completed = action.payload.completed;
        },
    },
    extraReducers: (builder) => {
        // When we send a request,
        // `fetchTodos.pending` is being fired:
        builder.addCase(fetchTasks.pending, (state) => {
            state.status = "loading";
            state.error = null;
            console.log("Fetching data...");
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.tasks.push(...action.payload);
            console.log("Fetched data successfully!");
        });

        // When a server responses with an error:
        builder.addCase(fetchTasks.rejected, (state, action) => {
            // TO DO: Fix this
            if (action.payload) {
                state.error = action.payload.message;
            }
            state.status = "failed";

            console.log("Fetching data failed!");
        });

        builder.addCase(addNewTask.fulfilled, (state, action) => {
            if (action.payload) {
                state.tasks.push(action.payload);
            }
        });
    },
});

/**
 * Actions for telling reducer what to do with state,
 * they can also include payload for changing state.
 */
export const { addTask, deleteTask, editTask, toggleComplete } =
    taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type.
export const selectAllTasks = (state: RootState) => state.tasks.tasks;

export const selectStatus = (state: RootState) => state.tasks.status;

export const selectError = (state: RootState) => state.tasks.error;

export default taskSlice.reducer;
