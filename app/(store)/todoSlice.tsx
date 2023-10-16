"use client";
import { createSlice } from "@reduxjs/toolkit";
import allTaskType from "../(type)/todotype";
export const TodoSlice = createSlice({
  name: "Todo",
  initialState: {
    allTasks: [] as allTaskType[],
  },
  reducers: {
    addHandler: (state, action) => {
      if (action.payload != "") {
        const newObj = {
          task: action.payload,
          date:
            new Date().toLocaleDateString() +
            " " +
            new Date().toLocaleTimeString(),
        };
        //   console.log(`action ${action.payload}`);
        //   state = action.payload;
        //   console.log(state);
        //   state.allTasks.push(newObj)
        state.allTasks = [newObj, ...state.allTasks];
        console.log(state.allTasks);
      } else {
        alert("Please Fill The Input Field!");
      }
    },
    deleteHandler: (state, action) => {
      var filteredTasks = state.allTasks.filter((item, index) => {
        console.log(index);
        return action.payload !== index;
      });
      state.allTasks = filteredTasks;
      console.log(action.payload);
      console.log(filteredTasks);
    },

    editHandler: (state, action) => {
      const newObj = state.allTasks.map((item, index) => {
        console.log("indexes", index, action.payload[1]);

        if (index == action.payload[1]) {
          const updatedTodo = {
            task: action.payload[0],
            date:
              new Date().toLocaleDateString() +
              " " +
              new Date().toLocaleTimeString(),
          };
          console.log(updatedTodo.task);

          return updatedTodo;
        } else {
          return item;
        }
      });
      state.allTasks = newObj;
      console.log(newObj);
    },
  },
});
export const { addHandler, deleteHandler, editHandler } = TodoSlice.actions;
export default TodoSlice.reducer;
