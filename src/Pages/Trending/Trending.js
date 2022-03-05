import axios  from "axios";
import { useState, useEffect } from "react";
import SingleContent from '../../components/SingleContent/SingleContent';
import dotenv from 'dotenv';
const Trending = () => {
    dotenv.config();
    console.log(process.env.REACT_APP_METEORITE_STRIKE_DATASET);
    const [content, setContent] = useState([]);
    const fetchTrending = async () => {
      await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`).then((response) => {
            setContent(response.data);
            console.log("API WAS CALLED with axios");
          });
    //    console.log(data.data.results.json());
      //  setContent(data.data.results.json());
    };
    useEffect(
        () => {
         fetchTrending();
        }, []
    );
    return (

        <div>
            <span className="pageTitle" > Trending </span>
            <div className="trending">
                {
                    content && content.map((c) => <SingleContent
                        key={c.id} id={c.id} poster={c.poster_path} tilte={c.title || c.name}
                        data={c.first_air_data || c.release_date} media_type={c.media_type} 
                         vote_average = { c.vote_average}/>)
                }
            </div>
        </div>

    )

}
export default Trending;