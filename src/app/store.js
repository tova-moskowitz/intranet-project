import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeesSlice";
import searchReducer from "../features/search/searchSlice";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    search: searchReducer,
  },
});

export default store;
