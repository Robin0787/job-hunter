import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App;
