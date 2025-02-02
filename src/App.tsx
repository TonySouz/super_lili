import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './index.css'

const App: React.FC = () => {
  return (
    <>

        <nav className="navbar navbar-expand-lgs bg-warning d-flex justify-content-center align-items-center py-3">
          <a href="#">
            <img src="src/imgs/logo2.jpg" alt="super lili" className="img-fluid" style={{maxHeight: '50px'}}/>
          </a>
          <div className="d-flex justify-content-end  ms-auto">
            <a href="https://wa.me/5585992023346?text=Olá,%20gostaria%20de%20mais%20informações" target="_blank" className="text-decoration-none mx-3">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-success"/> WhatsApp
            </a>
            <a href="https://www.instagram.com/superlili_oficial/" target="_blank" className="text-decoration-none mx-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-danger"/> Instagram
            </a>
          </div>
        </nav>


      <div className="mt-5 pt-5 text-center">
        <h1>Bem-vindo ao Super Lili</h1>
      </div>
      
      <div className="mt-5 pt-5 text-center">
        <h1>Sobre Nós</h1>
      </div>

      <div className="mt-5 pt-5 text-center">
        <h1>Nossos Produtos</h1>
      </div>

      <div className="mt-5 pt-5 text-center">
        <h1>Informações</h1>
      </div>

      <footer className="bg-warning d-flex justify-content-center align-items-center py-3">
        <div className="text-center">
          <p className="text-muted text-center">© 2025 Super Lili. Todos os direitos reservados.</p>
        </div>
        <div className="justify-content-end ms-auto">
          <a href="https://wa.me/5585992023346?text=Olá,%20gostaria%20de%20mais%20informações" target="_blank" className="text-decoration-none mx-3">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-success"/>
          </a>
          <a href="https://www.instagram.com/superlili_oficial/" target="_blank" className="text-decoration-none mx-3">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-danger"/>
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;