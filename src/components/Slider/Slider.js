import React, { useState, useEffect } from 'react'
import { StyledSlider, StyledLine } from "./style";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import api from '../../api';
import '@splidejs/react-splide/css';
import defaultImg from '../../images/defaultImg.jpg';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Slider({ index, movies, title, height, isUncompleted, custom, top, youtubeShow, setYoutubeShow }) {
    const [movieId, setMovieId] = useState();
    const [playing, setPlaying] = useState(false);
    const [slideIndex, setSlideIndex] = useState(null);

    useEffect(() => {
        console.log(playing);

        if (playing) {
            setYoutubeShow(youtubeShow.map((el, i) => {
                if (i == index && index != 0) {
                    return 1;
                }
                else {
                    return 0;
                }
            }))
        }
        else{
        setYoutubeShow([0, 0, 0, 0, 0, 0]);
        }
    }, [playing]);
    function youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    function getMovieTrailer(videoName, index) {
        if (slideIndex == index) {
            setPlaying(!playing);
            console.log('eyni');
        }
        else {
            setPlaying(true);
            console.log('fetr');
        }
        setSlideIndex(index);
        movieTrailer(videoName).then((res) => {
            setMovieId(youtube_parser(res));
        });
    }
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <StyledSlider sliderHeight={height}>
            <h2 className='title'>{title}</h2>
            <Splide className={custom && 'custom'} aria-label="My Favorite Images"
                options={{
                    type: 'loop',
                    perPage: 5,
                    drag: 'free',
                    gap: '5px',
                    pagination: false
                }}>
                {movies.map((movie, index) => {
                    let randomId = Math.floor(Math.random() * 100);
                    return (
                        <SplideSlide key={movie.id} className={top && 'top'}>
                            {top && <h2 className='topNumber'>{index + 1}</h2>}
                            <img onClick={() => getMovieTrailer(movie.original_title, index)} src={movie.backdrop_path ? `${api.posterPath}/${movie.backdrop_path}` : defaultImg} alt={movie.original_title} />
                            {isUncompleted && <StyledLine randomWidth={randomId}></StyledLine>}
                        </SplideSlide>
                    )
                })}

            </Splide>
            {youtubeShow[index] ? <YouTube videoId={movieId} opts={opts} /> : ''}


        </StyledSlider>
    )
}

export default Slider