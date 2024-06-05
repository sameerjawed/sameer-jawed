import logo from '../src/assets/images/logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './component/Navbar';
import Banner from './component/Banner';
import Skill from './component/Skill';
import Projects from './component/Projects';
import { Contact } from './component/Contact';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;