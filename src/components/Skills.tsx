import { useTranslations } from 'next-intl'
import React from 'react'

const Skills = () => {
    const t = useTranslations('competences')
    return (
        <section id="skills" className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">{t('title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-html5 text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">HTML5</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-css3-alt text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">CSS3</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-bootstrap text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Bootstrap 5</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-js text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">JavaScript</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-react text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">React</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-vuejs text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Vue.js</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fas fa-f text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Flutter</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-node text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">NodeJs</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-python text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Python</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-java text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Java (Spring Boot)</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-sass text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Sass</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-git-alt text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Git</h3>
                </div>
                
            </div>
        </section>
    )
}
export default Skills
