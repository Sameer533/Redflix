import React from 'react'
import Banner from './components/Banner';
import Nav from './components/Nav';
import "./homeScreen.css";
import requests from './Request';
import Row from './components/Row';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>

    {/* nav */}
    <Nav/>

    <Banner/>
   
    <Row 
      title = "REDFLIX ORIGINALS"
      fetchUrl = {requests.fetchNetflixOriginals}
      islargeRow 
    />
    <Row 
      title = "Trending Now"
      fetchUrl = {requests.fetchTrending}
      
    />
<Row 
      title = "Top Rated "
      fetchUrl = {requests.fetchTopRated}
      
    />
<Row 
      title = "Action Movies"
      fetchUrl = {requests.fetchActionMovies}
      
    />
<Row 
      title = "Comedy Movies"
      fetchUrl = {requests.fetchComedyMovies}
      
    />
<Row 
      title = "Horror Movies"
      fetchUrl = {requests.fetchHorrorMovies}
      islargeRow
    />
<Row 
      title = "Romanace Movies"
      fetchUrl = {requests.fetchRomanceMovies}
      
    />

<Row 
      title = "Documentaries"
      fetchUrl = {requests.fetchDocumentaries}
      islargeRow
    />


    </div>
  )
}

export default HomeScreen