import React, { useEffect, useState } from "react";
import "./Detailpage.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { BsPlayCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import BeatLoader from "react-spinners/BeatLoader";

import axios from "axios";

const Detailpage = ({
  closemodal,
  moviename,
  movieoverview,
  movieimage,
  movieid,
}) => {



  const [trailer, setTrailer] = useState();
  const API_KEY = "02becafbf86d482887348609132187e5";

  const base_url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&append_to_response=videos`;
  
  const fetchdata = async () => {
    console.log(movieid);
    const request = await axios.get(base_url).catch(function(error) {
      console.log(error);
    });
    console.log(request);


    if (request  && request.data.videos && request.data.videos.results.length > 0) {
      const result = request.data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      
      setTrailer(result ? result.key : request.data.videos.results[0].key);
      setplay(true);
      
      
    }else{
     alert("video unavailable");
    }

    // console.log(request.data.videos.results[0]);
    return request;
  };

  const [playvideo, setplay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect( () =>{
      const handle = setTimeout(()=>{
        setLoading(false);
      },3000);
  },[] );
  var movieName = moviename;
   
  const url = `https://image.tmdb.org/t/p/original/${movieimage} `;
  return (
    <>
      <div className="detailpage_wrapper">
      
        { playvideo ?  (
          <div className={`detailpage_youtube ${!playvideo && "detailpage_youtubed" }`} >

           

          <div className="loadercss">
           <BeatLoader color="white" loading = {loading}/>
          </div>
          
            <iframe
             
              src={`https://www.youtube.com/embed/${trailer}?&autoplay=1`}
              title={moviename}
              frameborder="0"
              allow = "autoplay" 
             
              allowFullScreen
            ></iframe>
             <IconContext.Provider value={{ className: "react_icons_back_iframe" }}>
        <button onClick={closemodal} className="detailpage_back_iframe">
              <IoArrowBackCircleSharp size={40} />
            </button>
            </IconContext.Provider>
          </div>
          ): (
        <div
          className="detailpage"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieimage}")`,
          }}
        >
          <div className={`detailpage_fadeBottom ${playvideo && "detailpage_fadeBottomd"}`}></div>
          <IconContext.Provider value={{ className: "react_icons_back" }}>
            <button onClick={closemodal} className="detailpage_back">
              <IoArrowBackCircleSharp size={40} />
            </button>
          </IconContext.Provider>
         

           

            <IconContext.Provider value={{ className: "react_icons" }}>
              <div className={`detailpage_play ${playvideo && "detailpage_playd"}`} onClick={ () =>{
                fetchdata();
                }}>
                <BsPlayCircleFill size={70} />
              </div>
            </IconContext.Provider>

            <div className="detailpage_contents">
     
            <h1 className="detailpage_title" style={{ "fontSize": '5rem', "fontWeight": '800'}}>{movieName}</h1>
            {/* <div className="detailpage_buttons">
            <button
              className="detailpage_button" >
              Play
            </button> */}

            {/* </div> */}
            <h1 className="detailpage_desc" style={{ "fontSize": '1.5rem', 
            "paddingTop" : '0.5rem' , "maxWidth":  '50rem',  "lineHeight": '1.3' }}>{movieoverview}</h1>
          </div>
         
        </div>
        )}
        {/* <h1 className='detailpage_name'>{moviename }</h1>
      <img src  = {url}   alt={moviename} className='detailpage_image'/>

      <p>{movieoverview}</p>
      <button onClick={closemodal}>click me</button> */}
      </div>
   
    </>
  );
};

export default Detailpage;
