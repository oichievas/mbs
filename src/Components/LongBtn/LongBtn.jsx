import cls from './LongBtn.module.scss'

const LongBtn = ({content, color}) => {
    return (
        <button 
            className={cls.root}
            style={{color}}
        >
            <a href="https://wa.me/996773822935">
             {content}
            </a>
           
        </button>
    )
}

export default LongBtn