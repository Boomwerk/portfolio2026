'use client';
import { useEffect,useState } from "react";


const navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    
    useEffect(() => {
        const media = window.matchMedia("(max-width: 640px)");

        const handleResize = (e) => {
            if (e.matches) {
                setIsOpen(false);
            }
        };
        
        media.addEventListener('change', handleResize);
        return () => {
            media.removeEventListener('change', handleResize);
        };  
    }, []);
    



  return (
        <nav className="w-full bg-base-100 flex justify-around items-center p-4 z-2 border-b border-neutral-content">
            <div className="w-3/4  flex items-center justify-start lg:px-5">
                <h2 className=" font-bold">Yannis Dev  <span className="text-accent">Web</span></h2>
            </div>

            <button className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                ) : (      
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </button>
            
            <div className={`${isOpen ? 'absolute top-15 left-0 w-full content-center items-center bg-base-100 animate__animated animate__fadeInDown' : 'hidden'} w-1/2 items-center justify-end lg:flex`}>
                <ul className={`${isOpen ? 'flex flex-col items-center py-5 gap-4':'flex gap-4 px-5'}`}>
                    <li className="w-[66px]"><a href="#about" className="text-neutral hover:border-b-2 hover:border-b-accent">À Propos</a></li>
                    <li><a href="#competences" className="text-neutral hover:border-b-2 hover:border-b-accent">Compétences</a></li>
                    <li><a href="#projects" className="text-neutral hover:border-b-2 hover:border-b-accent">Portfolio</a></li>
                    <li><a href="#experiences" className="text-neutral hover:border-b-2 hover:border-b-accent">Experiences</a></li>
                    <li><a href="#contact" className="text-neutral hover:border-b-2 hover:border-b-accent">Contact</a></li>
                </ul>
            </div>
            
        </nav>

  );
};

export default navbar;