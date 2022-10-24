
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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import AddReview from './components/Pages/Dashboard/AddReview';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Payment from './components/Pages/Dashboard/Payment';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import AddOrder from './components/Pages/Dashboard/AddOrder';
import ManageOrder from './components/Pages/Dashboard/ManageOrder';
import ManageAllOrders from './components/Pages/Dashboard/ManageAllOrders';

import RequireNonAdmin from './components/Pages/Auth/RequireNonAdmin';
import BlogNext from './components/Pages/Blog/BlogNext';
import MyPortfolio from './components/Pages/MyPortfolio/MyPortfolio'
import ScrollToTop from './components/Pages/Shared/ScrollToTop/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Purchase from './components/Pages/purchase/Purchase';



function App() {

  useEffect(() => {
    AOS.init();
  }, []);

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

<Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
  
      <Route path="payment/:id" element={
        <RequireAuth>
          <Payment/>
        </RequireAuth>
      }></Route>
         <Route path="profile" element={<MyProfile></MyProfile>}></Route>
         
      <Route index element={<RequireAuth><MyOrders/></RequireAuth>}></Route>
   
      <Route path="review" element={<RequireNonAdmin><AddReview/></RequireNonAdmin>}></Route>



      <Route path="makeAdmin" element={
     
         <MakeAdmin/>
        
      }></Route>
      <Route path="addOrder" element={
      
          <AddOrder/>
      }></Route>
      <Route path="manageOrder" element={
     
          <ManageOrder/>
      }></Route>
      <Route path="manageAllOrder" element={
    
          <ManageAllOrders/>
      }></Route>


         
        </Route>





      
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blogNext" element={<BlogNext/>}/>

      <Route path="/myPortfolio" element={<MyPortfolio/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <ScrollToTop/>
    <ToastContainer/>
    </div>
  );
}

export default App;
