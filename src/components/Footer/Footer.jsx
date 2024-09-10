
import React from "react";
import './Footer.css'; 

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content-wrapper">
     
      <div className="footer-logo">
        <img src="./public/logoo.jpg" alt="Logo" />
      </div>

      
      <div className="footer-content">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-md-12 mt-md-0 mt-3">
              <h5 className="text-uppercase">Links</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-12 mb-md-0 mb-3">
              <ul className="list-unstyled footer-links">
                <li><a href="#!">Repositorio GitHub</a></li>
                <li><a href="#!">Política de Privacidad</a></li>
                <li><a href="#!">Instagram</a></li>
                <li><a href="https://www.youtube.com/watch?v=eQMcIGVc8N0" target="_blank" rel="noopener noreferrer">YouTube</a></li>

              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          @2024 Matias Bahamonde Todos los derechos reservados
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
