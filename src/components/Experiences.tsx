'use client'

import { Experience } from '@/types';
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react'
import CONSTANTS from "@/constants";

const Experiences = () => {

    const [experiences, setExperiences] = useState<Experience[]>([])
    const localActive = useLocale()
    useEffect(() => {
        if (localActive == 'en') {
            setExperiences(CONSTANTS.experiences_en)
        } else setExperiences(CONSTANTS.experiences_fr)
    }, [])

    return (
        <section id="experience" className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">Professional Experience</h2>
            <div className="space-y-8">
                {
                    experiences.map((experience, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                            <p className="text-gray-600 mb-2">{experience.company} | {experience.startDate} - {experience.endDate}</p>
                            <ul className="list-disc list-inside text-gray-700">
                                {
                                    experience.tasks.map((task) => (
                                        <li key={task.id}>{task.description}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Experiences