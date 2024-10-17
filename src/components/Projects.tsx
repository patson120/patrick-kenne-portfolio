
import { useTranslations } from 'next-intl'
import React from 'react'

const Projects = () => {
    const t = useTranslations('projets')
    return (
        <section id="projects" className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://alvarotrigo.com/blog/assets/imgs/2021-10-16/dvlpr-front-end-portfolio-example.jpeg" alt="E-commerce Platform" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                        <p className="text-gray-600 mb-4">A fully responsive e-commerce platform built with React and Node.js.</p>
                        <a href="#" className="text-primary hover:underline">View Project</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://media.slidesgo.com/storage/48012441/responsive-images/0-senior-frontend-developer-portfolio___media_library_original_1600_900.jpg" alt="Task Management App" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                        <p className="text-gray-600 mb-4">A Vue.js-based task management application with real-time updates.</p>
                        <a href="#" className="text-primary hover:underline">View Project</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://cdn.dribbble.com/users/3774957/screenshots/7969812/simplifiedmockup_4x.png" alt="Portfolio Website" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                        <p className="text-gray-600 mb-4">A custom-designed portfolio website showcasing my skills and projects.</p>
                        <a href="#" className="text-primary hover:underline">View Project</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
