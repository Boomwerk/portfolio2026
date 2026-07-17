import '@fontsource-variable/sora/wght.css';
import '@fontsource-variable/space-grotesk/wght.css';
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
     <section className='bg-base-200'>
      <Navbar/>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto flex-col md:flex-row min-h-screen pt-28 pb-24 px-6" id="home">

        <div className="">
          <div className="flex flex-col justify-center">
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
                <p className='text-primary py-5'> BIENVENU DANS MON MONDE </p>
              </div>

              <div>
                <h1 className="text-5xl sm:text-7xl font-bold ">Salut, moi c'est <span className='text-primary'>Yannis</span></h1>
              </div>
              
              <p className='text-xl sm:text-3xl pt-4 flex gap-2'>Développeur FullStack 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                </svg>
              </p>

              <p className="text-md sm:text-lg mt-4 text-start">Développeur full-stack basé à La Ciotat. J'ai livré plusieurs projets - applications web, e-commerce, saas, e-learning. Je travaille vite, je fais attention aux détails.</p>

              <div className='p-4 border-s-4 rounded border-primary my-4'>
                <p className='italic'>" Je crois en ce que je peux apprendre à faire, pas seulement en ce que je sais déjà faire. "</p>
              </div>

              <p className="flex text-primary items-center gap-2 my-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className=" w-5 fill-primary">
                  <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/>
                </svg>
                  La Ciotat
              </p>

              <div className='flex gap-5 flex-wrap'>

                <div className='card-border border-base-300 rounded-xl flex items-center px-3 py-3 gap-5'>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </div>

                  <div className='flex flex-col'>
                    <p className='font-bold text-md'>3+</p>
                    <p className='text-xs'>Années d'Experiences</p>
                  </div>

                </div>

                <div className='card-border border-base-300 rounded-xl flex items-center px-3 py-3 gap-5'>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </div>

                  <div className='flex flex-col'>
                    <p className='font-bold text-md'>15+</p>
                    <p className='text-xs'>Projets réalisés</p>
                  </div>
                </div>

              </div>

              <div className='flex gap-4 mt-15'>
                <a href="" className='px-5 py-2 bg-primary rounded-lg '>Voir Mon Travail</a>
                <a href="" className='px-5 py-2 rounded-lg card-border border-base-300 '>Me Contacter</a>
                <a href="">
                  
                </a>
                <a href=""></a>

              </div>


            </div>
        </div>

        <div className="flex justify-center items-center mt-10 ">
            <img src="/image/undraw_programming_j1zw.svg" alt="image de programmation" width="400px" />
        </div>
      </div>

        <div className="bg-base-100 mb-37.5 flex md:flex-row md:justify-around md:gap-5 flex-col overflow-hidden" id="about">

          <div className="p-5 md:w-md" data-aos="fade-right">
            <img src="/image/apercuProjet.png" alt="image d'aperçu du projet" />
          </div>

          <div className="p-5 md:w-xl" data-aos="fade-left">
            <h2 className="font-bold text-accent mb-5">À PROPOS</h2>
            <p className="pt-5">Développeur web full stack, je réalise des sites et applications avec PHP, Symfony et JavaScript.<br/><br/> Autonome, j'ai mené plusieurs projets de A à Z, allant de sites WordPress à une plateforme de formation en ligne.<br/><br/> Je souhaite aujourd'hui intégrer une équipe afin de collaborer sur des projets plus ambitieux et continuer à évoluer.</p>
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
                <img src="/image/react.png" alt="logo React" />
                <img src="/image/html.png" alt="logo HTML" />
                <img src="/image/css.png" alt="logo CSS" />

              </div>
              <div className="w-full flex justify-center items-center gap-10 flex-col sm:flex-row mt-5">
                <img src="/image/js.png" alt="logo JavaScript" />
                <img src="/image/tailwind.png" alt="logo Tailwind CSS" />
                <img src="/image/bootstrap.png" alt="logo Bootstrap" />
              </div>
            </div>

          </div>
          
          {/* 2 tab */}
          <input type="radio" name="my_tabs_2" className="tab checked:text-accent" aria-label="Back-end" defaultChecked />
          <div className="tab-content bg-base-100 p-10">
            

            <div className="w-full flex justify-center items-center gap-10 flex-col md:flex-row">
              <img src="/image/php.png" alt="logo PHP" />
              <img src="/image/symfony.png" alt="logo Symfony" />
              <img src="/image/mysql.png" alt="logo MySQL" />

            </div>
              
     

          </div>

          {/* 3 tab */}
          <input type="radio" name="my_tabs_2" className="tab checked:text-accent" aria-label="Gestion de projet" />
          <div className="tab-content bg-base-100 p-10">
            <div className="flex flex-col gap-5">

              <div className="w-full flex justify-center items-center gap-10 flex-col lg:flex-row mt-5">
                <img src="/image/git.png" alt="logo Git" />
                <img src="/image/trello.png" alt="logo Trello" />
                <img src="/image/docker.png" alt="logo Docker" />

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
                <p>- Développement d'application web</p>
                <p>- Mise en place d'architecture backend (API, Logique métier, base de données) </p>
                <p>- Développement Front end react</p>
                <p>- Application de la méthode agile SCRUM</p>
                <p>- Déploiement, maintenance et évolutions des projets</p>
                <p>- Mise en place de maquette Figma</p>
                <p>- Utilisation des outils ia pour génération d'images</p>

                
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
                <p>- Utilisation des outils ia pour génération d'images</p>
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

                <p>- Développement d'application web</p>
                <p>- Mise en place d'architecture backend (API, Logique métier, base de données) </p>
                <p>- Développement Front end reactjs</p>
                <p>- Application de la méthode agile SCRUM</p>
                <p>- Déploiement, maintenance et évolutions des projets</p>
                <p>- Mise en place de maquette Figma</p>
                <p>- Utilisation des outils ia pour génération d'images</p>
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
                <strong>Directeur de ation :</strong> boomwerk<br/>
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
      
    </section>
  )
}

export default App
