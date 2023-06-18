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
    tailwind,
    nodejs,
    git,
    figma,
    bankicon,
    bankicon_white,
    hobby_site_1,
    hobby_site_2,
    hobby_site_3,
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
        name: "figma",
        icon: figma,
    },
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    }
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
        name: "Hobby Sea Side Travel",
        description:
            "This is a responsive design exercise to create a fake travel/beach themed site. Using media queries to cover break point design. Same with site navigation for media queries.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "responsive design",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: hobby_site_1,
        source_code_link: "https://github.com/susgupta/responsive_travel_site",
    },
    {
        name: "Resposive Slide Video Site",
        description:
            "This is just a basic design exercise for landing page with video looping style background.  This adds mutiple video 'slides' and a different overlay technique.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "responsive design",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: hobby_site_2,
        source_code_link: "https://github.com/susgupta/html_video_responsive_site",
    },
    {
        name: "HTML Dynamic Video Background Example",
        description:
            "This is just a basic design exercise for landing page with video looping style background.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "responsive design",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: hobby_site_3,
        source_code_link: "https://github.com/susgupta/html_video_background",
    },
];

export { services, technologies, experiences, testimonials, projects };