import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bankicon,
    bankicon_white,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "UI Design Lead",
        icon: web,
    },
    {
        title: "Web Developer",
        icon: mobile,
    },
    {
        title: "UX Enthusiast",
        icon: backend,
    },
    {
        title: "Sci-fi Fan",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "UX/UI Design Lead",
        company_name: "CIBC",
        icon: bankicon,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Present",
        points: [
            "Lorem ipsum dolor sit amet. Ea soluta consequuntur quo quia consequatur ut accusantium.",
            "A accusamus sunt sit ipsum ipsum aut iusto deserunt? Est quia quis qui suscipit porro sed consectetur provident aut tempore dolor ut autem soluta.",
            "Qui totam illum nam temporibus eius qui dolorem porro non deserunt deserunt.",
            "Et sunt unde et nulla sint est sequi commodi et voluptas eligendi At officia nulla.",
        ],
    },
    {
        title: "Web/iOS Front End Developer",
        company_name: "CIBC",
        icon: bankicon_white,
        iconBg: "#383E56",
        date: "Apr 2018 - Jan 2022",
        points: [
            "Ut veniam molestiae est vero maxime quo pariatur numquam et amet harum eos illum nihil.",
            "Sed officiis corporis et doloribus porro qui voluptates suscipit et quis rerum in doloribus illo.",
            "Ut temporibus quia quo aperiam galisum et molestias enim vel distinctio error.",
            " Et ipsum molestiae aut quae similique in libero similique vel illum nesciunt molestias enim vel distinctio error.",
        ],
    },
    {
        title: ".NET and Full Stack Developer",
        company_name: "CIBC",
        icon: bankicon,
        iconBg: "#E6DEDD",
        date: "May 2013 - Apr 2018",
        points: [
            "Ut quaerat dolorem est nesciunt facilis qui iure voluptas qui necessitatibus earum qui necessitatibus molestias.",
            "Et deleniti molestiae et quia rerum sit maxime sint et facilis pariatur et deleniti possimus eum quis quaerat ut porro culpa.",
            "Qui laboriosam numquam in repellendus similique et iste temporibus.",
            "Aut perferendis incidunt vel ullam quaerat aut doloremque excepturi eum deleniti quibusdam ea incidunt aperiam.",
        ],
    },
    {
        title: "Java Full StackDeveloper",
        company_name: "CIBC",
        icon: bankicon_white,
        iconBg: "#383E56",
        date: "May 2006 - Apr 2013",
        points: [
            "Sed doloremque assumenda ex eligendi reiciendis aut nisi maxime qui voluptatibus delectus.",
            "At dignissimos recusandae in magni aliquam eos nulla aperiam et dolorem asperiores quo dolor exercitationem est deserunt nisi.",
            "Vel nulla aliquam ut voluptatem voluptatem et dolorem obcaecati nam recusandae animi qui minus suscipit.",
            " Non illum laborum qui nisi veritatis et dolorem impedit eos magni exercitationem.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };