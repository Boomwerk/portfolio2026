'use client';
import { useState } from "react";


export default function contact(){

    const [data, setData] = useState({
        email:"",
        subject:"",
        message:""
    });


    const [alert, setAlert] = useState(null);
    

    const handledata = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    }

    const submit = (e) => {
        e.preventDefault();

        try{

            fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data)
            })
            .then(e => {return e.json()})
            .then(f => {
                if(f.success){
                    setAlert({type:"success", message: "Le message a bien été envoyer"});
                    setTimeout(() => {
                        setAlert(null)
                    }, 3000);
                }else{
                    setAlert({type:"error", message: "Une erreur est survenue !"});
                    setTimeout(() => {
                        setAlert(null)
                    }, 3000);
                }
            }  )
            
        }catch(error){
            console.error(error);

        }
    }




    return(
        <div className="flex items-center justify-center flex-col p-10" id="contact">

            <h2 className="font-bold text-accent mb-5 p-10">CONTACT</h2>
            
            <div className="flex flex-wrap justify-center items-center w-full gap-5">

                <div className="w-full md:w-2/5 p-10 flex justify-center items-center">
                    <img src="/image/undraw_complete-form_aarh.svg" alt="" className="w-100 md:w-lg" />
                </div>

                

                <div className="flex flex-col items-center gap-5 p-10 w-xl">
                    {alert && (
                        <div role="alert" className={`alert alert-${alert.type} w-full`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{alert.message}</span>
                        </div>
                    )} 
                    

                    

                    <div className="w-50 flex content-around items-center gap-5 mt-4">

                        <div className="flex items-center align-items rounded-full bg-accent p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin fill-base-100" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </div>

                        <div className="flex items-center align-items rounded-full bg-accent p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github fill-base-100" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </div>
                            
                        <div className="flex items-center align-items rounded-full bg-accent p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x fill-base-100" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                        </div>

                    </div>

                    <form onSubmit={submit} className="flex flex-col gap-5 w-full" >

                        <label className="input validator w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                            </svg>
                            <input type="email" placeholder="exemple@site.com" className="w-full" required name="email" value={data.email} onChange={handledata}/>
                        </label>

                        <div className="validator-hint hidden">Veuillez entrer une adresse email valide </div>

                        <label className="input validator w-full">
                            <input type="text" placeholder="Objet: " className="w-full" required pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Seul les Lettres, Chiffres, et Tirer" name="subject" value={data.subject} onChange={handledata}/>
                        </label>
                        <div className="validator-hint hidden"> Le champ doit comporter entre 3 et 30 caractères. <br />
                        Seules les lettres, les chiffres et les tirets sont autorisés.

                        </div>

                        
                        <label className="textarea validator w-full">
                            <textarea className="textarea w-full" placeholder="Message :" required pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Seul les Lettres, Chiffres, et Tirer" name="message" value={data.message} onChange={handledata}></textarea>
                        </label>

                        <div className="validator-hint hidden"> Le champ doit comporter entre 3 et 30 caractères. <br />
                        Seules les lettres, les chiffres et les tirets sont autorisés.

                        </div>
                        

                        <button className="btn btn-primary text-base-100">Envoyer</button>

                            



                    </form>
                </div>

            </div>
        </div>
    );
}