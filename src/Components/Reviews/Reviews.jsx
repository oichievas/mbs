import cls from './Reviews.module.scss'
import BetweenTitle from '../BetweenTitle/BetweenTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import SingleReview from '../SingleReview/SingleReview';
import 'swiper/css';
import "swiper/css/navigation"
import { useState } from 'react';
import useWindowDimensions from '../getWindowFunc/useWindowDimension';
import { useSelector } from 'react-redux'

SwiperCore.use([Navigation])

const Reviews = () => {

    const {selectedLang: {reviews}} = useSelector(s => s.lang)

    const [currentSlide, setCurrentSlide] = useState('')
    const [slidesNumber, setSlidesNumber] = useState('')
    const {width} = useWindowDimensions()
    const slides = []

    if(width >= 888){
        for(let i = 0; i < 2; i++){
            slides.push(
                <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide} virtualIndex={i}>
                    <div className={cls.inlineSlide}>
                        <SingleReview/>
                        <SingleReview/>
                    </div>
                    <div className={cls.inlineSlide}>
                        <SingleReview/>
                        <SingleReview/>
                    </div>
                </SwiperSlide>
            )
        }
    }else if(width >= 600){
        for(let i = 0; i < 4; i++){
            slides.push(
                <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide} virtualIndex={i}>
                    <div className={cls.inlineSlide}>
                        <SingleReview/>
                        <SingleReview/>
                    </div>
                </SwiperSlide>
            )
        }
    }else{
        for(let i = 0; i < 8; i++){
            slides.push(
                <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide} virtualIndex={i}>
                    <div className={cls.inlineSlide}>
                        <SingleReview/>
                    </div>
                </SwiperSlide>
            )
        }
    }

    return (
        <div className={cls.root}>
            <BetweenTitle content={reviews.title} color="white"/>
            <p className={cls.bottomTitle}>{reviews.reviewsText}</p>
            <div className={cls.exampleReview}>
                <p>4.5/5</p>
                <ul>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/star.png" alt="star"/></li>
                    <li><img src="/img/halfstar.png" alt="star"/></li>
                </ul>
                <p>(13)</p> 
            </div>
            <Swiper id={cls.main} className={cls.swiper} navigation={true} onInit={e => {
                setCurrentSlide(e.realIndex + 1)
                setSlidesNumber(e.slides.length)
            }} onSlideChange={e => setCurrentSlide(e.realIndex + 1)}>
                {slides}
            </Swiper>
            {width <= 768 ? (
                <div className={cls.currentSlides}>{currentSlide} of {slidesNumber}</div>
            ) : ''}
        </div>
    )
}

export default Reviews