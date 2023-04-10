import { Outlet } from 'react-router-dom';
import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Outlet />
      <Toaster />
    </div>
  )
}

export default App;
