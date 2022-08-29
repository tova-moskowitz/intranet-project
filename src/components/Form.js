import React, { useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addNewEmployee } from "../features/employees/employeesSlice";
import { useDispatch } from "react-redux";

//TODO add values to each of the fields to make it a controlled form
export default function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const el = e.target;
    const newEmployee = {
      fname: el.fname.value,
      lname: el.lname.value,
      gender: el.gender.value,
      photo: el.photo.value,
      email: el.email.value,
      phone: el.phone.value,
      streetNumber: el.streetNumber.value,
      streetName: el.streetName.value,
      timezone: el.timezone.value,
      dob: el.dob.value,
    };
    dispatch(addNewEmployee(newEmployee));
  };

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Box sx={{ ml: 11 }}>
      <form onSubmit={handleSubmitForm}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="fname"
            id="fname"
            label="First Name"
            variant="standard"
          />
          <TextField
            name="lname"
            id="lname"
            label="Last Name"
            variant="standard"
          />
          <TextField
            name="gender"
            id="gender"
            label="Gender"
            variant="standard"
          />
          <TextField name="photo" id="photo" label="Photo" variant="standard" />
          <TextField name="email" id="email" label="Email" variant="standard" />
          <TextField name="phone" id="phone" label="Phone" variant="standard" />
          <TextField
            name="streetNumber"
            id="streetNumber"
            label="Street Number"
            variant="standard"
          />
          <TextField
            name="streetName"
            id="streetName"
            label="Street Name"
            variant="standard"
          />
          <TextField
            name="timezone"
            id="timezone"
            label="Timezone"
            variant="standard"
          />
          <TextField name="dob" id="dob" label="DOB" variant="standard" />
        </Box>
        <Button type="Submit">Submit</Button>
      </form>
    </Box>
  );
}
