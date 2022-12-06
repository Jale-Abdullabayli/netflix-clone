import React, { useEffect, useState } from 'react'
import { StyledBanner } from "./style";
import axios from 'axios';
import api from '../../api';
import play from '../../images/play.png';
import info from '../../images/info.png';
import Slider from '../Slider/Slider';


function Banner({youtubeShow,setYoutubeShow}) {

    const [bannerMovie, setBannerMovie] = useState({});
    const [popularMovies, setPopularMovies] = useState([]);
    let randomId;


    async function getBannerMovie() {
        randomId = Math.floor(Math.random() * 1000);
        const randomMovie = await axios.get(`${api.baseURL}/movie/${randomId}?api_key=${api.apiKey}`);
        setBannerMovie(randomMovie.data);
    }

    async function getPopularMovies() {
        const res = await axios.get(`${api.baseURL}discover/movie?sort_by=popularity.desc&api_key=${api.apiKey}`);
        setPopularMovies(res.data.results);
    }

    useEffect(() => {
        getBannerMovie();
        getPopularMovies();
    }, []);
    return (
        <StyledBanner bgImg={`${api.posterPath}/${bannerMovie.backdrop_path}`}>
            <div className='content'>
                <h1 className='name'>{bannerMovie.original_title}</h1>
                <p className='overview'>{bannerMovie.overview}</p>
                <div className='btns'>
                    <button className='play'>
                        <img src={play} alt='play' />
                        <span>Oynat</span>
                    </button>
                    <button className='info'>
                        <img src={info} alt='info' />
                        <span>Daha Fazla Bilgi</span>
                    </button>
                </div>
            </div>
            <Slider index={0} setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={popularMovies} title="Netflix'te Popüler" height='160' />
        </StyledBanner>
    )
}

export default Banner