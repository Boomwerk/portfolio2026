type PaginationProps = {
    currentPage:number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps ) => {

    return (

        <div className="join flex justify-center mt-5">

            {
                Array.from({length:totalPages}).map((_,index) => {
                    
                    const page = index +1;

                    return (
                        <button 
                            key={index} 
                            className={currentPage === page ? "join-item btn btn-square bg-primary text-base-100" : "join-item btn btn-square"}  
                            onClick={() => onPageChange(page)}> {page} </button>

                    )
                })
            }
          
            
        </div>
    )



}


export default Pagination;