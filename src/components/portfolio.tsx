'use client';
import { useState } from "react";
import project from "../data/project.tsx";
import { FaGithub } from "react-icons/fa6";


export default function Portfolio() {

    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState("Tous");

    const active = {
        color: "var(--color-base-100)",
        background: "var(--color-primary)"
    }

    function changePage(p: number)
    {
        return setPage(p);
    }


  return (
    <div>
        
        <div className='flex flex-wrap justify-center gap-4 mb-5'>
          <p onClick={() => setFilter("Tous")} className='card-border border-base-300 bg-base-100 py-1 px-3 rounded-xl hover:bg-primary hover:text-base-100 cursor-pointer' style={ filter === "Tous" ? active : {} }>Tous</p>

          <p onClick={() => setFilter("Web")} className='card-border border-base-300 bg-base-100 py-1 px-3 rounded-xl hover:bg-primary hover:text-base-100 cursor-pointer' style={ filter === "Web" ? active : {} }>Application web</p>
          <p onClick={() => setFilter("Cyber")} className='card-border border-base-300 bg-base-100 py-1 px-3 rounded-xl hover:bg-primary hover:text-base-100 cursor-pointer' style={ filter === "Cyber" ? active : {} }>Cybersécurité</p>
          <p onClick={() => setFilter("Desktop")} className='card-border border-base-300 bg-base-100 py-1 px-3 rounded-xl hover:bg-primary hover:text-base-100 cursor-pointer' style={ filter === "Desktop" ? active : {} }>Desktop</p>
          <p onClick={() => setFilter("Jeux")} className='card-border border-base-300 bg-base-100 py-1 px-3 rounded-xl hover:bg-primary hover:text-base-100 cursor-pointer' style={ filter === "Jeux" ? active : {} }>Jeux</p>  
        </div>

        { filter == "Tous" ? (<p>tous</p>) : <p>{filter}</p>}

        <div className="flex flex-wrap gap-5 justify-center items-center">


            { Object.values(project[page]).map((e,index) => {
                    // if(filter === "Tous" || filter === e.tech ){

                    // }
                    return (

                        
                        <div key={index} className='card-border border-base-300 rounded-xl w-sm '>
                            
                            
                            <div className='relative'>
                                <img src={e.img} alt="" className='rounded-tl-xl rounded-tr-xl hover:blur-xs'/>
                                {/* <div className='absolute bg-primary/30 top-0 l-0 w-full h-full flex justify-center items-center rounded-tl-xl rounded-tr-xl opacity-0 hover:opacity-100 z-20 '>
                
                                </div> */}
                            </div>

                            <div className='p-5 flex flex-col gap-5 bg-base-100 rounded-bl-xl rounded-br-xl  pt-8'>

                                <p className='text-xl font-bold'> {e.title} </p>
                                <p className='text-sm'>{e.description}</p>
                                <div className='flex flex-wrap gap-1'>
                                    {e.technos.map((a,index) => {
                                        return <p key={index} className='px-2 bg-primary rounded-xl text-base-100 font-bold text-xs'>{a}</p>
                                    })}
                                </div>
                                <div className="flex justify-center">   
                                    <div className="flex items-center justify-center gap-2 card-border border-base-300 p-2 w-50 rounded-xl hover:bg-primary hover:text-base-100">
                                        <FaGithub /> <p>GitHub</p>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        );
            })}
            

            
        </div>

        <div className="join flex justify-center mt-5">

            <form action="">
                <input onChange={() => changePage(0)}
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                checked={page === 0 ? true : false}/>
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" onChange={() => changePage(1)} checked={page === 1 ? true : false}/>
            </form>
            
        </div>
    </div>
  );

}