
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css'; 
import Header from './components/Header/Header.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import './components/Footer/Footer.css';
import BasicExample from './components/NavBar/NavBar.jsx';
import './components/NavBar/NavBar.css';
function App() {


  return (
    <div>
      <Header/>

     
     
     <BasicExample/>

      <MainSection
        title="Bienvenido a Fire Store"
        description="Descubre nuestra increíble colección de camisetas de equipos de fútbol 2024. Calidad, estilo y pasión por el deporte en este lugar."
        
      />
      <Footer />
    </div>

  );
}






export default App;















