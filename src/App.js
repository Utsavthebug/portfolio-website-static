import Home from './component/Home/Home';
import About from './component/About/About';
import './App.css';
import Service from './component/Service/Service';
import Project from './component/Project/Project';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
