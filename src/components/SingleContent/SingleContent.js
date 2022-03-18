import { Badge } from "@mui/material";
import { img_300,unavailable } from "../../Config/Config";
import TransitionsModal from "../ComponentModel/TransitionsModal";
import './SingleContent.css';

const SingleContent = (
    {
        id,
        poster,
        title,
        date,
        media_type,
        vote_average
    }
) => {

    return (
        <TransitionsModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}>
            </Badge>
            <img className="poster" src={ poster ? `${img_300}/${poster}` : unavailable} alt ={title}/>
             <b className="title">{title}</b>
             <span> {media_type === 'tv' ? " TV Series" : "Movie"} </span>
             <span className="sunTitle">{date}</span>
             
        </TransitionsModal>
       
    );
}

export default SingleContent;