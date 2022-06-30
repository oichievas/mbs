import cls from "./Process.module.scss"
import BetweenTitle from "../BetweenTitle/BetweenTitle"
import LongBtn from "../LongBtn/LongBtn"
import ProgressCircle from "../ProgressCircle/ProgressCircle"
import { useSelector } from "react-redux"

const Process = () => {

    const {selectedLang: {process, metrics}} = useSelector(s => s.lang)

    return (
        <>
            <section className={cls.root}>
                <BetweenTitle content={process.title}/>
                <div className={cls.process}>
                    <div className={cls.inlineProcess}>
                        <div>
                            <img className={cls.icon} src="/img/icon_contact.png" alt="contact-icon"/>
                            <img className={cls.arrow} src="/img/crooked_arrow.png" alt="crooked-arrow" />
                            <h1>{process.processTitle1}</h1>
                            <p>{process.processText1}</p>
                        </div>
                        <div>
                            <img className={cls.icon} src="/img/icon_analyze.png" alt="analyze-icon"/>
                            <img className={cls.arrow} id={cls.arrow2} src="/img/crooked_arrow.png" alt="crooked-arrow" />
                            <h1>{process.processTitle2}</h1>
                            <p>{process.processText2}</p>
                        </div>
                    </div>
                    <div className={cls.inlineProcess}>
                        <div>
                            <img className={cls.icon} src="/img/icon_team.png" alt="team-icon"/>
                            <img className={cls.arrow} src="/img/crooked_arrow.png" alt="crooked-arrow" />
                            <h1>{process.processTitle3}</h1>
                            <p>{process.processText3}</p>
                        </div>
                        <div>
                            <img className={cls.icon} src="/img/icon_start.png" alt="start-icon"/>
                            <h1>{process.processTitle4}</h1>
                            <p>{process.processText4}</p>
                        </div>
                    </div>
                </div>
                <LongBtn content={process.processBtnContent} color="black"/>
            </section>
            <section className={cls.metrics}>
                <BetweenTitle content={metrics.title} color="black"/>
                <div className={cls.inlineMetrics}>
                    <div className={cls.div}>
                        <ProgressCircle percentage={75} article="k"/>
                        <p>{metrics.metric1}</p>
                    </div>
                    <div className={cls.div}>
                        <ProgressCircle percentage={5} article=""/>
                        <p>{metrics.metric2}</p>
                    </div>
                    <div className={cls.div}>
                        <ProgressCircle percentage={45} article=""/>
                        <p>{metrics.metric3}</p>
                    </div>
                    <div className={cls.div}>
                        <ProgressCircle percentage={24} article="/7"/>
                        <p>{metrics.metric4}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process