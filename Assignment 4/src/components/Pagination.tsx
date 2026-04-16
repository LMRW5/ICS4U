type PaginationProps = {
    setPage: (value: number) => void;
    totalPages: number;
    page: number;
}


export default function Pagination({setPage, totalPages, page}: PaginationProps){
    return <>
       <button onClick={()=>setPage(1)}>First</button>
    <button onClick={()=>setPage(Math.max(1,page - 1))}>Prev</button>
    <h2>Page {page}/{totalPages}</h2>
    <button onClick={()=>setPage(Math.min(totalPages,page + 1))}>Next</button>
    <button onClick={()=>setPage(totalPages)}>Last</button>
    
    </>
}