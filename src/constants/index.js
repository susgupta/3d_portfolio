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
            "Currently a UI/UX Design Lead creating design experiences and establishing and maintaining a design system.",
            "Created and maintaining a design system to be a common design language for the design team and the applications they support.",
            "Collaborating and working with fellow designers and clients, in addition to coaching other designers.",
            "A problem-solver that help our partners bring their visions to life.",
            "Created components and styles with Figma as well as proficient with Figma capabilities such as prototyping, variants and other Figma features.",
        ],
    },
    {
        title: "Web/iOS Front End Developer",
        company_name: "CIBC",
        icon: bankicon_white,
        iconBg: "#383E56",
        date: "Apr 2018 - Jan 2022",
        points: [
            "Lead developer/designer for frontline banking application platform.",
            "Worked and implemented on both front-end and back-end aspects, including internal as well system-to-system design.",
            "Assisted and coached other developers within the team.",
            "Used both web technologies (with Angular web) and native iOS as well.",
            "For native iOS researched and applied Apple design/development guidelines including using XCode development tools.",
        ],
    },
    {
        title: ".NET and Full Stack Developer",
        company_name: "CIBC",
        icon: bankicon,
        iconBg: "#E6DEDD",
        date: "May 2013 - Apr 2018",
        points: [
            "Lead developer for .NET application for frontline applications.",
            "Created and implemented using C# an application that integrates and faciltates coordination among other frontline banking applications.",
            "Leveraged development tools with .NET/C# and Visual Studio.",
            "Designed and developed a back-end system using Sprint REST MVC framework."
        ],
    },
    {
        title: "Java Full Stack Developer",
        company_name: "CIBC",
        icon: bankicon_white,
        iconBg: "#383E56",
        date: "May 2006 - Apr 2013",
        points: [
            "Java developer/programmer for frontline banking application.",
            "Was both developer and technical designer.",
            "Developed user interfaces in addition to back-end coding using Java EE and later Sprint REST MVC framework.",
            "Worked with database technologies including Oracle.",
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