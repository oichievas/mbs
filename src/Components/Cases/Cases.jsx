import useWindowDimensions from '../getWindowFunc/useWindowDimension'
import LongCase from '../LongCase/LongCase';
import cls from './Cases.module.scss'
import { useSelector } from 'react-redux'

const Cases = () => {

    const { height, width } = useWindowDimensions()
    const {selectedLang:{cases}} = useSelector(s => s.lang)

    return (
                
        <div className={cls.casesContent}>
            <LongCase firstLine={cases.caseTitle1} secondLine={cases.caseTitle2} text={cases.caseText}/>
            {width >= 925 ? (
                <div className={cls.inlineCasesBlock}>
                    <div className={cls.biggerCase}>
                        <img className={cls.logo} src="/img/it_academy_logo.png" alt="logo" />
                        <div className={cls.bottomInfo}>
                            <h1>{cases.caseTitle1} <br/> {cases.caseTitle2}</h1>
                            <span className={cls.popUpSpan}>
                                <p>{cases.caseText}</p>
                                <button className={cls.exploreBtn}>{cases.caseButtonContent}</button>
                            </span>
                        </div>
                    </div>
                    <div className={cls.smallerCase}>
                        <img className={cls.logo} src="/img/it_academy_logo.png" alt="logo" />
                        <div className={cls.bottomInfo}>
                            <h1>{cases.caseTitle1} <br/> {cases.caseTitle2}</h1>
                            <span className={cls.popUpSpan}>
                                <p>{cases.caseText}</p>
                                <button className={cls.exploreBtn}>{cases.caseButtonContent}</button>
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <LongCase firstLine={cases.caseTitle1} secondLine={cases.caseTitle2} text={cases.caseText}/>
            )}
            <LongCase firstLine={cases.caseTitle1} secondLine={cases.caseTitle2} text={cases.caseText}/>
        </div>
    )
}

export default Cases