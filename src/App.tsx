import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase";
import MainRoutes from "./routes/MainRoutes";

function App() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.email;
      console.log(uid);
      // ...
    } else {
      console.log("NO LOGGED");
      // User is signed out
      // ...
    }
  });

  return (
    <div className="app__container">
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
