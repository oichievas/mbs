import cls from './StackText.module.scss'

const StackText = ({content}) => {
    return (
        <h1 className={cls.title}>{content}</h1>
    )
}

export default StackText