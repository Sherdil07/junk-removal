import './App.css';
import Footer from './Components/Footer/Footer';




import Header from './Components/Header/Header';
import Map from './Components/Map/Map';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Header/>
    <Services/>
    <Testimonial/>
    <Map/>
   
    <Footer/>


  
   
 
  </div>
  );
}

export default App;
