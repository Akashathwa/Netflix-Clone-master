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
            className: 'active',
            image: image15,
            name: 'Shahryar',
            movieTitle: 'Movie Title 2',
            year: '2023',
            ageRating: '15+',
            duration: '2h 5min',
            genre: 'Action',
            description: 'Lorem Ipsum is simply dummy text...',
            movieTitleimage: image5,
            bgImg: image8,
        },
        {
            id: '2',
            className: '',
            image: image7,
            name: 'Akash',
            movieTitle: 'Movie Title 1',
            year: '2023',
            ageRating: '12+',
            duration: '2h 16min',
            genre: 'Romance',
            description: 'Lorem Ipsum is simply dummy text...',
            movieTitleimage: image2,
            bgImg: image9,
        },
        {
            id: '3',
            className: '',
            image: image14,
            name: 'Ahmed',
            movieTitle: 'Movie Title 3',
            year: '2023',
            ageRating: '10+',
            duration: '1h 50min',
            genre: 'War/action',
            movieTitleimage: image4,
            bgImg: image10,
        },
        {
            id: '4',
            className: '',
            image: image13,
            name: 'Afaq',
            movieTitle: 'Movie Title 4',
            year: '2023',
            ageRating: '12+',
            duration: '2h 20min',
            genre: 'Thriller',
            description: 'Lorem Ipsum is simply dummy text...',
            movieTitleimage: image3,
            bgImg: image11,
        },
        {
            id: '5',
            className: '',
            image: image16,
            name: 'Abdul rafay',
            movieTitle: 'Movie Title 5',
            year: '2023',
            ageRating: '11+',
            duration: '2h 00min',
            genre: 'Horror',
            description: 'Lorem Ipsum is simply dummy text...',
            movieTitleimage: image6,
            bgImg: image12,
        },

    ];
    const [toggled, setToggled] = useState()



    return (


        <div >
            {/* <div className='header'>
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

            </div> */}
            <div class="banner">

                <div>
                    {data.map((item, index) => (
                        <div key={index} className={`content ${item.className}`}>
                            <img src={item.movieTitleimage} className="movie-title" alt="Movie Title" />
                            <h4>
                                <span>{item.year}</span>
                                <span><i>{item.ageRating}</i></span>
                                <span>{item.duration}</span>
                                <span>{item.genre}</span>
                            </h4>
                            <p>{item.description}</p>
                            <div className="button">
                                <a href="#"><i className="fa-solid fa-play"></i>Watch</a>
                                <a href="#"><i className="fa-solid fa-plus"></i>My List</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="carousel-box">
                    <div class="carousel">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="carousel-item"
                                onClick={() => {
                                    console.log(item.name);
                                    // return changeBg(item.image, item.name);
                                }}
                            >
                                <img src={item.image} alt="" />
                            </div>
                        ))}
                        {/* <div class="carousel-item" onClick="changeBg('bg-little-mermaid.jpg', 'the-little-mermaid');">
                            <img src={image15} alt="" />
                        </div>
                        <div class="carousel-item" onClick="changeBg('bg-65.jpeg', 'bg-65');">
                            <img src={image7} alt="" />

                        </div>
                        <div class="carousel-item" onClick="changeBg('bg-the-covenant.jpeg', 'the-covenant');">
                            <img src={image14} alt="" />

                        </div>
                        <div class="carousel-item" onClick="changeBg('bg-the-black-demon.jpeg', 'the-black-demo');">
                            <img src={image13} alt="" />

                        </div>
                        <div class="carousel-item" onClick="changeBg('bg-the-tank.jpeg', 'the-tank');">
                            <img src={image16} alt="" />

                        </div> */}
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
