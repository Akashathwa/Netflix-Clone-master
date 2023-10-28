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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
