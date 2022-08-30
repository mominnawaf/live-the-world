import TopBar from './features/TopBar/TopBar';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Activity from './features/Activity/Activity';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/"  element={<Navigate to="/Activity/1" />}/>
          <Route path="/Activity/:slugActivity" element={<Activity />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
