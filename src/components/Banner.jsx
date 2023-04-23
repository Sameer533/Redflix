import React, { useState, useEffect } from "react";
import requests from "../Request";
import "./banner.css";
import axios from "axios";
import Detailpage from "./Detailpage";

const Banner = () => {
  const [movie, setmovie] = useState([]);
  const [modal, showmodal] = useState(false);
  const [moviename, setmoviename] = useState("");
  const [movieoverview, setmovieoverview] = useState("");
  const [movieimage, setmovieimage] = useState("");
   const closemodal = () => showmodal(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + requests.fetchActionMovies
      );
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
    window.clearInterval();
  }, []);

  const trancuteString = (string, n) => {
    //return string?.length > n ? string.substr( 0 , n-1) +"....":string;
    return string;
  };
  if (movie) {
    return (
      <div
        className="bannerCss"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie.original_name || movie.name || movie.title}
          </h1>
          <div className="banner_buttons">
            <button
              className="banner_button"
              onClick={() => {
                setmoviename(movie.original_name || movie.name || movie.title);
                setmovieoverview(movie.overview);
                setmovieimage(movie.backdrop_path);
                showmodal(true);
              }}
            >
              Play
            </button>
            {modal && <Detailpage closemodal = {closemodal} 
                  moviename = {moviename}
                  movieoverview  = {movieoverview} 
                  movieimage = {movieimage}
                  movieid= {movie.id}
                  />}
            {/* <button className="banner_button">My List</button> */}
          </div>
          <h1 className="banner_desc">{trancuteString(movie.overview, 150)}</h1>
        </div>
        <div className="banner_fadeBottom"></div>
      </div>
    );
  }
};

export default Banner;
