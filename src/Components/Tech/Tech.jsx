import cls from './Tech.module.scss'
import { useState, useEffect, useRef } from 'react'
import BetweenTitle from '../BetweenTitle/BetweenTitle'
import useWindowDimensions from '../getWindowFunc/useWindowDimension'
import { useSelector } from 'react-redux'

const Tech = () => {

    const {selectedLang: {tech}} = useSelector(s => s.lang)

    const [checkbox, setCheckbox] = useState('all');
    const {width} = useWindowDimensions()

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if(checkbox !== 'all' && ref1.current && !ref1.current.contains(e.target) && ref2.current && !ref2.current.contains(e.target) && ref3.current && !ref3.current.contains(e.target) && ref4.current && !ref4.current.contains(e.target) && ref5.current && !ref5.current.contains(e.target) && ref6.current && !ref6.current.contains(e.target) && ref7.current && !ref7.current.contains(e.target)){
                setCheckbox('all');
            }else if(checkbox !== 'all' && ref1.current?.contains(e.target) && ref1.current.id == checkbox ){
                setCheckbox('all')
            }else if(checkbox !== 'all' && ref2.current?.contains(e.target) && ref2.current.id == checkbox ){
                setCheckbox('all')
            }else if(checkbox !== 'all' && ref3.current?.contains(e.target) && ref3.current.id == checkbox ){
                setCheckbox('all')
            }else if(checkbox !== 'all' && ref4.current?.contains(e.target) && ref4.current.id == checkbox ){
                setCheckbox('all')
            }else if(checkbox !== 'all' && ref5.current?.contains(e.target) && ref5.current.id == checkbox ){
                setCheckbox('all')
            }else if(checkbox !== 'all' && ref6.current?.contains(e.target) && ref6.current.id == checkbox ){
                setCheckbox('all')
            }else if(checkbox !== 'all' && ref7.current?.contains(e.target) && ref7.current.id == checkbox ){
                setCheckbox('all')
            }
        }
        document.addEventListener('click', checkIfClickedOutside)
        return () => {
            document.removeEventListener('click', checkIfClickedOutside)
        }
    }, [checkbox])


    return (
        <section className={cls.tech}>
            <BetweenTitle content={tech.title   } color="white"/>
            <ul>
                <li ref={ref1} id="design" onClick={() => { setCheckbox('design')}} >
                    <span 
                        className={cls.checkbox} 
                    >
                        {checkbox === 'design' ? (
                            <span className={cls.checkCircle}></span>
                        ) : null}
                    </span> 
                    Ux & Ui
                </li>
                <li ref={ref2} id="frontend" onClick={() => setCheckbox('frontend')}>
                    <span 
                        className={cls.checkbox} 
                    >
                        {checkbox === 'frontend' ? (
                            <span className={cls.checkCircle}></span>
                        ) : null}
                    </span> 
                    Frontend
                </li>
                <li ref={ref3} id="frontend2" onClick={() => setCheckbox('frontend2')} >
                    <span 
                        className={cls.checkbox} 
                    >
                        {checkbox === 'frontend2' ? (
                            <span className={cls.checkCircle}></span>
                        ) : null}
                    </span> 
                    Frontend2
                </li>
                <li ref={ref4} id="videoediting" onClick={() => setCheckbox('videoediting')} >
                    <span 
                        className={cls.checkbox} 
                    >
                        {checkbox === 'videoediting' ? (
                            <span className={cls.checkCircle}></span>
                        ) : null}
                    </span> 
                    {tech.videoediting}
                </li>
                {width > 850 ? (
                    <li ref={ref5} id="videoediting2" onClick={() => setCheckbox('videoediting2')} >
                        <span 
                            className={cls.checkbox} 
                        >
                            {checkbox === 'videoediting2' ? (
                                <span className={cls.checkCircle}></span>
                            ) : null}
                        </span> 
                        {tech.videoediting2}
                    </li>
                ) : null}
                <li ref={ref6} id="backend" onClick={() => setCheckbox('backend')} >
                    <span 
                        className={cls.checkbox} 
                    >
                        {checkbox === 'backend' ? (
                            <span className={cls.checkCircle}></span>
                        ) : null}
                    </span> 
                    Backend
                </li>
                <li ref={ref7} id="marketing" onClick={() => setCheckbox('marketing')}>
                    <span 
                        className={cls.checkbox} 
                    >
                        {checkbox === 'marketing' ? (
                            <span className={cls.checkCircle}></span>
                        ) : null}
                    </span> 
                    {tech.marketing}
                </li>
            </ul>
            <div className={cls.grid}>
                {/* Design */}
                <div className={cls.design} id={cls.design1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ><img src="/img/figma.png" className={cls.specialImg} alt="figma"/><p>Figma</p></div>
                <div className={cls.design} id={cls.design2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div> 
                <div className={cls.design} id={cls.design3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.design} id={cls.design10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                {width <= 510 ? (
                    <>
                        <div className={cls.design} id={cls.design11} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                        <div className={cls.design} id={cls.design12} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "design" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                    </>
                ) : null}
                {/* VideoEditing */}
                <div className={cls.edit} id={cls.edit1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ><img src="/img/premierepro.png" alt="premiere-pro" /><p>Premiere Pro</p></div>
                <div className={cls.edit} id={cls.edit2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} >{width <= 850 && (<><img src="/img/webstorm.png" alt="webstorm" /><p>Webstorm</p></>)}</div>
                <div className={cls.edit} id={cls.edit3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit11} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.edit} id={cls.edit12} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                {/* VideoEditing2 */}
                <div className={cls.video} id={cls.video1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} >{width >= 850 ? (<><img src="/img/webstorm.png" alt="webstorm" /><p>Webstorm</p></>) : null} </div>
                <div className={cls.video} id={cls.video2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video11} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video12} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video13} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video14} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video15} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.video} id={cls.video16} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "videoediting2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                {/* Frontend */}
                <div className={cls.frontend} id={cls.frontend1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend11} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.frontend} id={cls.frontend12} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                {/* Frontend2 */}
                <div className={cls.front} id={cls.front1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front11} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.front} id={cls.front12} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "frontend2" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                {/* Backend */}
                <div className={cls.backend} id={cls.backend1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend11} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.backend} id={cls.backend12} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "backend" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                {/* Marketing */}
                <div className={cls.marketing} id={cls.marketing1} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing2} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing3} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing4} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing5} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing6} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing7} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing8} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing9} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
                <div className={cls.marketing} id={cls.marketing10} style={checkbox === 'all' ? {opacity: "1"} : checkbox === "marketing" ? {opacity: "1"} : {opacity: "0.3"}} ></div>
            </div>
        </section>
    )
}

export default Tech