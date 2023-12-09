import { createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../App";
// import type { RootState } from "./store";

// Define a type for the slice state
interface TodosListInterface {
    todos: TodoInterface[];
}

// Define the initial state using that type
const initialState: TodosListInterface = {
    todos: [
        { id: 1, task: "Buy potatoes", completed: false },
        { id: 2, task: "Make food", completed: false },
        { id: 3, task: "Exercise", completed: false },
        { id: 4, task: "Do the dishes", completed: false },
        { id: 5, task: "Floss the teeth", completed: false },
        { id: 6, task: "Play videogames", completed: true },
    ],
};

/**
 * todo slice with intial state and reducers to mutate state.
 * They perform CRUD and also toggle todo. Redux-Toolkit uses
 * Immutable.js which allows us to mutate state but on the
 * background everything works as immutated state.
 */
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
});

export const {} = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer;
