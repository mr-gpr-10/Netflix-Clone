import React,{useEffect, useState} from 'react'
import requests from './requests';
import axios from './axios';
import './Banner.css';

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);           
            return request;
        }
        fetchData();
    },[]);
    // console.log(movie);

    // to truncate the description to a fixed number of characters
    function truncate(str,n){
        // ? is used to find whether it exists
        return str?.length>n ? str.substr(0,n-1) + "..." : str;
    }


  return (
    <div>
      <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        // this center it
        backgroundPosition: "center center",
      }}>

        <div className="banner_contents">
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My Lists</button>
            </div>

            <h1 className="banner_descriptions">
                {truncate(movie?.overview,150)}
            </h1>
        </div>


        {/* background image */}
        {/* title */}
        {/* div 2 buttons  */}
        {/* descriptions */}

        <div className="banner--fadeBottom">

        </div>

      </header>
    </div>
  )
}

export default Banner
