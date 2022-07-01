import cls from './Nav.module.scss'
import CustomLink from '../CustomLink/CustomLink'
import { useEffect, useState } from 'react'
import { FiChevronDown as ArrowDown} from 'react-icons/fi'
import useWindowDimensions from '../getWindowFunc/useWindowDimension'
import Burger from '../Burger/Burger'
import { useDispatch , useSelector } from 'react-redux'
import { ruLangActions , enLangActions } from '../../redux/langRedux/action'
import { Link } from 'react-router-dom'



const Nav = () => {
    const dispatch = useDispatch()
    const {selectedLang: {navbar}} = useSelector(s => s.lang)
    const selectedLocalLang = localStorage.getItem('mbcLang');

    useEffect(() => {
        if(!localStorage.getItem('mbcLang')){
            localStorage.setItem('mbcLang', 'EN')
            dispatch(enLangActions())
        }else{
            const selectedLocalLang = localStorage.getItem('mbcLang');
            if(selectedLocalLang == 'RU'){
                dispatch(ruLangActions())
            }else{
                dispatch(enLangActions())
            }
        }
    }, [dispatch])

    

    const handleChangeLangText = (lang) =>{
        if(lang === 'RU'){
            dispatch(ruLangActions())
            localStorage.setItem('mbcLang' , 'RU')
        }else{
            dispatch(enLangActions())
            localStorage.setItem('mbcLang', 'EN')
        }
    }


    const [isOpenServices, setIsOpenServices] = useState(false)
    const [isOpenLang, setIsOpenLang] = useState(false)
    const { width } = useWindowDimensions()
    const [activeBurger, setActiveBurger] = useState(false)

    return (
        <div className={cls.root}>
            <nav className={cls.nav} id={isOpenServices ? cls.navBig : null}>
                {width <= 820 ? (
                    <Link className={cls.title} to="/">LOGO</Link>
                ) : ''}
                <div className={cls.navLeft}>
                    <Link className={cls.h1} to="/">LOGO</Link>
                    <ul>
                        <li><CustomLink className={cls.link} to="/">{navbar.home}</CustomLink></li>
                        <li className={cls.servicesLink}>
                            <button 
                                className={cls.servicesBtn} 
                                onClick={() => {
                                    setIsOpenLang(false)
                                    setIsOpenServices(!isOpenServices)
                                }}
                            >
                                {navbar.services}
                                <ArrowDown/>
                            </button>

                            <ol style={isOpenServices ? {display: "flex"} : {display: "none"}}>
                                <li><CustomLink className={cls.link} to="/frontend">Frontend</CustomLink></li>
                                <li><CustomLink className={cls.link} to="/ux-ui">Ux & Ui</CustomLink></li>
                                <li><CustomLink className={cls.link} to="/videoediting">{navbar.videoediting}</CustomLink></li>
                                <li><CustomLink className={cls.link} to="/backend">Backend</CustomLink></li>
                            </ol>
                        </li>
                        <li><CustomLink className={cls.link} to="/prices">{navbar.prices}</CustomLink></li>
                        <li><CustomLink className={cls.link} to="/cases">{navbar.cases}</CustomLink></li>
                    </ul>
                </div>
                <div className={cls.navRight}>
                    {/* <div className={cls.lang} id={isOpenLang ? cls.langOpen : null}>
                        <div className={cls.langTop}>
                            <button>
                                <img 
                                    src="/img/globe_lang.png" 
                                    alt="globe_lang" 
                                    onClick={() => {
                                        setIsOpenServices(false)
                                        setIsOpenLang(!isOpenLang)
                                    }}
                                />
                            </button>
                            <span className={selectedLocalLang === 'EN' ? cls.lang_en_active : cls.lang_en} onClick={() => handleChangeLangText('EN')}>en</span>
                            <span className={cls.lang_stick}>|</span>
                            <span className={selectedLocalLang === 'RU' ? cls.lang_ru_active : cls.lang_ru} onClick={() => handleChangeLangText('RU')}>ru</span>
                        </div>
                        <ol className={cls.langBottom} style={isOpenLang ? {display: "flex"} : {display: "none"}}>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Deutsch</a></li>
                        </ol>
                    </div> */}
                    <div className={cls.number}>+996 773 82 29 35</div>
                    <div className={cls.btnDiv}><button className={cls.contactBtn} ><a style={{"color": "white !important"}} href='https://wa.me/996773822935'>Contact with us</a></button></div>
                </div>
                <button className={cls.burgerBtn} onClick={() => setActiveBurger(!activeBurger)}>
                    <div className={cls.bar} id={cls.bar1}></div>
                    <div className={cls.bar} id={cls.bar2}></div>
                    <div className={cls.bar} id={cls.bar3}></div>
                </button>
            </nav>
            <Burger active={activeBurger} closeBtn={setActiveBurger} changeLang={handleChangeLangText} selectedLang={selectedLocalLang}/>
        </div>
    )
}

export default Nav