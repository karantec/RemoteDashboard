import "./Home.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "../components/Sidebar.jsx";
import UserDetails from "./UserDetails.jsx";
import AccountCreate from "./AccountCreate.jsx";
import Dashboard from "./Dashboard.jsx";
const Home = () => {
  return (
    <div>
     <BrowserRouter>
   <Sidebar>
     <Routes> 
        
        <Route path="/Dashboard" element={<Dashboard />} />
       <Route path="/User" element={<UserDetails/>} />
       <Route path="/Account" element={<AccountCreate />} />
     </Routes>
   </Sidebar>
 </BrowserRouter>
    </div>
  )
}

export default Home