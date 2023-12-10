// React
import React, { useState } from "react";

// Redux hooks, dispatch and actions
import { useAppDispatch } from "../../redux/hooks";
import { deleteTask, editTask } from "../../redux/taskSlice";
import { toggleTaskComplete } from "../../redux/toggleTaskComplete";

// Components
import { Col, FormCheck, FormControl, Stack } from "react-bootstrap";
import { IconButton } from "../IconButton/IconButton";

// Interfaces, types and styles
import { Task } from "../../App";
import "./styles.css";

export const TaskItem = ({ id, task, completed }: Task) => {
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editedTaskText, setEditedTaskText] = useState(task);
    const [errorMsg, setErrorMsg] = useState("");

    const handleTaskCompleted = () => {
        dispatch(
            toggleTaskComplete({
                id: id,
                task: task,
                completed: !completed,
            })
        );
    };

    const handleTaskDelete = () => {
        dispatch(
            deleteTask({
                id: id,
            })
        );
    };

    const handleTaskEdit = () => {
        if (editedTaskText.trim().length <= 0) {
            setErrorMsg("The task description cannot be empty.");
        } else if (editedTaskText.trim().length > 50) {
            setErrorMsg(
                "The task description needs to be under 50 characters."
            );
        } else {
            dispatch(
                editTask({
                    editedTask: {
                        id: id,
                        task: editedTaskText,
                        completed: completed,
                    },
                })
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTaskText(e.target.value);
        if (
            editedTaskText.trim().length > 0 &&
            editedTaskText.trim().length < 50
        ) {
            setErrorMsg("");
        }
    };

    return (
        <Stack direction="horizontal" className="task">
            <FormCheck
                inline
                type="checkbox"
                defaultChecked={completed}
                id={id.toString()}
                onChange={handleTaskCompleted}
            />
            {editMode ? (
                <>
                    <Stack>
                        <FormControl
                            value={editedTaskText}
                            onChange={handleChange}
                        />
                        {errorMsg ? (
                            <section id="add-form-error">{errorMsg}</section>
                        ) : (
                            <></>
                        )}
                    </Stack>
                    <IconButton
                        iconName={"save"}
                        handleOnClick={() => {
                            handleTaskEdit();
                            setEditMode(false);
                        }}
                    />
                </>
            ) : (
                <>
                    <Col>{task}</Col>
                    <IconButton
                        iconName={"edit"}
                        handleOnClick={() => setEditMode(true)}
                    />
                </>
            )}
            <IconButton iconName={"delete"} handleOnClick={handleTaskDelete} />
        </Stack>
    );
};

// import React from "react";
// import { useState } from "react";
// import { FormControl, Stack, Col } from "react-bootstrap";
// import { IconButton } from "../IconButton/IconButton";

// export const IncomeItem = () => {
//     const [editMode, setEditMode] = useState(false);
//     const [editNoteText, setEditNoteText] = useState();
//     return (
//         <Stack direction="horizontal" className="note">
//             {editMode ? (
//                 <>
//                     <FormControl
//                         value={editNoteText}
//                         onChange={(e) => {
//                             setEditNoteText(e.target.value);
//                             console.log(e.target.value);
//                         }}
//                     />
//                     <FormControl
//                         value={editNoteText}
//                         onChange={(e) => {
//                             setEditNoteText(e.target.value);
//                             console.log(e.target.value);
//                         }}
//                     />
//                     <FormControl
//                         value={editNoteText}
//                         onChange={(e) => {
//                             setEditNoteText(e.target.value);
//                             console.log(e.target.value);
//                         }}
//                     />
//                     x
//                     <IconButton
//                         iconName={"save"}
//                         handleOnClick={() => {
//                             console.log("Save Clicked");
//                         }}
//                     />
//                 </>
//             ) : (
//                 <>
//                     <Col>text</Col>
//                     <IconButton
//                         iconName={"edit"}
//                         handleOnClick={() => setEditMode(true)}
//                     />
//                 </>
//             )}
//             <IconButton
//                 iconName={"delete"}
//                 handleOnClick={() => {
//                     console.log("Delete Clicked");
//                 }}
//             />
//         </Stack>
//     );
// };
