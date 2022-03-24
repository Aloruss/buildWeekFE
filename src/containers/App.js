import "./App.css";
import { Accordion } from "../components/Accordion";
import { NavBar } from "../components/NavBar";
import { AdminPasswordForm } from "../components/Form/AdminPasswordForm";
import { AdminLanding } from "../components/AdminLanding";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { Form } from "../components/Form/Form";
import { AddAndiForm } from "../components/Form/AddAndiForm";

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
          <Route path='/admin/landing/addclient' element={<AdminLanding />} />
          <Route path='/admin/landing/addproject' element={<AdminLanding />} />
          <Route
            path='/admin/landing/allocateAndi'
            element={<AdminLanding />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
