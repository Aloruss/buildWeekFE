import "./App.css";
import { Accordion } from "../components/Accordion/Accordion";
import { NavBar } from "../components/NavBar";
import { AdminPasswordForm } from "../components/Form/AdminPasswordForm";
import { AdminLanding } from "../components/AdminLanding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddAndiForm } from "../components/Form/AddAndiForm";
import { AddClientForm } from "../components/Form/AddClientForm";
import { AddProjectForm } from "../components/Form/AddProjectForm";
import { Footer } from "../components/Footer";
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className='d-flex align-items-start'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Accordion />} />
          <Route path='/admin' element={<AdminPasswordForm />} />
          <Route path='/admin/landing' element={<AdminLanding />} />
          <Route path='/admin/landing/addandi' element={<AddAndiForm />} />
          <Route path='/admin/landing/addclient' element={<AddClientForm />} />
          <Route
            path='/admin/landing/addproject'
            element={<AddProjectForm />}
          />
          <Route
            path='/admin/landing/allocateAndi'
            element={<AdminLanding />}
          />
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
