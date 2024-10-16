

import React from 'react'

const About = () => {
    return (
        <section id="about" className="mb-16">
            <div className="flex flex-col md:flex-row items-center">
                {/* <div className="md:w-1/3 mb-8 md:mb-0">
                    <img src="./assets/img/profil.jpg" alt="Kenne Tchinda Patrick" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
                </div> */}
                <div className="md:w-2/3 md:pl-12">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-secondary">A Propos</h2>
                    <p className="text-lg mb-6">Hello! Je suis
                        <span className='font-black ml-2'>KENNE TCHINDA Patrick </span>,
                        Ingénieur Frontend passionné, autodidacte avec plus de 04 ans
                        d’expérience dans le développement de solutions Web et Mobiles.
                        Compétences avérées en analyse, UI/UX, auto-organisation,
                        production rapide et maintenabilité. Apte à transformer les
                        besoins des clients en solutions commerciales efficaces et à
                        planifier les activités pour fournir des livrables dans les délais.
                        Capable de maintenir un environnement convivial et productif au sein
                        des équipes et dans les interactions avec les clients et les managers
                        supérieurs. Excellentes aptitudes à la présentation orale et à l’explication
                        de problèmes complexes en termes accessibles.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://drive.google.com/file/d/1SBoIKcKEkycDslyzND311YBbT-nws_Hc/view?usp=sharing" target='_blank' className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">Download CV</a>
                        <a href="#" className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About