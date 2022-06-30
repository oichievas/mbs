import cls from './Title.module.scss'

const Title = ({redText, text1, text2, text3, littleText, rhombus}) => {
    return (
        <div className={cls.root}>
            <h1 className={cls.text1}><span className={cls.redText}>{redText} </span> {text1} </h1>
            <h1 className={cls.text2}>{text2}</h1>
            <h1 className={cls.text3}>{text3}</h1>
            {littleText && (
                <p className={cls.littleText}>{littleText}</p>
            )}
            <img className={cls.rhombus} src="/img/rhombus.png" alt="rhombus" style={rhombus ? {display: "block"} : {display: "none"}}/>
        </div>
    )
}

export default Title