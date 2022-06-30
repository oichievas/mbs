import cls from './LongBtn.module.scss'

const LongBtn = ({content, color}) => {
    return (
        <button 
            className={cls.root}
            style={{color}}
        >
            {content}
        </button>
    )
}

export default LongBtn