import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="app__container">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
