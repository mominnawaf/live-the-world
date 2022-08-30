import TopBar from './features/TopBar/TopBar';
import User from './features/User/User';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Activity from './features/Activity/Activity';
import './App.css'

function App() {
 
  return (
    <div className="App">
      <TopBar />
      <User />
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Navigate to="/Activity/castle-of-gerald-the-devil" />}/> {/*Default Activity castle-of-gerald-the-devil*/}
          <Route path="/Activity/:slugActivity" element={<Activity />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
