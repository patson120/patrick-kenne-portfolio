import React from 'react'

const Experiences = () => {
    return (
        <section id="experience" className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">Professional Experience</h2>
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Senior Front-end Developer</h3>
                    <p className="text-gray-600 mb-2">TechCorp Inc. | 2020 - Present</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Lead a team of 5 front-end developers in creating responsive web applications</li>
                        <li>Implemented modern JavaScript frameworks (React, Vue.js) to improve application performance</li>
                        <li>Collaborated with UX/UI designers to create intuitive user interfaces</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Front-end Developer</h3>
                    <p className="text-gray-600 mb-2">WebSolutions Co. | 2017 - 2020</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Developed and maintained client websites using HTML5, CSS3, and JavaScript</li>
                        <li>Optimized website performance and implemented SEO best practices</li>
                        <li>Worked closely with back-end developers to integrate front-end with server-side logic</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Experiences