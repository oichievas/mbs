import BetweenTitle from '../BetweenTitle/BetweenTitle'
import SingleBenefit from '../SingleBenefit/SingleBenefit'
import cls from './Benefits.module.scss'

const Benefits = ({content}) => {
    return (
        <div className={cls.root}>
            <div className={cls.title}>
                <BetweenTitle content={content.title} color="black"/>
            </div>
            <div className={cls.benefits}>
                <SingleBenefit content={content.benefit1}/>
                <SingleBenefit content={content.benefit2}/>
                <SingleBenefit content={content.benefit3}/>
                <SingleBenefit content={content.benefit4}/>
            </div>
        </div>
    )
}

export default Benefits