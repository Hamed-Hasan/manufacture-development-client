import React, { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Navbar from './components/Pages/Shared/Navbar';
import Loading from './components/Pages/Shared/Loading';

const AddOrder = React.lazy(() => import('./components/Pages/Dashboard/AddOrder'));
const Purchase = React.lazy(() => import('./components/Pages/purchase/Purchase'));
const Blog = React.lazy(() => import('./components/Pages/Blog/Blog'));
const Home = React.lazy(() => import('./components/Pages/Home/Home'));  
const Dashboard = React.lazy(() => import('./components/Pages/Dashboard/Dashboard'));  
const MyPortfolio = React.lazy(() => import('./components/Pages/MyPortfolio/MyPortfolio'));    
const Footer = lazy(() => import('./components/Pages/Shared/Footer'));   
const NotFound = lazy(() => import('./components/Pages/Shared/NotFound/NotFound'));   
const Login = lazy(() => import('./components/Pages/Auth/Login'));   
const SignUp = lazy(() => import('./components/Pages/Auth/SignUp'));    
const RequireAuth = lazy(() => import('./components/Pages/Auth/RequireAuth'));    
const MyOrders = lazy(() => import('./components/Pages/Dashboard/MyOrders'));    
const AddReview = lazy(() => import('./components/Pages/Dashboard/AddReview'));    
const MyProfile = lazy(() => import('./components/Pages/Dashboard/MyProfile'));    
const Payment = lazy(() => import('./components/Pages/Dashboard/Payment'));    
const ManageOrder = lazy(() => import('./components/Pages/Dashboard/ManageOrder'));    
const MakeAdmin = lazy(() => import('./components/Pages/Dashboard/MakeAdmin'));    
const ManageAllOrders = lazy(() => import('./components/Pages/Dashboard/ManageAllOrders'));    
const RequireNonAdmin = lazy(() => import('./components/Pages/Auth/RequireNonAdmin'));    
const BlogNext = lazy(() => import('./components/Pages/Blog/BlogNext'));    
const ScrollToTop = lazy(() => import('./components/Pages/Shared/ScrollToTop/ScrollToTop'));    


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <React.Suspense fallback={<Loading/>}>

      
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
    </React.Suspense>
    <Footer/>
    <ScrollToTop/>
    <ToastContainer/>
    </div>
  );
}

export default App;
