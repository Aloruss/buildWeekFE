import "./App.css";
import { Accordion } from "../components/Accordion";
import { NavBar } from "../components/NavBar";

import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  return (
    <div className='d-flex align-items-start'>
      <NavBar />
      <Accordion />
    </div>
  );
}
export default App;
