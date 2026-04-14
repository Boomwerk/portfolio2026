'use client';
import { useState } from "react";
import project from "../data/project";


export default function Portfolio() {

    const [page, setPage] = useState(0);

    function changePage(p)
    {
        return setPage(p);
    }


  return (
    <div>        
        <div className="flex flex-wrap gap-5">

            
            { Object.values(project[page]).map((e,index) => {
                    return (<div key={index} className="card bg-base-100 shadow-sm md:w-96" data-aos="flip-right">
                        <figure>
                            <img
                            src={e.img}
                            alt="Shoes" />
                        </figure>
                        <div className="card-body border border-base-200 gap-5">
                            <h2 className="card-title">
                           {e.title}
                            <div className="badge badge-secondary">{e.tech}</div>
                            </h2>
                            <p>{e.description}</p>
                            <div className="card-actions justify-end">
                                {e.technos.map((a,index) => {
                                    return <div key={index} className="badge badge-outline">{a}</div>
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
                checked={page === 0 ? 'checked' : ''}/>
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" onChange={() => changePage(1)} checked={page === 1 ? 'checked' : ''}/>
            </form>
            
        </div>
    </div>
  );

}