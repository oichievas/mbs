import cls from './Header.module.scss'
import Title from '../Title/Title'
import LongBtn from '../LongBtn/LongBtn'
import { useSelector } from 'react-redux'

const Header = ({width}) => {

    const {selectedLang:{header}} = useSelector(s => s.lang)

    return (
        <section className={cls.header}>
            {width <= 454 ? (
                <>
                    <Title redText="MBC" text1="Studio" text2="Marketing Business" text3="Creative Studio"/>
                    <div className={cls.bottomText}><a href="">{header.bottomText}</a> <a href="">FaQ</a></div>
                    <h1 className={cls.appearText}>{header.dreamsText}</h1>
                    <button className={cls.orderButton}>{header.orderBtn}</button>
                </>
            ) : (
                <>
                    <Title redText="MBC" text1="Studio" text2="Marketing Business" text3="Creative Studio" rhombus/>
                    <div className={cls.bottomText}><a href="">{header.bottomText}</a> <a href="">FaQ</a></div>
                    <LongBtn content={header.longBtn} color="white"/>
                </>
            )}
        </section>
    )
}

export default Header