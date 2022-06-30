import Title from '../../Components/Title/Title'
import cls from './Prices.module.scss'
import PriceBlock from '../../Components/PriceBlock/PriceBlock'
import Form from '../../Components/Form/Form'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation} from 'swiper'
import 'swiper/css';
import "swiper/css/navigation"
import { useEffect, useState } from 'react';
import useWindowDimensions from '../../Components/getWindowFunc/useWindowDimension';
import BetweenTitle from '../../Components/BetweenTitle/BetweenTitle'

const Prices = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { width } = useWindowDimensions()
    const [currentSlide1, setCurrentSlide1] = useState('')
    const [slidesNumber1, setSlidesNumber1] = useState('')
    const slides1 = []

    const [currentSlide2, setCurrentSlide2] = useState('')
    const [slidesNumber2, setSlidesNumber2] = useState('')
    const slides2 = []

    const [currentSlide3, setCurrentSlide3] = useState('')
    const [slidesNumber3, setSlidesNumber3] = useState('')
    const slides3 = []

    if(width <= 768){
        for(let i = 0; i < 3; i++){
            slides1.push(
                <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide} virtualIndex={i}>
                    <PriceBlock content={{
                        list1: {
                            title: "Animation Roller",
                            price: `${100 * (i + 1)}`,
                            desc: "Great for any kind of business!",
                            item1: `Only ${(i + 1)} page`,
                            item2: "We will do everything quality",
                            item3: "Fast!"
                        }
                    }}/>
                </SwiperSlide>
            )
            slides2.push(
                <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide} virtualIndex={i}>
                    <PriceBlock content={{
                        list1: {
                            title: "Animation Roller",
                            price: `${100 * (i + 1)}`,
                            desc: "Great for any kind of business!",
                            item1: `Only ${(i + 1)} page`,
                            item2: "We will do everything quality",
                            item3: "Fast!"
                        }
                    }}/>
                </SwiperSlide>
            )
            slides3.push(
                <SwiperSlide key={`slide-${i}`} className={cls.swiperSlide} virtualIndex={i}>
                    <PriceBlock content={{
                        list1: {
                            title: "Animation Roller",
                            price: `${100 * (i + 1)}`,
                            desc: "Great for any kind of business!",
                            item1: `Only ${(i + 1)} page`,
                            item2: "We will do everything quality",
                            item3: "Fast!"
                        }
                    }}/>
                </SwiperSlide>
            )
        }
    }

    return (
        <div className={cls.root}>
            <section className={cls.header} style={{background: "url('/img/prices_bg.jpg') center / cover"}}>
                <Title redText="Our" text1="prices" littleText="Our company offers you good prices."/>
            </section>
            {width <= 768 ? (
                <>
                    <section className={cls.prices}>
                        <BetweenTitle color="white" content="Web Develop"/>
                        <Swiper id={cls.main} className={cls.swiper} navigation={true} onInit={e => {
                            setCurrentSlide1(e.realIndex + 1)
                            setSlidesNumber1(e.slides.length)
                        }} onSlideChange={e => setCurrentSlide1(e.realIndex + 1)}>
                            {slides1}
                        </Swiper>
                        <div className={cls.currentSlides}>{currentSlide1} of {slidesNumber1}</div>
                    </section>
                    <section className={cls.prices}>
                        <BetweenTitle color="white" content="Web Develop"/>
                        <Swiper id={cls.main} className={cls.swiper} navigation={true} onInit={e => {
                            setCurrentSlide2(e.realIndex + 1)
                            setSlidesNumber2(e.slides.length)
                        }} onSlideChange={e => setCurrentSlide2(e.realIndex + 1)}>
                            {slides2}
                        </Swiper>
                        <div className={cls.currentSlides}>{currentSlide2} of {slidesNumber2}</div>
                    </section>
                    <section className={cls.prices}>
                        <BetweenTitle color="white" content="Web Develop"/>
                        <Swiper id={cls.main} className={cls.swiper} navigation={true} onInit={e => {
                            setCurrentSlide3(e.realIndex + 1)
                            setSlidesNumber3(e.slides.length)
                        }} onSlideChange={e => setCurrentSlide3(e.realIndex + 1)}>
                            {slides3}
                        </Swiper>
                        <div className={cls.currentSlides}>{currentSlide3} of {slidesNumber3}</div>
                    </section>
                </>
            ) : (
                <section className={cls.prices}>
                    <PriceBlock title="Web Develop" content={{
                        list1: {
                            title: "Landing Page",
                            price: "100",
                            desc: "Great for business!",
                            item1: "Only 1 page",
                            item2: "We will do everything quality",
                            item3: "Fast!"
                        },
                        list2: {
                            title: "Corporative",
                            price: "250",
                            desc: "Great for business!",
                            item1: "How much do you want",
                            item2: "We will do website with design",
                            item3: "Fast!"
                        },
                        list3: {
                            title: "Internet Shop",
                            price: "330",
                            desc: "Great for business!",
                            item1: "How much do you want",
                            item2: "We will do website with design",
                            item3: "Fast!"
                        }
                    }}/>
                    <PriceBlock title="Video editing" content={{
                        list1: {
                            title: "Animation Roller",
                            price: "100",
                            desc: "Great for any kind of business!",
                            item1: "Only 1 page",
                            item2: "We will do everything quality",
                            item3: "Fast!"
                        },
                        list2: {
                            title: "Animation Roller",
                            price: "100",
                            desc: "Great for business!",
                            item1: "How much do you want",
                            item2: "We will do website with design",
                            item3: "Fast!"
                        },
                        list3: {
                            title: "Animation Roller",
                            price: "100",
                            desc: "Great for business!",
                            item1: "How much do you want",
                            item2: "We will do website with design",
                            item3: "Fast!"
                        }
                    }}/>
                    <PriceBlock title="Graphic Services" content={{
                        list1: {
                            title: "Creating logo",
                            price: "100",
                            desc: "Great for business!",
                            item1: "Only 1 page",
                            item2: "We will do everything quality",
                            item3: "Fast!"
                        },
                        list2: {
                            title: "UX / UI",
                            price: "100",
                            desc: "Creation of layouts for web projects!",
                            item1: "How much do you want",
                            item2: "We will do website with design",
                            item3: "Fast!"
                        },
                        list3: {
                            title: "UX / UI",
                            price: "100",
                            desc: "Great for business!",
                            item1: "How much do you want",
                            item2: "We will do website with design",
                            item3: "Fast!"
                        }
                    }}/>
                </section>
            )}
            
            <Form/>
        </div>
    )
}

export default Prices