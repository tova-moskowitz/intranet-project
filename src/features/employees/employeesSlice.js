import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const EMPLOYEES_URL = "https://randomuser.me/api/?results=9";

const initialState = {
  employees: [],
  status: false,
  searchTerm: "",
};

export const fetchEmployees = createAsyncThunk(
  "employees/getEmployees",
  async () => {
    const results = await axios.get(EMPLOYEES_URL);
    return results.data;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  status: null,
  reducers: {
    //TODO check that form fields are filled out before adding a new user
    addNewEmployee: (state, action) => {
      state.unshift({ ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      return action.payload.results.map((employee) => {
        return {
          fname: employee.name.first,
          lname: employee.name.last,
          gender: employee.gender,
          email: employee.email,
          phone: employee.cell,
          streetNumber: employee.location.street.number,
          streetName: employee.location.street.name,
          photo: employee.picture.large,
          timezone: employee.location.timezone.description,
          dob: employee.dob.date,
        };
      });
    });
  },
});

export const { addNewEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
