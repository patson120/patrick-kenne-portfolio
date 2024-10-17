'use client'

import { ContactType } from '@/types'
import constants from '@/utils/constants'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const About = () => {
    const t = useTranslations("about")

    const [isloading, setIsloading] = useState(false)
    const [contact, setContact] = useState<ContactType>({
        id: '1',
        nom: "KENNE",
        prenom: "Patrick",
        email: "patrick1kenne@gmail.com",
        object: "Prise de contact",
        message: "Je souhaite avoir quelques minutes d'échange avec vous. Merci de me laisser un message.",
    })

    const handleSubmit = () => {
        if(isloading) return
        setIsloading(true)
        
        fetch(`${constants.BASE_URL}/contacts`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(contact)
            }
        )
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setContact({
                    id: "",
                    nom: "",
                    prenom: "",
                    email: "",
                    object: "",
                    message: ""
                })
                setIsloading(false)
            })
            .catch(err => console.log({ message: err }))

            .finally(() => {
                setIsloading(false)
            })
    }

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
                        <span className='font-black ml-2'>KENNE TCHINDA Patrick, </span>
                        {t('description')}
                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <a href="https://drive.google.com/file/d/1SBoIKcKEkycDslyzND311YBbT-nws_Hc/view?usp=sharing" target='_blank' className="bg-primary text-white text-center md:text-left whitespace-nowrap px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">{t("mon_cv")}</a>
                        <div className='mt-3 md:hidden'></div>
                        <button onClick={handleSubmit} className="bg-secondary text-white text-center md:text-left whitespace-nowrap px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">{ isloading ? 'Sending...' : t("contact")}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About