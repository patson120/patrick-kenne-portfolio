import React from 'react'

const Skills = () => {
    return (
        <section id="skills" className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">Skills & Expertise</h2>
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
                    <i className="fab fa-sass text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Sass</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fab fa-git-alt text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Git</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <i className="fas fa-mobile-alt text-4xl text-primary mb-2"></i>
                    <h3 className="font-bold">Responsive Design</h3>
                </div>
            </div>
        </section>
    )
}
export default Skills
