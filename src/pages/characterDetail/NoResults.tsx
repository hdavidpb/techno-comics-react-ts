import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoResults = () => {
  const navigate = useNavigate();
  return (
    <div className="noresults__container">
      <p>If you dont have any character in favorites, </p>
      <Button variant="text" onClick={() => navigate("/")}>
        Try to add some here!
      </Button>
    </div>
  );
};

export default NoResults;
