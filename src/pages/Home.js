import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <header>
        <div className="logo-container">
          <Link className="home" to="/">
            <img src="./favicon.png" alt="Recognixe logo" />
            <span>Recognixe</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li className="welcome">¡Bienvenidos!</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <ul id="navigation">
            <br />
            <li className="li1">
              <button id="facial">
                <Link to="/facial">
                  <img
                    className="opcion1"
                    src="./assets/images/lente1.png"
                    alt="Lente de camara"
                    height="60px"
                  />
                </Link>
              </button>
            </li>
            <br />
            <li className="li2">
              <button id="gestual">
                <Link to="/recognixe">
                  <img
                    className="opcion2"
                    src="./assets/images/victory.png"
                    alt=""
                    height="60px"
                  />
                </Link>
              </button>
            </li>
            <br />
            <br />
            <br />
            <br />
            <li className="li3">
              <button id="code">
                <a
                  href="https://github.com/tonythebrother/recognixe"
                  alt="Github recognixe"
                >
                  <img
                    className="github"
                    src="./assets/images/GitHub_logo.png"
                    alt=""
                    height="60px"
                  />
                </a>
              </button>
            </li>
          </ul>
        </section>
        <aside>
          <h1>
            <img src="./favicon.png" alt="" width="40px" />
            <span> Recognixe </span>
          </h1>
          <p>
            Esta pagina surge de la necesidad de satisfacer nuestro 3° trabajo
            de la asignatura de Programación III, impartida en el Instituto
            Tecnológico de las Américas (ITLA), que en la misma se asigno crear
            una aplicación de reconocimiento facial y de señas, así le nombramos
            (Recognixe) por su familiarización con la palabra "Recognize" que su
            significado es reconocer, traducido del Ingles.
            <br />
            <br />
            Muchas gracias, por haber leido esta introducción, disfrute de su
            uso, puede acceder al repositorio de GitHub, si desea observar el
            codigo.
            <br />
            <br />
            -Jowensdy Castillo, Carlos Díaz, Roy Del Orbe, Edgar Vasquez, David
            Feliz y Ronny Pérez
          </p>
        </aside>
      </main>
    </>
  );
}

export default Home;
