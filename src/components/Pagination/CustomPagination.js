import { Pagination } from "@mui/material";

const CustomPagination = ({setPage,numberOfPages = 10}) => {
    const handleChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    };
    return (
        <div 
         style = {{
             width : "100%",
             display: "flex",
             justifyContent : "center",
             marginTop: 10
         }}
        >
         <Pagination count = {numberOfPages} 
         onChange={(e) => handleChange(e.target.textContent)} 
         hideNextButton
         hidePrevButton />

        </div>
     
    );
};

export default CustomPagination;