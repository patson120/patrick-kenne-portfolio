import { Experience } from "@/types"

const languages: string[] = ['en', 'fr']

// Experinces
const experiences_en: Experience[] = [
    {
        id: '1',
        title: 'Senior Front-end Developer',
        company: 'TechCorp Inc.',
        location: 'Paris, France',
        startDate: '2021-01',
        endDate: 'Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dignissim nisi, vel placerat arcu. Donec ac ante id mauris faucibus tincidunt.',
        tasks: [
            {
                id: '1',
                description: 'Lead a team of 5 front-end developers in creating responsive web applications'
            },
            {
                id: '2',
                description: 'Implemented modern JavaScript frameworks (React, Vue.js) to improve application performance'
            },
            {
                id: '3',
                description: 'Collaborated with UX/UI designers to create intuitive user interfaces.'
            },
        ]
    },
    {
        id: '2',
        title: 'Front-end Developer',
        company: 'WebSolutions Co.',
        location: 'New York, USA',
        startDate: '2017-01',
        endDate: '2021-03',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dignissim nisi, vel placerat arcu. Donec ac ante id mauris faucibus tincidunt.',
        tasks: [
            {
                id: '1',
                description: 'Developed and maintained client websites using HTML5, CSS3, and JavaScript'
            },
            {
                id: '2',
                description: 'Optimized website performance and implemented SEO best practices'
            },
            {
                id: '3',
                description: 'Worked closely with back-end developers to integrate front-end with server-side logic'
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
                description: "Responsable en charge de la refonte des applications Web et Mobile et de leur migrations vers les technologies (React, React Native, NextJs et Angular) les plus récentes pour une amélioration significative des performances, facilité de maintenance et scalabilité optimale."
            },
            
            {
                id: '5',
                description: 'Collaboration étroite avec les développeurs Back-end pour une bonne intégration de la logique côté serveur (API).'
            },
            {
                id: '6',
                description: 'Publication des applications mobiles sur Play Store pour les rendre accessible au public.'
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
                description: 'Développement des applications Web et Mobile robustes et performantes de A à Z'
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
                description: 'Intégration des tests de bout en bout des solutions avec Jest, Cypress et Selenium  '
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