import "./App.css";
import Tile from "./components/Tile.js";
import Dialog from "./components/Dialog";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees } from "./features/employees/employeesSlice";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const searchTerm = selector.search.searchTerm;

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  const refreshEmployees = () => {
    dispatch(fetchEmployees());
  };
  let singleEmployee = [];

  if (selector.employees.length) {
    singleEmployee = selector.employees.map((employee, i) => {
      const employeeObj = {
        fname: employee.fname,
        lname: employee.lname,
        gender: employee.gender,
        streetName: `${employee.streetNumber} ${employee.streetName}`,
        email: employee.email,
        phone: employee.phone,
        photo: employee.photo,
        timezone: employee.timezone,
        dob: employee.dob,
      };
      if (
        (searchTerm && searchTerm.toLowerCase() === employee.gender) ||
        employee.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.streetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.dob.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.timezone.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return (
          <li className="singleTile" key={i}>
            <Tile employee={employeeObj} />
          </li>
        );
      } else if (!searchTerm) {
        return (
          <li className="singleTile" key={i}>
            <Tile employee={employeeObj} />
          </li>
        );
      }
    });
  }
  return (
    <div className="App">
      <SearchBar />
      <Button
        onClick={refreshEmployees}
        sx={{ maxWidth: 150, mt: 4 }}
        variant="contained"
      >
        Refresh Tiles
      </Button>
      <Dialog />
      <ul className="tile">{singleEmployee}</ul>
    </div>
  );
}

export default App;
