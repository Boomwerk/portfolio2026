'use client';
import { useEffect,useState } from "react";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    
    useEffect(() => {
        const media = window.matchMedia("(min-width: 1023px)");

        const handleResize = (e: { matches: boolean }) => {
            console.log(e);
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
        <nav className="fixed w-full mt-3 px-5 z-3 opacity-96">

            <div className="max-w-7xl mx-auto flex justify-between items-center p-4 z-2 rounded-xl card-border border-base-300 bg-base-100">

                <div className="">
                    <h3 className="font-bold animate_gradient text-[18px]">YANNIS</h3>
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
                
                
                <div className={`${isOpen ? 'absolute top-16 left-0 w-full px-5' : 'hidden'} lg:flex`}>
                    <div className={`${isOpen ?'max-w-7xl mx-auto bg-base-100 card-border border-base-300 rounded-xl' : ''}`}>  
                        <ul className={`${isOpen ? 'flex flex-col p-5 gap-8':'flex gap-10 px-5'}`}>
                            <li className="hover:bg-base-200 rounded p-2"><a href="#about" className="hover:border-b-2 hover:border-b-primary">À Propos</a></li>
                            <li className="hover:bg-base-200 rounded p-2"><a href="#competences" className="hover:border-b-2 hover:border-b-primary">Compétences</a></li>
                            <li className="hover:bg-base-200 rounded p-2"><a href="#projects" className="hover:border-b-2 hover:border-b-primary">Portfolio</a></li>
                            <li className="hover:bg-base-200 rounded p-2"><a href="#experiences" className="hover:border-b-2 hover:border-b-primary">Experiences</a></li>
                            <li className="hover:bg-base-200 rounded p-2"><a href="#contact" className="hover:border-b-2 hover:border-b-primary">Contact</a></li>
                        </ul>
                    </div>
                    
                </div>

            </div>

        </nav>

  );
};

export default Navbar;