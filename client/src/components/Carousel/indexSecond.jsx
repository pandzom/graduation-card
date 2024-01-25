import SOne from "../../assets/party1.png"
import SFour from "../../assets/newOne.jpg"
import SThree from "../../assets/newTwo.jpg"
import STwo from "../../assets/newThree.jpg"
import SFive from "../../assets/newFour.jpg"
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
        },
        {
            url: STwo,
        },
        {
            url: SThree,
        },
        {
            url: SFour,
        },
        {
            url: SFive,
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
        <div className='h-full w-full relative group flex justify-center'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-[200vh] mt-3 lg:mt-0 h-[450px] bg-no-repeat bg-center bg-auto duration-1000 rounded'>
                <div className='pt-26 mt-32 lg:mt-12 xl:pt-32'>
                    <div className="bg-black bg-opacity-80 lg:w-[120vh] lg:ml-[45vh] rounded-lg">
                    <h1 className="text-5xl xl:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-center">{slides[currentIndex].heading}</h1>
                    </div>
                    
                    <div className="lg:w-[80vh] lg:ml-[64vh] bg-black bg-opacity-30 rounded-lg">
                        <p className="text-2xl xl:text-3xl  text-white text-center">{slides[currentIndex].text}</p>
                    </div>
            
                </div>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-10%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-10%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ml-[10vh]'>
            <FontAwesomeIcon 
            className=""
            icon={faArrowRight}  
            onClick={nextSlide} 
            size={50} />
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