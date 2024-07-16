import { Category, Publication, Volume } from "../lib/definitions";

export const volumes: Volume[] = [
    { name: 'Volume 1', link: '/archives/volume-1' },
]

export const editorialTeam = [
    {
        name: 'John Doe',
        affiliation: 'Web Development',
        position: 'Chairman'
    },
    {
        name: 'Jane Smith',
        affiliation: 'Machine Learning',
        position: 'Secretary'
    },
    {
        name: 'John Doe',
        affiliation: 'Web Development',
        position: 'Editor'
    },
];

export const publications: Publication[] = [
    {
        id: '1',
        title: 'Publication 1',
        publishDate: '12 July 2024',
        views: 10,
        downloads: 9,
        volume: 20,
        issue: "5, 14 July 2024",
        link: '/journals/education/1',
        author: 'Vincent O. D, Abel G. O',
        abstract: 'This is the abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'fish, chicken, goat, toilet, eat, cat, dog, mice'
    },
    {
        id: '2',
        title: 'Publication 2',
        publishDate: '13 July 2024',
        views: 20,
        downloads: 18,
        volume: 21,
        issue: "6, 15 July 2024",
        link: '/journals/physics/2',
        author: 'Jane D. O, John S. P',
        abstract: 'This is another abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'apple, orange, banana, grapes, mango, peach, plum, berry'
    },
    {
        id: '3',
        title: 'Publication 3',
        publishDate: '14 July 2024',
        views: 30,
        downloads: 27,
        volume: 22,
        issue: "7, 16 July 2024",
        link: '/journals/chemistry/3',
        author: 'Alice B. C, Robert D. E',
        abstract: 'This is yet another abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'water, air, fire, earth, metal, wood, spirit, ether'
    },
    {
        id: '4',
        title: 'Publication 4',
        publishDate: '15 July 2024',
        views: 40,
        downloads: 36,
        volume: 23,
        issue: "8, 17 July 2024",
        link: '/journals/biology/4',
        author: 'Emily F. G, David H. I',
        abstract: 'This is the fourth abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'lion, tiger, bear, elephant, giraffe, zebra, monkey, kangaroo'
    },
    {
        id: '5',
        title: 'Publication 5',
        publishDate: '16 July 2024',
        views: 50,
        downloads: 45,
        volume: 24,
        issue: "9, 18 July 2024",
        link: '/journals/mathematics/5',
        author: 'Frank J. K, Gina L. M',
        abstract: 'This is the fifth abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'algebra, geometry, calculus, statistics, trigonometry, number theory, analysis, topology'
    },
    {
        id: '6',
        title: 'Publication 6',
        publishDate: '17 July 2024',
        views: 60,
        downloads: 54,
        volume: 25,
        issue: "10, 19 July 2024",
        link: '/journals/medicine/6',
        author: 'Helen N. O, Ian P. Q',
        abstract: 'This is the sixth abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'heart, brain, liver, kidney, lung, stomach, pancreas, intestine'
    },
    {
        id: '7',
        title: 'Publication 7',
        publishDate: '18 July 2024',
        views: 70,
        downloads: 63,
        volume: 26,
        issue: "11, 20 July 2024",
        link: '/journals/engineering/7',
        author: 'Jack R. S, Karen T. U',
        abstract: 'This is the seventh abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'bridge, building, road, dam, tunnel, machine, vehicle, system'
    },
    {
        id: '8',
        title: 'Publication 8',
        publishDate: '19 July 2024',
        views: 80,
        downloads: 72,
        volume: 27,
        issue: "12, 21 July 2024",
        link: '/journals/environment/8',
        author: 'Laura V. W, Mark X. Y',
        abstract: 'This is the eighth abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'climate, pollution, conservation, ecosystem, sustainability, biodiversity, habitat, recycle'
    },
    {
        id: '9',
        title: 'Publication 9',
        publishDate: '20 July 2024',
        views: 90,
        downloads: 81,
        volume: 28,
        issue: "13, 22 July 2024",
        link: '/journals/social-sciences/9',
        author: 'Nina Z. A, Oscar B. C',
        abstract: 'This is the ninth abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'society, culture, behavior, interaction, community, identity, politics, economy'
    },
    {
        id: '10',
        title: 'Publication 10',
        publishDate: '21 July 2024',
        views: 100,
        downloads: 90,
        volume: 29,
        issue: "14, 23 July 2024",
        link: '/journals/technology/10',
        author: 'Paul D. E, Quinn F. G',
        abstract: 'This is the tenth abstract of the work. I want it to be a bit long so I will write all these to make it long.',
        keywords: 'software, hardware, internet, network, device, application, innovation, automation'
    },
];