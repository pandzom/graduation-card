import SOne from "../../assets/LoginBG.jpg"
import STwo from "../../assets/meeting.jpg"
import SThree from "../../assets/backgroundMain.jpg"
import SFour from "../../assets/sport.jpg"
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
            button: "Visit",
            href: "/wedding-venues",
        },
        {
            url: STwo,
            heading: "MEETING VENUES",
            text: "Book your ideal spot for a meeting",
            button: "Visit",
            href: "/meeting-venues",
        },
        {
            url: SThree,
            heading: "PARTY VENUES",
            text: "Top places for a party",
            button: "Visit",
            href: "/party-venues",
        },
        {
            url: SFour,
            heading: "SPORT FACILITIES",
            text: "Indoor or outdoor sports facilities",
            button: "Visit",
            href: "/sport-venues",
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
                    <a href={slides[currentIndex].href} className="text-white bg-black hover:duration-700 dark:focus:ring-orange-600 shadow-lg shadow-orange-700 dark:shadow-lg dark:shadow-aycolor font-medium rounded-lg text-sm px-10 py-5 text-center">
                            {slides[currentIndex].button}
                        </a>
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