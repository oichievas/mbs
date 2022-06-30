import cls from './SingleBenefit.module.scss'

const SingleBenefit = ({content}) => {
    return (
        <div className={cls.root}>
            <span>{content.number}</span>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
        </div>
    )
}

export default SingleBenefit