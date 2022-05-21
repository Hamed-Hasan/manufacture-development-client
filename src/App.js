import logo from './logo.svg';
import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Purchase from './components/Pages/purchase/purchase'
import Blog from './components/Pages/Blog/Blog';
import Dashboard from './components/Pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/purchase" element={<Purchase/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
