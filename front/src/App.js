import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./main_pages/Home"
import About from "./main_pages/About"
import Services from "./main_pages/Services"

import Auth from "./main_pages/Auth"
import Status from "./main_pages/Status"
import Use from "./main_pages/Use"
import MainNavigation from "./shared/Navigation/MainNavigation"
import Tips from './main_pages/Tips';
import Contact from "./main_pages/Contact"
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
      <Route exact path="/use" element={<Use />} />
      <Route exact path="/user/:uid" element={<Status />} />
      <Route exact path="/tips" element={<Tips />} />
      <Route exact path="/contact" element={<Contact />} />

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
