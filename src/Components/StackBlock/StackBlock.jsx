import BetweenTitle from '../BetweenTitle/BetweenTitle'
import cls from './StackBlock.module.scss'

const StackBlock = ({title, tool1, tool2, tool3, tool4, tool5}) => {
    return (
        <div className={cls.root}>
            <BetweenTitle content={`${title.content}`} color={`${title.color}`}/>
            <div className={cls.stack}>
                <div>
                    <img src={`${tool1.image}`} alt="image1"/>
                    <p>{tool1.title}</p>
                </div>
                <div>
                    <img src={`${tool2.image}`} alt="image2"/>
                    <p>{tool2.title}</p>
                </div>
                <div>
                    <img src={`${tool3.image}`} alt="image3"/>
                    <p>{tool3.title}</p>
                </div>
                <div>
                    <img src={`${tool4.image}`} alt="image4"/>
                    <p>{tool4.title}</p>
                </div>
                <div>
                    <img src={`${tool5.image}`} alt="image5"/>
                    <p>{tool5.title}</p>
                </div>
            </div>
        </div>
    )
}

export default StackBlock