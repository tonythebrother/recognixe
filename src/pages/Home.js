import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <header>
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
            <li class="li1">
              <button id="facial">
                <img
                  class="opcion1"
                  src="./assets/images/lente1.png"
                  alt=""
                  height="60px"
                />
              </button>
            </li>
            <br />
            <li class="li2">
              <button id="gestual">
                <Link to="/recognixe">
                  <img
                    class="opcion2"
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
            <li class="li3">
              <button id="code">
                <img
                  class="github"
                  src="./assets/images/GitHub_logo.png"
                  alt=""
                  height="60px"
                />
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

//<a class="home" href="/">
//                        <img src="./favicon.png" alt="" height="20px">
//                      Recognixe
//                </a>
