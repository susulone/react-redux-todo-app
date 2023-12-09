import { createSlice, nanoid } from "@reduxjs/toolkit";
import { TaskInterface } from "../App";
import type { RootState } from "./store";

// Define a type for the slice state
interface TaskListInterface {
    tasks: TaskInterface[];
}

// Define the initial state using that type
const initialState: TaskListInterface = {
    tasks: [
        { id: 1, task: "Buy potatoes", completed: false },
        { id: 2, task: "Make food", completed: false },
        { id: 3, task: "Exercise", completed: false },
        { id: 4, task: "Do the dishes", completed: false },
        { id: 5, task: "Floss the teeth", completed: false },
        { id: 6, task: "Play videogames", completed: true },
    ],
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
});

/**
 * Actions for telling reducer what to do with state,
 * they can also include payload for changing state.
 */
export const { addTask, deleteTask, editTask, toggleComplete } =
    taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type.
export const selectAllTaskss = (state: RootState) => state.tasks;

export default taskSlice.reducer;
