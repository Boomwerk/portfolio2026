'use client';
import { useState } from "react";
import project from "../data/project.tsx";
import { FaGithub } from "react-icons/fa6";
import Pagination from "./pagination.tsx";
import Filter from "./filter.tsx";
import { FaLink } from "react-icons/fa6";


export default function Portfolio() {

     // filter
    const [currentFilter, setCurrentFilter] = useState("Tous");
    const filter = ["Tous","Web","Cybersecurité","Desktop","Jeux"];


    const filterProjects = project.filter( project => currentFilter === "Tous" || project.tech === currentFilter)
    const countProjectByFilter = filterProjects.length


    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const projectPerPage= 3; 
    
    const totalPages = Math.ceil(countProjectByFilter / projectPerPage); 

    const startIndex = (currentPage -1) * projectPerPage;
    const endIndex = startIndex + projectPerPage;

    const displayedProjects = filterProjects.slice(startIndex,endIndex);
    const hasProject = project.some( project => currentFilter === "Tous" || currentFilter === project.tech);

    const handleFilterChange = (filter:string) => {
        setCurrentFilter(filter);
        setCurrentPage(1);
    }


    return (
        <div>
            
            <Filter filters={filter} currentFilter={currentFilter} setCurrentFilter={handleFilterChange}/>

        
            <div className="flex flex-wrap gap-5 justify-center items-center ">

                
                {hasProject ? (
                    displayedProjects.map((e, index) => {
                            
                    return (
                        <div key={index} className='card-border border-base-300 rounded-xl w-85 md:w-sm '>         
                            
                            <div className='relative'>
                                <img src={e.img} alt={e.title} className='rounded-tl-xl rounded-tr-xl hover:blur-xs'/>
                             
                                <div className='absolute bg-primary/30 top-0 l-0 w-full h-full flex justify-center items-center rounded-tl-xl rounded-tr-xl opacity-0 hover:opacity-100 z-2 '>
                                    <label htmlFor={`my_modal_${index}`} className="btn">Agrandir l'image</label>
                                </div>
                            </div>

                            <div className='p-5 flex flex-col gap-5 bg-base-100 rounded-bl-xl rounded-br-xl  pt-8'>

                                <p className='text-xl font-bold'> {e.title} </p>
                                <p className='text-sm'>{e.description}</p>
                                <div className='flex flex-wrap gap-1'>
                                    {e.technos.map((techno,index) =>{
                                        return <p key={index} className='px-2 bg-primary rounded-xl text-base-100 font-bold text-xs'>{techno}</p>
                                    })}
                                    
                                </div>
                                <div className="flex justify-center gap-5">  
                                    { e.github && 
                                    <a href={e.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 card-border border-base-300 p-2 w-50 rounded-xl hover:bg-primary hover:text-base-100">
                                        <FaGithub /> <p>GitHub</p>
                                    </a> }
                                     { e.url && 
                                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 card-border border-base-300 p-2 w-50 rounded-xl hover:bg-primary hover:text-base-100">
                                        <FaLink /> <p>Demo</p>
                                    </a> }

                                    { e.disabled && 
                                    <div className="flex items-center justify-center gap-2 card-border border-base-300 p-2 w-50 rounded-xl ">
                                        <p>Non disponible</p>
                                    </div> }
                                </div> 
                                
                                
                            </div>

                            {/* Modal */}
                            <input type="checkbox" id={`my_modal_${index}`} className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box lg:scale-150">
                                    <img src={e.img} alt="" className='rounded-tl-xl rounded-tr-xl w-full'/>
                                </div>
                                <label className="modal-backdrop" htmlFor={`my_modal_${index}`}>Fermer</label>
                            </div>
                        </div>

                        
                    );
                    

                })   
                    
                ) : (
                    <div role="alert" className="alert alert-error alert-soft mt-20 mb-60">
                        <span className="text-lg">Il n'y a aucun projet dans cette catégorie.</span>
                    </div>
                )}
                          
              
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
            
        </div>
    );

}