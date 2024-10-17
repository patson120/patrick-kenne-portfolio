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
        id: '1',
        title: 'Développeur senior Front-end',
        company: 'TechCorp Inc.',
        location: 'Paris, France',
        startDate: '2021-01',
        endDate: 'Présent',
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

export default {
    languages,
    experiences_en,
    experiences_fr
}