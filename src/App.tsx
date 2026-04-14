import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar.tsx';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

function App() {

  const [modal, setModal] = useState(false);


  useEffect(() => {
    AOS.init({
      duration : 800
    });
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
     <>
      <Navbar/>

      <div className="bg-base-100 p-5 flex justify-center w-full flex-col md:flex-row h-screen" id="home">
         
          <div className="flex justify-center min-w-1/2">
              <div className="flex flex-col min-w-3/4 justify-center  ">
                <h1 className="text-4xl font-bold ">Développeur Web <br/><span className="text-accent">Full Stack</span></h1>
                <p className="text-lg mt-4 text-start">Je conçois et développe des applications web 
                  <br/>performantes avec <span className="text-accent">Symfony</span>.
                </p>

                <p className="flex text-accent items-center gap-2 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className=" w-7 fill-accent">
                    <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/>
                  </svg>
                    Manosque, Aix en provence, Marseille et alentours
                </p>

                <div className="w-50 flex content-around items-center gap-5 mt-4">

                  <div className="flex items-center align-items rounded-full bg-accent p-2">
                     <a href="https://www.linkedin.com/in/yannis-a-65a55b196/" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin fill-base-100" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                  </div>

                  <div className="flex items-center align-items rounded-full bg-accent p-2">
                    <a href="https://github.com/Boomwerk" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github fill-base-100" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </a>
                  </div>
                  
                  <div className="flex items-center align-items rounded-full bg-accent p-2">
                    <a href="https://x.com/boomwerkdev" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x fill-base-100" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
          </div>

          <div className="p-5 flex justify-center items-center mt-10 min-w-2/5">
            <img src="/image/undraw_programming_j1zw.svg" alt="" width="400px" />
          </div>
      </div>

      <div className="bg-base-100 mb-37.5 flex md:flex-row md:justify-around md:gap-5 flex-col overflow-hidden" id="about">

        <div className="p-5 md:w-md" data-aos="fade-right">
          <img src="/image/apercuProjet.png" alt="" className=""/>
        </div>

        <div className="p-5 md:w-xl" data-aos="fade-left">
          <h2 className="font-bold text-accent mb-5">À PROPOS</h2>
          <p className="pt-5">Développeur web full stack, je réalise des sites et applications avec PHP, Symfony et JavaScript.<br/><br/>

Autonome, j’ai mené plusieurs projets de A à Z, allant de sites WordPress à une plateforme de formation en ligne.<br/><br/>

Je souhaite aujourd’hui intégrer une équipe afin de collaborer sur des projets plus ambitieux et continuer à évoluer.</p>
        </div>


      </div>

      <div className="flex flex-col justify-center items-center w-full overflow-hidden" id="competences">
        <h2 className="font-bold text-accent mb-25">LES COMPETENCES</h2>
   
        <div className="tabs tabs-border flex justify-center mt-5 w-full" data-aos="zoom-in-left">
          {/* first tab */}
          <input type="radio" name="my_tabs_2" className="tab checked:text-accent" aria-label="Front-end" />

          <div className="tab-content bg-base-100 p-10 w-full">
           
            <div className="flex flex-col gap-5 w-full">

              <div className="w-full flex justify-center items-center gap-10 flex-col sm:flex-row">
                <img src="/image/react.png" alt="" />
                <img src="/image/html.png" alt="" />
                <img src="/image/css.png" alt="" />

              </div>
              <div className="w-full flex justify-center items-center gap-10 flex-col sm:flex-row mt-5">
                <img src="/image/js.png" alt="" />
                <img src="/image/tailwind.png" alt="" />
                <img src="/image/bootstrap.png" alt="" />
              </div>
            </div>

          </div>
          
          {/* 2 tab */}
          <input type="radio" name="my_tabs_2" className="tab checked:text-accent" aria-label="Back-end" defaultChecked />
          <div className="tab-content bg-base-100 p-10">
            

            <div className="w-full flex justify-center items-center gap-10 flex-col md:flex-row">
              <img src="/image/php.png" alt="" />
              <img src="/image/symfony.png" alt="" />
              <img src="/image/mysql.png" alt="" />

            </div>
              
     

          </div>
          {/* 3 tab */}
          <input type="radio" name="my_tabs_2" className="tab checked:text-accent" aria-label="Gestion de projet" />
          <div className="tab-content bg-base-100 p-10">
            <div className="flex flex-col gap-5">

              <div className="w-full flex justify-center items-center gap-10 flex-col lg:flex-row mt-5">
                <img src="/image/git.png" alt="" />
                <img src="/image/trello.png" alt="" />
                <img src="/image/docker.png" alt="" />

              </div>
             
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-center items-center flex-col mt-25 p-5 overflow-hidden" id="projects" >
        <h2 className="font-bold text-accent mb-5 p-10">PORTFOLIO</h2>

        <Portfolio/>
      </div>


      <div className="flex flex-col justify-center p-5 mt-25 overflow-hidden" id="experiences">

        <h2 className="font-bold text-primary mb-5 text-center">EXPERIENCES</h2>

        <div className="flex justify-center w-full p-10">
          <ul className="timeline timeline-vertical">
            <li className="flex flex-col lg:grid  py-10 lg:py-0">
              <div className="timeline-start text-primary">02/2023 - Aujourd'hui</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-90 md:w-full p-5" data-aos="fade-left">
                <h3 className="font-bold text-primary">Freelance Développeur Web</h3> <br/>
                <div className="flex gap-5 mb-5 flex-wrap">

                  <p className="badge badge-primary text-base-100">starCoiffure.fr</p>
                  <p className="badge badge-primary text-base-100">starBeauté.fr</p>
                  <p className="badge badge-primary text-base-100">statipro.fr</p>
                  <p className="badge badge-primary text-base-100">bugBounty</p>

                </div>
                


                <p>- Framework Symfony/ React/ Tailwind css/ Twig</p>
                <p>- Développement d’application web</p>
                <p>- Mise en place d’architecture backend (API, Logique métier, base de données) </p>
                <p>- Développement Front end react</p>
                <p>- Application de la méthode agile SCRUM</p>
                <p>- Déploiement, maintenance et évolutions des projets</p>
                <p>- Mise en place de maquette Figma</p>
                <p>- Utilisation des outils ia pour génération d’images</p>

                
              </div>
              <hr />
            </li>
            <li className="flex flex-col lg:grid  py-10 lg:py-0">
              <hr />
              <div className="timeline-start text-primary">10/2022- 2023</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-90 md:w-full p-5" data-aos="fade-left">
                <h3 className="font-bold text-primary">Freelance Formateur Développeur web</h3> <br/>
                <div className="flex flex-wrap gap-5 mb-5">

                  <p className="badge badge-primary text-base-100"> AFPA</p>
                  <p className="badge badge-primary text-base-100"> SIMPLON</p>
                  <p className="badge badge-primary text-base-100"> LeBocalAcademy</p>

                </div>
                <p>- Methode Agile Scrum</p>
                <p>- HTML - CSS - JAVASCRIPT</p>
                <p>- PHP</p>
                <p>- MYSQL</p>
                <p>- Programmation orienté objet</p>
                <p>- Code orienté sécurité/Framework/Symfony/</p>
                <p>- Methode MERISE</p>
                <p>- RGPD</p>
              </div>
              <hr />
            </li>
            <li className="flex flex-col lg:grid  py-10 lg:py-0">
              <hr />
              <div className="timeline-start text-primary">04/2022 – 09/2022</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-90 md:w-full p-5" data-aos="fade-left">
                <h3 className="font-bold text-primary">CDI Développeur Web fullstack – Easyconnects</h3> <br/>
                <div className="flex flex-wrap gap-5 mb-5">

                  <p className="badge badge-primary text-base-100"> EasyConnects</p>
                  <p className="badge badge-primary text-base-100"> SudInvestissement</p>
                  <p className="badge badge-primary text-base-100"> LeCampusDigital</p>

                </div>
                <p>- Framework Symfony/ React/ Tailwind css/ Twig</p>
                <p>- Création et gestion d'API</p>
                <p>- Utilisation de service API, Signature PDF, Stripe</p>
                <p>- Gestion des roles utilisateur, autorisations, authentifications</p>
                <p>- Mise en place de serveurs web, sécurité applicative</p> 
                <p>- Développement Front end REACT</p>
                <p>- Application de la méthode agile SCRUM</p>
                <p>- Déploiement, maintenance et évolutions des projets</p>
                <p>- Mise en place de maquette Figma</p>
                <p>- Utilisation des outils ia pour génération d’images</p>
              </div>
              <hr />
            </li>
            <li className="flex flex-col lg:grid  py-10 lg:py-0">
              <hr />
              <div className="timeline-start text-primary">09/2020 - 04/2022</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-90 md:w-full p-5" data-aos="fade-left">
                <h3 className="font-bold text-primary">CDD Formateur Développeur web</h3> <br/>
                <div className="flex gap-5 mb-5">
                  <p className="badge badge-primary text-base-100">AFPA</p>
                </div>

                <p>- Développement d’application web</p>
                <p>- Mise en place d’architecture backend (API, Logique métier, base de données) </p>
                <p>- Développement Front end reactjs</p>
                <p>- Application de la méthode agile SCRUM</p>
                <p>- Déploiement, maintenance et évolutions des projets</p>
                <p>- Mise en place de maquette Figma</p>
                <p>- Utilisation des outils ia pour génération d’images</p>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>


      <Contact/>

      <div className="fixed right-5 bottom-5 w-8 h-8 bg-primary rounded-4xl flex justify-center items-center">
        <a href="/" className="text-base-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </a>

      </div>

      <footer className="bg-base-300 p-5 flex justify-center gap-2 flex-wrap overflow-hidden">
        <p className="text-sm text-center cursor-pointer" onClick={() => toggleModal()}>
          Mentions Légales
        </p>
        <dialog id="legal-modal" className="modal" open={modal}>
          <div className="modal-box w-11/12 max-w-5xl">
             <h1>Mentions Légales</h1>

            <h2>Éditeur du site</h2>
            <p>
                <strong>Nom de la société :</strong> boomwerk<br/>
                <strong>Adresse :</strong> Manosque<br/>
                <strong>Directeur de publication :</strong> boomwerk<br/>
                <strong>Email :</strong> <a href="mailto:boomwerk@outlook.fr">boomwerk@outlook.fr</a><br/>
            </p>

            <h2>Hébergement</h2>
            <p>
                Le site est hébergé par <strong>ALWAYSDATA</strong>.<br/>
                Adresse : 91 rue du Faubourg Saint Honoré, 75008 Paris, France
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
                Tous les contenus présents sur ce site (textes, images, graphiques, etc.) sont la propriété de <strong>Boomwerk</strong>. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>

            <h2>Données personnelles</h2>
            <p>
                Les données personnelles collectées sur le site sont déclarées à la CNIL. Les utilisateurs disposent d un droit d'accès, de rectification et de suppression de leurs données personnelles.
            </p>

            <h2>Contact</h2>
            <p>
                Pour toute question, vous pouvez me contacter via l'email mentionné ci-dessus.
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn" onClick={() => toggleModal()}>Fermer</button>
              </form>
            </div>
          </div>
        </dialog>
        <p className="text-sm text-center">- © 2026 Yannis A. Tous droits réservés.</p>
      </footer>
      
    </>
  )
}

export default App
