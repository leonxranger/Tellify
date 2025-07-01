import './App.css'
import Landingpage from './pages/landingpage'
import Loginpage from './pages/loginpage'
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Register from './pages/register';
import Mystories from './pages/mystories';
import { Userprovider } from './pages/usercontext.jsx';
import Newstory from './pages/newstory.jsx';
function App() {
  return(
    <>
    <Userprovider>
      <Router >
        <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Loginpage" element={<Loginpage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/mystories" element={<Mystories/>}></Route>
             <Route path="newstory" element={<Newstory/>}/>


        </Routes>
        
      </Router>
    </Userprovider>
    </>
   )
}

export default App
 