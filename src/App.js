import './App.scss';
import { Routes ,Route ,useLocation} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Skills from './pages/skills';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Navbar from './components/navbar';
import ParticlesComponent from './utils/particles';


function App() {

  const location = useLocation();
  console.log(location);
  
  const renderparticleJsInHomePage=location.pathname === '/';
  return (
    <div className="App">
      
       
       {
        renderparticleJsInHomePage && (
        <ParticlesComponent id="particles" />)
       }
      

      
      <Navbar />

     
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
      

    </div>
  );
}

export default App;
