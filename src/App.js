import logo from './logo.svg';
import './App.css';
import Navbar from './components/Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

import Blog from './components/Pages/Blog/Blog';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Footer from './components/Pages/Shared/Footer';
import NotFound from './components/Pages/Shared/NotFound/NotFound';
import Login from './components/Pages/Auth/Login';
import SignUp from './components/Pages/Auth/SignUp';
import RequireAuth from './components/Pages/Auth/RequireAuth';
import Purchase from './components/Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/purchase/:serviceId" element={
        <RequireAuth>
          <Purchase/>
        </RequireAuth>
      }/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </div>
  );
}

export default App;
