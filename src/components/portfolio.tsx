'use client';
import { useState } from "react";
import project from "../data/project.tsx";


export default function Portfolio() {

    const [page, setPage] = useState(0);

    function changePage(p: number)
    {
        return setPage(p);
    }


  return (
    <div>        
        <div className="flex flex-wrap gap-5 justify-center items-center">

            
            { Object.values(project[page]).map((e,index) => {
                    return (
                        <div key={index} className='card-border border-base-300 rounded-xl w-sm '>

                            <div className='relative'>
                                <img src={e.img} alt="" className='pointer-events-none rounded-tl-xl rounded-tr-xl' />
                                <div className='absolute bg-primary/30 top-0 l-0 w-full h-full flex justify-center items-center rounded-tl-xl rounded-tr-xl opacity-0 hover:opacity-100 z-20 '>
                                <p className='bg-primary px-3 rounded text-xl font-bold text-white'>Détails</p>
                                </div>
                            </div>

                            <div className='p-5 flex flex-col gap-5 bg-base-100 rounded-bl-xl rounded-br-xl h-50 pt-8'>

                                <p className='text-xl font-bold'> {e.title} </p>
                                <p className='text-sm'>{e.description}</p>
                                <div className='flex flex-wrap gap-1'>
                                     {e.technos.map((a,index) => {
                                    return <p key={index} className='px-2 bg-primary rounded-xl text-base-100 font-bold text-xs'>{a}</p>
                                })}
                                
                                
                            
                                </div>
                                
                            </div>

                        </div>);
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