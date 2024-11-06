'use client'

import { ContactType } from '@/types'
import constants from '@/utils/constants'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import SocialMedia from './SocialMedia'
import Image from 'next/image'

const About = () => {
    const t = useTranslations("about")
    const locale = useLocale()

    const [link, setLink] = useState('')

    

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
        if (isloading) return
        setIsloading(true)

        fetch(`${constants.BASE_URL}/contacts`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
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

    useEffect(() => {
        if (locale === "en") {
            setLink('https://drive.google.com/file/d/1Z7M-oGt1qUVaLzVoCxsQXD-vFZrq5eqV/view?usp=sharing')
        }
        else {
            setLink('https://drive.google.com/file/d/1ZFl2xh5oPixZmY1K8wphQdOTaDhZP5Zx/view?usp=sharing')
        }
    }, [locale])

    return (
        <section id="about" className="mb-16">
            <div className='h-[80px]'></div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <div className="relative rounded-full overflow-hidden w-64 h-64 object-cover mx-auto shadow-lg">
                        <Image
                            alt="Kenne Tchinda Patrick Profil"
                            src="/assets/img/profil.jpg"
                            fill
                            sizes='200px'
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </div>
                <div className="md:w-2/3 md:pl-12">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-secondary">{t('title')}</h2>
                    <p className="text-lg mb-6 md:text-left text-justify">Hello! {t('jesuis')}
                        <span className='font-black ml-2'>KENNE TCHINDA Patrick, </span>
                        {t('description')}
                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <a href={link} target='_blank' className="bg-primary text-white text-center md:text-left whitespace-nowrap px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">{t("mon_cv")}</a>
                        <div className='mt-3 md:hidden'></div>
                        <button onClick={handleSubmit} className="bg-secondary text-white text-center md:text-left whitespace-nowrap px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">{isloading ? 'Sending...' : t("contact")}</button>
                    </div>
                    {/* Social Media */}
                    <SocialMedia containerStyle='mt-6 md:mt-10 space-x-8 flex-row justify-center md:justify-start' />
                </div>

            </div>
        </section>
    )
}
export default About