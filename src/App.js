import "./App.css";
import Tile from "./components/Tile.js";
import Dialog from "./components/Dialog";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";
import Button from "@mui/material/Button";
import Filter from "./components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "./features/employees/employeesSlice";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector);

  useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const refreshEmployees = () => {
    dispatch(fetchEmployees());
  };
  let singleEmployee = [];
  if (selector.employees.length) {
    singleEmployee = selector.employees.map((employee, i) => {
      return (
        <li key={i}>
          <Tile
            fname={employee.fname}
            lname={employee.lname}
            gender={employee.gender}
            streetName={`${employee.streetNum} ${employee.streetName}`}
            email={employee.email}
            phone={employee.phone}
            photo={employee.photo}
            timezone={employee.timezone}
          />
        </li>
      );
    });
  }
  return (
    <div className="App">
      {/* <SearchBar /> */}
      <TopBar />
      <Filter />
      <Button
        onClick={refreshEmployees}
        sx={{ maxWidth: 150 }}
        variant="outlined"
      >
        Refresh Tiles
      </Button>
      <Dialog />
      <ul
        className="tile"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {singleEmployee}
      </ul>
    </div>
  );
}

export default App;

// create a web form to create a new employee
// create a listing page that lists all employees, with a tile for each one
// a tile must be clickable and on click, more details should open out
// the listing page should have a search, using place, gender, year/month of birth
// card must include a refresh button
// add dob, even though not indicated on prompt
// error handling for when API fails to return data

// 1. create the list of users, using the '?results=x' parameter

// Material UI component: CARD
// 2. create a card for a single user
// 3. expand details upon clicking the card
// 4. create button on card
