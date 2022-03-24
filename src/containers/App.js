import "./App.css";
import { Accordion } from "../components/Accordion";
import { NavBar } from "../components/NavBar";
import { AdminPasswordForm } from "../components/Form/AdminPasswordForm";
import { AdminLanding } from "../components/AdminLanding";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { Form } from "../components/Form/Form";
import { Footer } from "../components/Footer"

function App() {
  return (
    <Router>
      
      <div className='d-flex align-items-start'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Accordion />} />
          <Route path='/admin' element={<AdminPasswordForm />} />
          <Route path='/admin/landing' element={<AdminLanding />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}
export default App;
