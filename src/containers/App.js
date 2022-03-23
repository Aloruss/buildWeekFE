import "./App.css";
import { Accordion } from "../components/Accordion";
import { NavBar } from "../components/NavBar";
import AdminPage from "../components/AdminPage";
import "bootswatch/dist/flatly/bootstrap.min.css";
// this is comment to check if pravin can push to bootstrap_feature branch.
function App() {
  return (
    <div className='d-flex align-items-start'>
      <NavBar />
      <Accordion />
      <AdminPage />
    </div>
  );
}
export default App;
