import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../axios';
import requests from '../requests';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import image1 from './image/close.png';
import image2 from './image/the-65-title.png';
import image3 from './image/the-black-demon-title.png';
import image4 from './image/the-covenant-title.png';
import image5 from './image/the-little-mermaid-title.png';
import image6 from './image/the-tank-title.png';
import image7 from './slider/65.jpg';
import image8 from './slider/bg-65.jpeg';
import image9 from './slider/bg-little-mermaid.jpg';
import image10 from './slider/bg-the-black-demon.jpeg';
import image11 from './slider/bg-the-covenant.jpeg';
import image12 from './slider/bg-the-tank.jpeg';
import image13 from './slider/the-black-demon.jpg';
import image14 from './slider/the-covenant.jpg';
import image15 from './slider/the-little-mermaid.jpeg';
import image16 from './slider/the-tank.jpeg';
import video from './video/65.mp4';




function Banner() {
    const [movie, setMovie] = useState([]);
    const [backgroudData, imageChange] = useState(image5);
    const [trailerurl, setTrailerurl] = useState("");
    // function changeImageUrl(titleUrl) { 
    //     imageChange();
    // }

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;

        } fetchData();


    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    const handleClick = (movie) => {

        if (trailerurl) {
            setTrailerurl("");
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerurl(urlParams.get('v'));

                }).catch(error => console.log(error))
        }
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    // const backgroudData = {
    //     titleUrl: image5,
    //     titleText:'',
    //     ImageUrl: '',

    // };



    // const (backgroudData,setimage = useState(image4)

    // const changeBgUrl= (title)=>{
    //     console.log('This url is clicked');
    //     imageChange(image3);
    // }

    function changeBg(titleUrl, imageUrl) {
        // imageChange();
        // console.log('bg');
        // const banner = document.querySelector('.banner');

        // const contents = document.querySelectorAll('.content');
        // banner.style.background = `url("slider/${bg}")`;
        // banner.style.backgroundSize = 'cover';
        // banner.style.backgroundPosition = 'center';
        // contents.forEach(content => {
        //     content.classList.remove('active');
        //     if (content.classList.contains(title)) {
        //         content.classList.add('active');
        //     }
        // });
    };
    const data = [
        {
            id: '1',
            image: image2,
            bgImg: image8,
        },
        {
            id: '2',
            image: image3,
            bgImg: image9,
        },
        {
            id: '3',
            image: image4,
            bgImg: image10,
        },
        {
            id: '4',
            image: image5,
            bgImg: image11,
        },
        {
            id: '5',
            image: image6,
            bgImg: image12,
        },

    ];
    const [toggled, setToggled] = useState()



    return (


        <div >
            <div className='header'>
                <a href="#" class="logo">Movies</a>
                <ul class="nav">
                    <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
                    <li><a href="#">Adults</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Trend</a></li>
                    <li><a href="#">My List</a></li>

                </ul>
                <div class="search">
                    <input type="text" placeholder="search"></input>
                    <i class="fa-solid fa-magnifying-glass"></i>

                </div>

            </div>
            <div class="banner">
                {/* {
                    data.map(({ image, bgimage, id }) => {
                        return (
                            <>
                                {toggled === id ? (



                                    <img src={image} alt=" " className="img"></img>



                                ) : null}

                            </>
                        )
                    })
                } */}
                <div class="content the-little-mermaid active">

                    <img src={image5} class="movie-title" ></img>
                    {/* <h4>
                            <span>2023</span><span><i>12+</i></span>
                            <span>2h 16min</span><span>Romance</span>
                        </h4> */}
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div class="button">
                        <a href="#"><i class="fa-solid fa-play"></i>Watch</a>
                        <a href="#"><i class="fa-solid fa-plus"></i>My List</a>

                    </div>

                </div>
                <div class="content bg-65">
                    <img src={image2} class="movie-title" alt="Movie Name"></img>
                    <h4>
                        <span>2023</span>
                        <span><i>15+</i></span>
                        <span>2h 5min</span>
                        <span>Action</span>
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div class="button">
                        <a href="#"><i class="fa-solid fa-play"></i>Watch</a>
                        <a href="#"><i class="fa-solid fa-plus"></i>My List</a>

                    </div>

                </div>
                <div class="content the-covenant">
                    <img src={image4} class="movie-title" alt="Movie Name"></img>
                    <h4>
                        <span>2023</span>
                        <span><i>10+</i></span>
                        <span>1h 50min</span>
                        <span>War/action</span>
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div class="button">
                        <a href="#"><i class="fa-solid fa-play"></i>Watch</a>
                        <a href="#"><i class="fa-solid fa-plus"></i>My List</a>

                    </div>

                </div>

                <div class="content the-black-demo">
                    <img src={image3} class="movie-title" alt="Movie Name"></img>
                    <h4>
                        <span>2023</span>
                        <span><i>12+</i></span>
                        <span>2h 20min</span>
                        <span>Thriller</span>
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div class="button">
                        <a href="#"><i class="fa-solid fa-play"></i>Watch</a>
                        <a href="#"><i class="fa-solid fa-plus"></i>My List</a>

                    </div>

                </div>
                <div class="content the-tank">
                    <img src={image5} class="movie-title" alt="Movie Name"></img>
                    <h4>
                        <span>2023</span>
                        <span><i>11+</i></span>
                        <span>2h 00min</span>
                        <span>Horror</span>
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div class="button">
                        <a href="#"><i class="fa-solid fa-play"></i>Watch</a>
                        <a href="#"><i class="fa-solid fa-plus"></i>My List</a>

                    </div>

                </div>
                <div class="carousel-box">
                    <div class="carousel">
                    <div class="carousel-item" onClick="changeBg('bg-little-mermaid.jpg', 'the-little-mermaid');">
                    <img src={image15} alt=""/>

                </div>
                <div class="carousel-item" onClick="changeBg('bg-65.jpeg', 'bg-65');">
                    <img src={image7} alt=""/>

                </div>
                <div class="carousel-item" onClick="changeBg('bg-the-covenant.jpeg', 'the-covenant');">
                    <img src={image14} alt=""/>

                </div>
                <div class="carousel-item" onClick="changeBg('bg-the-black-demon.jpeg', 'the-black-demo');">
                    <img src={image13} alt=""/>

                </div>
                <div class="carousel-item" onClick="changeBg('bg-the-tank.jpeg', 'the-tank');">
                    <img src={image16} alt=""/>

                </div>
                    </div>
                </div>
                <a href="#" class="play" onClick={{}
                    // toggleVideo()
                }><i class="fa-sharp fa-regular fa-circle-play"></i>Watch Trailer</a>
                <ul class="sci">
                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>


                </ul>



            </div>
            <div class="trailer">
                <video src={video} muted controls="true" autoplay="true"></video>
                <img class="close" src={image1} alt="
        " onClick={
                        {}
                        // toggleVideo()
                    } />

            </div>

        </div>
    )
}

export default Banner
