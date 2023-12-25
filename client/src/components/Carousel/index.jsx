import SOne from "../../assets/LoginBG.jpg"
import STwo from "../../assets/meeting.jpg"
import SThree from "../../assets/backgroundMain.jpg"
import SFour from "../../assets/sport.jpg"
import SFive from "../../assets/conference.jpg"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
} from "@fortawesome/free-solid-svg-icons";


function Carousel() {
    const slides = [
        {
            url: SOne,
            heading: "WEDDING VENUES",
            text: "Top Affordable Wedding Venues.",
            button: "Visit"
        },
        {
            url: STwo,
            heading: "MEETING VENUES",
            text: "Book your ideal spot for meeting",
            button: "Visit"
        },
        {
            url: SThree,
            heading: "PARTY VENUES",
            text: "Top places for party",
            button: "Visit"
        },
        {
            url: SFour,
            heading: "SPORT FACILLITIES",
            text: "Indoor or outdoor sports facilities ",
            button: "Visit"
        },
        {
            url: SFive,
            heading: "CONFERENCE ROOMS",
            text: "Many hotels, business centers, and co-working spaces.",
            button: "Visit"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    return (
        <div className='h-[550px] w-full relative group flex justify-center mt-10'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-[800px] mt-5 h-[500px] bg-center bg-cover duration-1000 rounded shadow-sm shadow-orange-400'>
                <div className='pt-26 xl:pt-32'>
                    <h1 className="text-5xl xl:text-7xl font-bold mb-2 text-orange-400 text-center">{slides[currentIndex].heading}</h1>
                    <p className="text-2xl xl:text-3xl  text-white text-center mt-8">{slides[currentIndex].text}</p>
                    <div className='flex justify-center mt-8'>
                    <button type="button" class="font-aycfont text-white bg-black hover:duration-700 dark:focus:ring-aycolor shadow-lg shadow-aycolor dark:shadow-lg dark:shadow-aycolor font-medium rounded-lg text-sm px-10 py-5 text-center">{slides[currentIndex].button}</button>
                    </div>
                </div>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ml-[300px]'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer mr-[300px]'>
            <FontAwesomeIcon icon={faArrowRight}  onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel