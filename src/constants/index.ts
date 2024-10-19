import { Experience } from "@/types"

const languages: string[] = ['en', 'fr']

// Experinces
const experiences_en: Experience[] = [
    {
        id: '4',
        title: 'Senior Frontend Developer',
        company: 'AfrikPay',
        location: 'Douala, Cameroun',
        startDate: 'Apr 2024',
        endDate: 'Present',
        description: '',
        tasks: [
            {
                id: '1',
                description: 'Identification, analysis and specification of customer needs.'
            },
            {
                id: '2',
                description: 'Analysis, design and production of attractive, user-friendly mock-ups to meet customer specifications.'
            },
            {
                id: '3',
                description: 'Participation in project planning and evaluation sessions.'
            },
            {
                id: '4',
                description: "Responsible for redesigning Web & Mobile applications and migrating them to the latest technologies (React, React Native, NextJs and Angular) for significantly improved performance, ease of maintenance and optimal scalability."
            },
            
            {
                id: '5',
                description: 'Close collaboration with back-end developers for seamless integration of server-side logic (APIs).'
            },
            {
                id: '6',
                description: "Publication of mobile applications on Play Store for public access."
            },
            {
                id: '7',
                description: 'Drafting of solution documentation.'
            },
        ]
    },
    {
        id: '3',
        title: 'Full Stack Developer',
        company: 'Flysoft Engineering',
        location: 'Yaounde, Cameroun',
        startDate: 'Aug 2022',
        endDate: 'Apr 2024',
        description: '',
        tasks: [
            {
                id: '1',
                description: 'Identification, analysis and specification of customer needs.'
            },
            {
                id: '2',
                description: 'Design of Frontend and Banckend architectures adapted to customer requirements.'
            },
            {
                id: '3',
                description: 'Participation in project planning and evaluation sessions.'
            },
            {
                id: '4',
                description: 'Close collaboration with Designers for better integration of Customer Interfaces.'
            },
            {
                id: '6',
                description: 'Robust, high-performance Web and mobile application development from A to Z.'
            },
            {
                id: '7',
                description: 'Good knowledge of frontend technologies (React, React Native, Angular, Vue.js, Flutter) and backend technologies (NodeJs, ExpressJs, Python, Django, Java, Spring Boots).'
            },
            {
                id: '7',
                description: 'Solid experience in managing relational and non-relational databases (SQL, NoSQL).'
            },
            {
                id: '8',
                description: 'Integration of end-to-end testing solutions with Jest, Cypress and Selenium.'
            },
            {
                id: '9',
                description: 'Drafting of solution documentation'
            },
        ]
    },
    {
        id: '2',
        title: 'Web & Mobile Frontend Developer',
        company: 'Flysoft Engineering',
        location: 'Yaounde, Cameroun',
        startDate: 'Mar 2020',
        endDate: 'Sep 2022',
        description: '',
        tasks: [
            {
                id: '1',
                description: 'Identification, analysis and specification of customer needs.'
            },
            {
                id: '2',
                description: 'Design front-end architectures adapted to customer requirements.'
            },
            {
                id: '3',
                description: 'Participation in project planning and evaluation sessions.'
            },
            {
                id: '4',
                description: 'Close collaboration with designers for better integration of customer interfaces.'
            },
            {
                id: '5',
                description: 'Close collaboration with back-end developers to integrate server-side logic.'
            },
            {
                id: '6',
                description: 'Drafting of solution documentation.'
            },
        ]
    },
    {
        id: '1',
        title: 'Frontend Web Developer',
        company: 'Flysoft Engineering',
        location: 'Yaounde, Cameroun',
        startDate: 'Sep 2019',
        endDate: 'Mar 2020',
        description: '',
        tasks: [
            {
                id: '1',
                description: "Member of a team of 05 frontend developers specialized in creating responsive web applications."
            },
            {
                id: '2',
                description: 'Analysis, design and realization of attractive, user-friendly web pages according to specific customer requirements.'
            },
            {
                id: '3',
                description: 'Collaboration with UX/UI designers to create intuitive user interfaces.'
            },
            {
                id: '4',
                description: 'Development, unit testing and end-to-end testing of solutions.'
            },
            {
                id: '5',
                description: 'Integration of modern JavaScript frameworks (React, Vue.js) to improve application performance.'
            },
            {
                id: '6',
                description: 'Drafting of solution documentation.'
            },
            {
                id: '7',
                description: 'Produce reports for the project manager.'
            },
        ]
    },
]

const experiences_fr: Experience[] = [
    {
        id: '4',
        title: 'Développeur Senior Frontend',
        company: 'AfrikPay',
        location: 'Douala, Cameroun',
        startDate: 'Avr 2024',
        endDate: 'Présent',
        description: '',
        tasks: [
            {
                id: '1',
                description: 'Identification, analyse et spécification des besoins des clients.'
            },
            {
                id: '2',
                description: 'Analyse, conception et réalisation des maquettes attrayantes et conviviales qui répondent aux spécifications des clients.'
            },
            {
                id: '3',
                description: 'Participation aux séances de planification et d’évaluation des projets.'
            },
            {
                id: '4',
                description: "Responsable en charge de la refonte des applications Web & Mobile et de leur migrations vers les technologies (React, React Native, NextJs et Angular) les plus récentes pour une amélioration significative des performances, facilité de maintenance et scalabilité optimale."
            },
            
            {
                id: '5',
                description: 'Collaboration étroite avec les développeurs Back-end pour une bonne intégration de la logique côté serveur (APIs).'
            },
            {
                id: '6',
                description: "Publication des applications mobiles sur Play Store pour l'accessible au public."
            },
            {
                id: '7',
                description: 'Rédaction des documentations des solutions.'
            },
        ]
    },
    {
        id: '3',
        title: 'Développeur Full Stack',
        company: 'Flysoft Engineering',
        location: 'Yaoundé, Cameroun',
        startDate: 'Août 2022',
        endDate: 'Avr 2024',
        description: '',
        tasks: [
            {
                id: '1',
                description: 'Identification, analyse et spécification des besoins des clients.'
            },
            {
                id: '2',
                description: 'Conception des architectures Frontend et Banckend adaptées à la demande des clients.'
            },
            {
                id: '3',
                description: 'Participation aux séances de planification et d’évaluation des projets.'
            },
            {
                id: '4',
                description: 'Collaboration étroite avec les Designers pour une meilleure intégration des Interfaces client.'
            },
            {
                id: '6',
                description: 'Développement des applications Web et Mobile robustes et performantes de A à Z.'
            },
            {
                id: '7',
                description: 'Bonnes connaissances des technologies Frontend (React, React Native, Angular, Vue.js, Flutter) et Backend (NodeJs, ExpressJs, Python, Django, Java, Spring Boots).'
            },
            {
                id: '7',
                description: 'Expérience solide dans la gestion des Bases de Données relationnelles et non relationnelle (SQL, NoSQL).'
            },
            {
                id: '8',
                description: 'Intégration des tests de bout en bout des solutions avec Jest, Cypress et Selenium.'
            },
            {
                id: '9',
                description: 'Rédaction des documentations des solutions'
            },
        ]
    },
    {
        id: '2',
        title: 'Développeur Frontend Web & Mobile',
        company: 'Flysoft Engineering',
        location: 'Yaoundé, Cameroun',
        startDate: 'Mar 2020',
        endDate: 'Sep 2022',
        description: '',
        tasks: [
            {
                id: '1',
                description: 'Identification, analyse et spécification des besoins des clients.'
            },
            {
                id: '2',
                description: 'Conception des architectures frontend adaptées à la demande des clients.'
            },
            {
                id: '3',
                description: 'Participation aux séances de planification et d’évaluation des projets.'
            },
            {
                id: '4',
                description: 'Collaboration étroite avec les designers pour une meilleure intégration des Interfaces client.'
            },
            {
                id: '5',
                description: 'Collaboration étroite avec les développeurs back-end pour intégrer la logique côté serveur.'
            },
            {
                id: '6',
                description: 'Rédaction des documentations des solutions'
            },
        ]
    },
    {
        id: '1',
        title: 'Développeur Frontend Web',
        company: 'Flysoft Engineering',
        location: 'Yaoundé, Cameroun',
        startDate: 'Sep 2019',
        endDate: 'Mar 2020',
        description: '',
        tasks: [
            {
                id: '1',
                description: "Membre d'une équipe de 05 développeurs frontend spécialisés dans la création d'applications web réactives."
            },
            {
                id: '2',
                description: 'Analyse, conception et réalisation les pages web attrayantes et conviviales conformément aux besoins spécifiques des clients.'
            },
            {
                id: '3',
                description: 'Collaboration avec les concepteurs UX/UI pour créer des interfaces utilisateur intuitives.'
            },
            {
                id: '4',
                description: 'Développement, tests unitaires et tests de bout en bout des solutions.'
            },
            {
                id: '5',
                description: 'Intégration des frameworks JavaScript modernes (React, Vue.js) pour améliorer les performances des applications.'
            },
            {
                id: '6',
                description: 'Rédaction des documentations des solutions.'
            },
            {
                id: '7',
                description: 'Productions de rapports à l’intention du chef de projet.'
            },
        ]
    },
]

export default {
    languages,
    experiences_en,
    experiences_fr
}