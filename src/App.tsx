import TopBar from "./features/TopBar/TopBar";
import User from "./features/User/User";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Activity from "./features/Activity/Activity";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <ToastContainer />
      <User />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/Activity/castle-of-gerald-the-devil" />}
          />{" "}
          {/*Default Activity castle-of-gerald-the-devil*/}
          <Route path="/Activity/:slugActivity" element={<Activity />} />
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
