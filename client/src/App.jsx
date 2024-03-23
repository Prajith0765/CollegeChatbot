import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Popup from "./components/Popup";
import Rollno from "./components/Rollno";
import Main from "./components/Main";
import Marks from "./components/Marks";
import Attendance from "./components/Attendance";

function App() {

  return (
    
    <Routes>
      
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<Popup/>}>
            <Route path="/" element={<Rollno/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/" element={<Marks/>}/>
            <Route path="/" element={<Attendance/>}/>
          </Route>
        </Route>

    </Routes>
  );
}

export default App