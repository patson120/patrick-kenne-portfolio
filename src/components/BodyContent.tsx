
import React from 'react'

const BodyContent = () => {
  return (
    <main className="container mx-auto px-4 py-12">
        <section id="about" className="mb-16">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img src="https://cdn.dribbble.com/users/1561273/screenshots/14473032/dribble_4x.jpg" alt="Kenne Tchinda Patrick" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"/>
                </div>
                <div className="md:w-2/3 md:pl-12">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-secondary">A Propos</h2>
                    <p className="text-lg mb-6">Hello! Je suis <span className='font-black'>Kenne Tchinda Patrick </span>, Ingénieur Frontend passionné, autodidacte avec plus de 04 ans d’expérience dans le développement de solutions Web et Mobiles. Compétences avérées en analyse, UI/UX, auto-organisation, production rapide et maintenabilité. Apte à transformer les besoins des clients en solutions commerciales efficaces et à planifier les activités pour fournir des livrables dans les délais. Capable de maintenir un environnement convivial et productif au sein des équipes et dans les interactions avec les clients et les managers supérieurs. Excellentes aptitudes à la présentation orale et à l’explication de problèmes complexes en termes accessibles.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">Download CV</a>
                        <a href="#" className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>

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

        <section id="projects" className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 text-secondary">Featured Projects</h2>
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
    </main>
  )
}
export default BodyContent