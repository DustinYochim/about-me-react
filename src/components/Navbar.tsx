import { Link, useNavigate } from "react-router-dom";
import { Button, Paper } from "@mui/material";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Paper>
      <nav className={"nav"}>
        <Button variant="contained" onClick={() => navigate("/")}>
          about
        </Button>
        <Button variant="contained" onClick={() => navigate("/hobbies")}>
          hobbies
        </Button>
        <Button variant="contained" onClick={() => navigate("/pets")}>
          pets
        </Button>
      </nav>
    </Paper>
  );
};
