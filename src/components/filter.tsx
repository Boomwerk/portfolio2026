
type FilterProps = {
    filters: string[];
    currentFilter: string;
    setCurrentFilter: (currentFilter:string) => void;
}


const Filter = ({filters, currentFilter, setCurrentFilter}: FilterProps) => {

    

    return(
        <div className='flex flex-wrap justify-center gap-4 mb-5'>

            {filters.map((name,index) => {
                
                return (<p 
                        key={index} 
                        className={`${currentFilter === name ? "bg-primary text-base-100 ": ""}card-border border-base-300 bg-base-100 py-1 px-3 rounded-xl hover:bg-primary hover:text-base-100 cursor-pointer`}
                        onClick={ () => setCurrentFilter(name)}
                        >{name}</p>)
            })}
           
        </div>
    );
}

export default Filter;