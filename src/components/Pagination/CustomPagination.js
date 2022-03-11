import { Pagination } from "@mui/material";

const CustomPagination = ({setPage,numberOfpages = 10}) => {
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
         <Pagination count = {numberOfpages} 
         onChange={(e) => handleChange(e.target.textContent)} />

        </div>
     
    );
};

export default CustomPagination;