import cls from './Form.module.scss'
import BetweenTitle from '../BetweenTitle/BetweenTitle'
import { useSelector } from 'react-redux'

const Form = ({burger}) => {

    const {selectedLang: {form}} = useSelector(s => s.lang)

    return (
        <div className={cls.root}>
            {burger ? '' : (
                <BetweenTitle content={form.title} color="#EC1C24"/>
            )}
            <div className={cls.howToContact}>
                <div className={cls.info}>
                    <div className={cls.infoTop}>
                        <div>
                            <p>{form.textUs}</p>
                            <h1>oichievas@gmail.com</h1>
                        </div>
                        <div>
                            <p>{form.callUs}</p>
                            <h1>+996 779 82 29 35</h1>
                        </div>
                    </div>
                    <div className={cls.infoBottom}>
                        <a target="_blank" href="">
                            <img src="/img/whatsapp.png" alt="whatsapp-icon" />
                            <p>Whats`App</p>
                        </a>
                        <a target="_blank" href="">
                            <img src="/img/weChat.png" alt="wechat-icon" />
                            <p>WeChat</p>
                        </a>
                        <a target="_blank" href="">
                            <img src="/img/telegram.png" alt="telegram-icon" />
                            <p>Telegram</p>
                        </a>
                        <a target="_blank" href="">
                            <img src="/img/instagram.png" alt="instagram-icon" />
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
                <div className={cls.icons}>
                    <a target="_blank" href=""><img src="/img/twitter.png" alt="twitter" /></a>
                    <a target="_blank" href=""><img src="/img/facebook.png" alt="facebook" /></a>
                    <a target="_blank" href=""><img src="/img/instagram.png" alt="instagram" /></a>
                    <a target="_blank" href=""><img src="/img/youtube.png" alt="youtube" /></a>
                    <a target="_blank" href=""><img src="/img/linkedIn.png" alt="linkedin" /></a>
                </div>
                <form className={cls.form} style={burger ? {display: "none"} : null}>
                    <input placeholder="Акмат Акматов" type="text" className={cls.littleInput}/>
                    <input placeholder={form.placeholder1} type="text" className={cls.littleInput}/>
                    <textarea placeholder={form.placeholder2} type="text" className={cls.bigInput}></textarea>
                    <input type="submit" value={form.btnContent} className={cls.submitInput}/>
                </form>
            </div>
        </div>
    )
}

export default Form