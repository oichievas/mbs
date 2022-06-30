import cls from './WhoWeAre.module.scss'
import BetweenTitle from '../BetweenTitle/BetweenTitle'
import { useSelector } from 'react-redux'

const WhoWeAre = () => {

    const {selectedLang:{whoWeAre}} = useSelector(s => s.lang)

    return (
        <section className={cls.who}>
            <h1 className={cls.whoWeAre}>{whoWeAre.title}</h1>
            <p className={cls.ourMissionIs}>{whoWeAre.mission}</p>
            <div className={cls.weDo}>
                <BetweenTitle content={whoWeAre.weDoText} color="black"/>
                <div className={cls.weDoBlock}>
                    <div>
                        <p>{whoWeAre.weDo1}</p>
                        <p>{whoWeAre.weDo2}</p>
                    </div>
                    <div>
                        <p>{whoWeAre.weDo3}</p>
                        <p>{whoWeAre.weDo4}</p>
                    </div>
                    <div>
                        <p>{whoWeAre.weDo5}</p>
                        <p>{whoWeAre.weDo6}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre