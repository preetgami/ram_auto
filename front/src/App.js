import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./main_pages/home/Home"
import About from "./main_pages/about/About"
import Services from "./main_pages/services/Services"

import Auth from "./main_pages/auth/Auth"
import Status from "./main_pages/status/Status"
import MainNavigation from "./shared/Navigation/MainNavigation"
import Contacts from './shared/contact/Contacts';

//use should only be once logged in 
//
function App() {
  let routes;
  
  
  routes=(
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/status/:uid" element={<Status />} />

      <Route exact path="/auth" element={<Auth />} />
    </Routes>
  )
  return (
    <Router>
      {/* switch enables one route only to be used */}
      <MainNavigation />
      <Contacts/>
      <main>

        {routes}

      </main>


    </Router>
  );
}

export default App;
