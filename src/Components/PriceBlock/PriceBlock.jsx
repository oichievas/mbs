import BetweenTitle from '../BetweenTitle/BetweenTitle'
import cls from './PriceBlock.module.scss'

const PriceBlock = ({title, content}) => {
    return (
        <div className={cls.root}>
            {title ? (
                <BetweenTitle color="white" content={title}/>
            ) : ''}
            <div className={cls.pricesBlock}>
                <div className={cls.priceLine}>
                    <h1 className={cls.priceTitle}>{content.list1.title}</h1>
                    <h2 className={cls.pricePrice}>$ {content.list1.price}</h2>
                    <h3 className={cls.priceDescription}>{content.list1.desc}</h3>
                    <ul className={cls.priceList}>
                        <li>{content.list1.item1}</li>
                        <li>{content.list1.item2}</li>
                        <li>{content.list1.item3}</li>
                    </ul>
                    <button className={cls.button}>
                        Start now
                    </button>
                </div>
                {content.list2 ? (
                    <div className={cls.priceLine}>
                    <h1 className={cls.priceTitle}>{content.list2.title}</h1>
                    <h2 className={cls.pricePrice}>$ {content.list2.price}</h2>
                    <h3 className={cls.priceDescription}>{content.list2.desc}</h3>
                    <ul className={cls.priceList}>
                        <li>{content.list2.item1}</li>
                        <li>{content.list2.item2}</li>
                        <li>{content.list2.item3}</li>
                    </ul>
                    <button className={cls.button}>
                        Start now
                    </button>
                </div>
                ) : ''}
                {content.list3 ? (
                    <div className={cls.priceLine}>
                    <h1 className={cls.priceTitle}>{content.list3.title}</h1>
                    <h2 className={cls.pricePrice}>$ {content.list3.price}</h2>
                    <h3 className={cls.priceDescription}>{content.list3.desc}</h3>
                    <ul className={cls.priceList}>
                        <li>{content.list3.item1}</li>
                        <li>{content.list3.item2}</li>
                        <li>{content.list3.item3}</li>
                    </ul>
                    <button className={cls.button}>
                        Start now
                    </button>
                </div>
                ) : ''}
            </div>
        </div>
    )
}

export default PriceBlock