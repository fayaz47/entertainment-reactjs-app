import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import "./ContentModel.css"
import axios from 'axios';
import { img_500, unavailable } from '../../Config/Config';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Carousel from '../Carousel/Carousel';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const paper = {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
  };
export default function TransitionsModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const [content,setContent] = React.useState();
  const [video, setVideo] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const fetchData = async() => {
   const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
   setContent(data); 
};

  const fetchVideo = async() => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setVideo(data.results[0]?.key); 
};

React.useEffect( () =>
    {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
    },[]
)

  return (
    <>
      <div className="media" style= {{cursor : "pointer"}} color = "inherit" onClick={handleOpen}>{children}</div>
      <Modal className= {style}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

         {content && (
          <div className={paper}>
          <div className='ContentModal'>
          <img
          alt = {content.title || content.title}
          className = 'ContentModal__portrait'
          src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable } />

          <img
          alt = {content.title || content.title}
          className = 'ContentModal__landscape'
          src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailable } />
          
          <div className='ContentModal__about'>
            <span className='ContentModal__title'>
            {content.name || content.title} (
              { ( content.first_air_date || content.release_date || "----").substring(0,4) }
            )
            </span>
            {content.tagline && ( <i className='tagLine'> {content.tagLine} </i>)
            }
            <span className='ContentModal_description'>
              {content.overview}

            </span>

            <div><Carousel media_type={media_type} id={id} /> </div>

            <Button
             variant ="contained"
             startIcon={ <YouTubeIcon />}
             color= "secondary"
             target= "_blank"
             href= {`https://www.youtube.com/watch?v=${video}`}
             > Watch the Trailer </Button>
          </div>

         </div>
         </div>

        )}
        </Fade>
      </Modal>
    </>
  );
}
