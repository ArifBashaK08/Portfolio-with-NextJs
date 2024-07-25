
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

//Hero section details

export const name = "Arif Basha K."
export const role = "Web Developer"
export const gitHub = "https://github.com/ArifBashaK08"
export const linkedIn = "https://www.linkedin.com/in/arif-basha-kolimi-331428217/"
export const objective = "Passionate Web Developer skilled in React, Node, Express, and MongoDB, dedicated to creating immersive web applications and thriving in dynamic team environments."

//Projects Section details

// export const projects = [
//     {
//         id: 1,
//         title: "Foodie's Hub",
//         image: FoodieLogo,
//         desc: "A Food app UI prototype which build with React JS, Redux Toolkit and Tailwind CSS",
//         link: "https://food-app-prototype-arif-basha-ks-projects.vercel.app/"
//     },
//     {
//         id: 2,
//         title: "GetBlogs.com",
//         image: BloggingApp,
//         desc: "A full-stack Blogging app which build with React JS, SASS, Node JS, Express and MySQL",
//         link: "https://vibes-com.onrender.com"
//     },
//     {
//         id: 3,
//         title: "Vibes.com",
//         image: SocialMedia,
//         desc: "A Social-media app which build with React JS, Node JS, Express, MongoDB and MaterialUI",
//         link: "https://vibes-com.onrender.com"
//     },
// {
//     id: 4,
//     title: "GetBlogs.com",
//     image: BloggingApp,
//     desc: "A full-stack Blogging app which build with React JS, SASS, Node JS, Express and MySQL",
//     link: "https://vibes-com.onrender.com"
// },
// {
//     id: 5,
//     title: "Vibes.com",
//     image: SocialMedia,
//     desc: "A Social-media app which build with React JS, Node JS, Express, MongoDB and MaterialUI",
//     link: "https://vibes-com.onrender.com"
// },
// ]

//Projects Section details

//Skill List

export const skills = [
    {
        id: 1,
        icon: <FaHtml5 color="#F97300" size={25} />,
        skill: "HTML"
    },
    {
        id: 2,
        icon: <FaCss3Alt color="#4B70F5" size={25} />,
        skill: "CSS"
    },
    {
        id: 3,
        icon: <TbBrandJavascript color="black" fill="#F4CE14" size={25} />,
        skill: "JavaScript"
    },
    {
        id: 4,
        icon: <FaGitAlt color="#F97300" size={25} />,
        skill: "Git"
    },
    {
        id: 5,
        icon: <FaGithub size={25} fill={"white"} />,
        skill: "GitHub"
    },
    {
        id: 6,
        icon: <FaReact color="#03AED2" size={25} />,
        skill: "ReactJS"
    },
    {
        id: 7,
        icon: <FaNodeJs color="#7ABA78" size={25} />,
        skill: "Node.js"
    },
    {
        id: 8,
        icon: <SiExpress fill="#F4CE14" size={25} />,
        skill: "Express.js"
    },
    {
        id: 9,
        icon: <SiMongodb color="#7ABA78" size={25} />,
        skill: "MongoDB"
    },
    {
        id: 10,
        icon: <SiTailwindcss color="#03AED2" size={25} />,
        skill: "Tailwind CSS"
    },
    {
        id: 11,
        icon: <FaDocker color="#03AED2" size={25} />,
        skill: "Docker"
    },
    {
        id: 12,
        icon: <SiNextdotjs color="#fff" size={25} />,
        skill: "Next.js"
    },
    {
        id: 13,
        icon: <FaBootstrap color="#AF47D2" size={25} />,
        skill: "Bootstrap CSS"
    },
];

export const experience = [
    {
        id: 1,
        company: "Accenture Pvt Ltd.",
        role: "Application Development Analyst",
        desc: "Incident management for batch-processing jobs.",
        period: "2022 - current"
    },
]

export const projects = [
    {
        id: 1,
        title: "Foodie's Hub",
        image: "/FoodieLogo.png",
        desc: "A Food app UI prototype which build with React JS, Redux Toolkit and Tailwind CSS",
        link: "https://food-app-prototype-arif-basha-ks-projects.vercel.app/",
        color: "from-red-300 to-blue-300"
    },
    {
        id: 2,
        title: "Blogger.com",
        image: "/BloggingApp.png",
        desc: "A full-stack Blogging app which build with Server-side Rendering using eJs, Bootstrap CSS, Node JS, Express and MongoDB",
        link: "https://blogging-app-uyxc.onrender.com",
        color: "from-blue-300 to-violet-300"
    },
    {
        id: 3,
        title: "Vibes.com",
        image: "/SocialMedia.png",
        desc: "A Social-media app which build with React JS, Node JS, Express, MongoDB and MaterialUI",
        link: "https://vibes-com.onrender.com",
        color: "from-violet-300 to-purple-300"
    }
]