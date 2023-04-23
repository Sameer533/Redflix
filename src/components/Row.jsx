import axios from "axios";
import React, { useEffect, useState } from "react";
import "./row.css";
import Detailpage from "./Detailpage";
const Row = ({ title, fetchUrl, isLargeRow }) => {
 
 
  const [movies, setmovies] = useState([]);
  const [movieid , setmovieid] = useState("");
  const [modal, showmodal] = useState(false);
  const [moviename , setmoviename] = useState("");
  const [movieoverview , setmovieoverview] = useState("");
  const [movieimage , setmovieimage] = useState("");


  const base_url = "https://api.themoviedb.org/3";
  const base_urlPath = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(base_url + fetchUrl);
      setmovies(request.data.results);
      // console.log(request);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);

  const closemodal = () => showmodal(false);

  return (
    <>
      <div className="row">
        <h1>{title}</h1>

        <div className="rowposterclass">
          {movies.map((movie) => {
            if (movie.backdrop_path || movie.poster_path) {
             // console.log(movie);
              return (
                <>
         
                  <img
                    key={movie.id}
                    className={`rowposter ${isLargeRow && "row_posterlarg"}`}
                    src={`${base_urlPath}${
                      isLargeRow ? movie.backdrop_path : movie.poster_path
                    }`}
                    alt={movie.name}
                    onClick={() => {
                      setmoviename(movie.original_name || movie.name||movie.title);
                      setmovieoverview(movie.overview);
                      setmovieimage(movie.backdrop_path);
                      setmovieid(movie.id)
                      showmodal(true)
                      }}
                  />
                  
                  {modal && <Detailpage closemodal = {closemodal} 
                  moviename = {`${moviename}`}
                  movieoverview  = {movieoverview} 
                  movieimage = {movieimage}
                  movieid = {movieid}
                  />}
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
export default Row;
