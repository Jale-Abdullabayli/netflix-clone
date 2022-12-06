import React, { useEffect, useState } from 'react'
import { StyledMain } from "./style";
import api from '../../api';
import axios from 'axios';
import Slider from '../Slider/Slider';

function Main({youtubeShow,setYoutubeShow}) {
    console.log(youtubeShow);

    const [uncompletedMovies, setUncompletedMovies] = useState([]);
    const [completedMovies, setCompletedMovies] = useState([]);
    const [trends, setTrends] = useState([]);
    const [netflixMovies, setNetflixMovies] = useState([]);
    const [list, setList] = useState([]);
    const [top10Movies, setTop10Movies] = useState([]);

    async function getUncompletedMovies() {
        const res = await axios.get(`${api.baseURL}movie/upcoming?api_key=${api.apiKey}`);
        setUncompletedMovies(res.data.results);
    }


    async function getTrendMovies() {
        const res = await axios.get(`${api.baseURL}movie/now_playing?api_key=${api.apiKey}`);
        setTrends(res.data.results);
    }

    async function getNeftlixMovies() {
        const res = await axios.get(`${api.baseURL}movie/top_rated?api_key=${api.apiKey}`);
        setNetflixMovies(res.data.results);
    }

    async function getList() {
        const res = await axios.get(`${api.baseURL}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${api.apiKey}`);
        setList(res.data.results);
    }

    async function getCompletedMovies() {
        const res = await axios.get(`${api.baseURL}discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${api.apiKey}`);
        setCompletedMovies(res.data.results);
    }
    async function getTop10Movies() {
        const res = await axios.get(`${api.baseURL}discover/movie?with_genres=18&primary_release_year=2014&api_key=${api.apiKey}`);
        setTop10Movies(res.data.results.filter((el, i) => {
            return i < 9;
        }))
    }
    useEffect(() => {
        getUncompletedMovies();
        getTrendMovies();
        getNeftlixMovies();
        getList();
        getCompletedMovies();
        getTop10Movies();
    }, []);
    return (
        <StyledMain>
            <Slider index={1}  setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={uncompletedMovies} title="İzlemeye Devam Et" isUncompleted={true} height='160' />
            <Slider index={2} setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={trends} title="Gündemdekiler" height='160' />
            <Slider index={3} setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={netflixMovies} title="Netflix Orijinal İçerikleri" height='575' />
            <Slider index={4} setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={top10Movies} top={true} title="Türkiye'de Bugünün Top 10 Listesi" height='205' />
            <Slider index={5} setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={completedMovies} custom={true} title="Yeniden İzle" height='160' />
            <Slider index={6} setYoutubeShow={setYoutubeShow} youtubeShow={youtubeShow} movies={list} title="Listem" height='160' />
        </StyledMain>
    )
}

export default Main