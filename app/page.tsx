"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addHandler, deleteHandler, editHandler } from "./(store)/todoSlice";

export default function Home() {
  const tasks = useSelector((store: any) => store.TodoSlice.allTasks);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<any>();
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [index, setIndex] = useState<number>();
  const todoTask = {
    task: userInput,
    date:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  };
  const addingHandler = () => {
    if (userInput != "  ") {
      dispatch(addHandler(userInput));
      setUserInput(" ");
    } else {
      alert("Please Fill The Input Field!");
    }
  };

  const deletingHandler = (index: any) => {
    // dispatch(deleteHandler(todoTask));
    // setnewindex(index);
    dispatch(deleteHandler(index));
  };
  const updateHandler = (task: any, indexes: number) => {
    setIsUpdate(true);
    setUserInput(task);
    setIndex(indexes);
  };
  const cancelHandler = () => {
    setIsUpdate(false);
    setUserInput(" ");
  };
  const editingHandler = () => {
    console.log("old ind", index);

    dispatch(editHandler([userInput, index]));
    setUserInput(" ");
    setIsUpdate(false);
  };
  return (
    <div>
      <input
        type="text "
        placeholder="Write Task"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {isUpdate == false ? (
        <button style={{ marginLeft: "30px" }} onClick={() => addingHandler()}>
          Add Task
        </button>
      ) : (
        <>
          <button onClick={() => editingHandler()}>Update</button>
          <button onClick={() => cancelHandler()}>Cancel</button>
        </>
      )}
      <table>
        <tr>
          <th>#</th>
          <th>Tasks</th>
          <th>Date</th>
          <th>actions</th>
        </tr>
        {tasks.map((item: any, index: number) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.task}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => deletingHandler(index)}>del</button>
                <button onClick={() => updateHandler(item.task, index)}>
                  edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
