import  axios  from "axios";
import {useState, useEffect} from "react";
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from "../../components/Pagination/CustomPagination";
const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState();
    const fetchMovies = async () => {
     const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
     setContent(data.results);
     setNumberOfPages(data.total_pages);
    }

    useEffect( () => {
        fetchMovies();
        
    },[page])
    return (
        <div>
             <span className="pageTitle" > Movies </span>
        
            <div className="trending">
                {
                    content && content.map((c) => <SingleContent
                        key={c.id} id={c.id} poster={c.poster_path} tilte={c.title || c.name}
                        data={c.first_air_data || c.release_date} media_type='movies' 
                         vote_average = { c.vote_average}/>)
                }
            </div>
            {numberOfPages > 1 && 
            <CustomPagination setPage={setPage} numberOfPages= {numberOfPages} />
            } 
        </div>
    )
}

export default Movies;