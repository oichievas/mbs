import { useEffect } from 'react'
import Cases from '../../Components/Cases/Cases'
import Form from '../../Components/Form/Form'
import Title from '../../Components/Title/Title'
import cls from './CasesPage.module.scss'

const CasesPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={cls.root}>
            <section className={cls.header}>
                <Title redText="Case" text1="studies" littleText="We help world-class brands and startups engineer their growth and reach desired outcomes with efficacy and creativity."/>
            </section>
            <section className={cls.cases}>
                <Cases/>
                <Cases/>
            </section>
            <Form/>
        </div>
    )
}

export default CasesPage