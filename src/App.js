import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
