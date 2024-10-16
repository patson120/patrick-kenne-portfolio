

import { useTranslations } from 'next-intl'
import React from 'react'

const About = () => {
    const  t = useTranslations("about")
    return (
        <section id="about" className="mb-16">
            <div className='h-[80px]'></div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img src="./assets/img/profil.jpg" alt="Kenne Tchinda Patrick" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
                </div>
                <div className="md:w-2/3 md:pl-12">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-secondary">{t('title')}</h2>
                    <p className="text-lg mb-6">Hello! {t('jesuis')}
                        <span className='font-black ml-2'>KENNE TCHINDA Patrick </span>,
                        {t('description')}
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://drive.google.com/file/d/1SBoIKcKEkycDslyzND311YBbT-nws_Hc/view?usp=sharing" target='_blank' className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">{t("mon_cv")}</a>
                        <a href="#" className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">{t("contact")}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About