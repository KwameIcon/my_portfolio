import { InfoIcon } from "lucide-react";
import { BsSuitcase2 } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { TbUserStar } from "react-icons/tb";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { MdContactMail, MdSchool } from "react-icons/md";
import Link from "next/link";





const generalInfo = () => {
    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70 text-[16px]">

            <h2 className="text-xl font-semibold">Welcome 👋</h2>

            <h2 className="text-xl">Hi, I&apos;m Kwame Anag-bey, a Full-Stack Software Engineer.</h2>

            <p className="tracking-wider leading-loose">
                I specialize in building dynamic, high-performance web applications from concept to deployment. With expertise in the JavaScript ecosystem, I leverage frameworks like React and Next.js for front-end development, and PHP with Laravel and SLIM for robust back-end solutions. I&apos;m passionate about clean, efficient code and delivering a seamless user experience.
            </p>

            <p className="tracking-wider leading-loose">
                In addition to development, I also have experience in Quality Assurance, where I use tools such as Playwright and Selenium to ensure applications are thoroughly tested and reliable.
            </p>

            <p className="tracking-wider leading-loose">
                You&apos;re currently on my personal website, which I&apos;ve designed to simulate a desktop environment called IkOS. Please feel free to explore and interact with it—all of my projects, professional skills, and contact information are organized as files and applications within this unique interface.
            </p>

        </article>

    )
}


const whatIDo = () => {
    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70 text-[16px] ">

            <h2 className="text-xl font-semibold">What I do</h2>

            <p className="tracking-wider leading-loose">
                I primarily work on full-stack web applications, leveraging a robust set of modern technologies. My front-end development is centered on the JavaScript ecosystem, using React and Next.js to build dynamic and responsive user interfaces. I also utilize popular UI libraries like PrimeReact and Shadcn to create polished, high-quality designs.
            </p>

            <p className="tracking-wider leading-loose">
                My primary front-end project is the Glaucoma Diagnosis AI, an artificial intelligence system designed to help clinicians accurately predict a patient&apos;s glaucoma state. In this role, I was solely responsible for the web application, from designing the user interface to integrating it with the back-end for a seamless operation.
            </p>

            <p className="tracking-wider leading-loose">
                Beyond my front-end focus, I consider myself a proficient full-stack developer, with a solid command of back-end technologies. I have a strong foundation in PHP using frameworks like Laravel and SLIM, which enables me to build and manage scalable, end-to-end web solutions.
            </p>

            <p className="tracking-wider leading-loose">
                I also have experience in Quality Assurance, where I apply tools such as Playwright and Selenium to automate testing and ensure that applications meet high standards of reliability and performance.
            </p>

        </article>

    )
}


const experience = () => {

    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70 ">

            <h2 className="text-lg font-semibold">Professional Experience</h2>

            <Accordion multiple>

                <AccordionTab headerTemplate={<h2 className="text-black">Full-Stack Developer (National Service) — RX Health Info Systems</h2>} className="!text-gray-400">
                    <ul className="ml-5 flex flex-col items-start gap-3">
                        <li>Developed a comprehensive SMS Management System for internal use, designed to monitor and control SMS usage across all of the company&apos;s health applications that relied on a central SMS API.</li>
                        <li>Architected and implemented the entire application as a full-stack project, using Laravel for the back-end APIs and Next.js for the front end.</li>
                        <li>Created a user-friendly and intuitive dashboard by utilizing UI libraries such as PrimeReact, Ant Design (AntD), and Chart.js, enabling the company to track SMS consumption, set usage limits for individual projects, and analyze usage data for actionable insights.</li>
                    </ul>
                </AccordionTab>
                <AccordionTab headerTemplate={<h2 className="text-black">(Front-End Developer) Glaucoma Diagnosis AI (Student) — University of Cape Coast</h2>}>
                    <ul className="ml-5 flex flex-col items-start gap-3">
                        <li>Developed the front-end for an AI-powered system that assists clinicians in accurately predicting a patient&apos;s glaucoma state.</li>
                        <li>Designed and built a seamless and intuitive user interface using Next.js, enhancing the user experience with animations and transitions from libraries like AOS and Framer Motion.</li>
                    </ul>
                </AccordionTab>
            </Accordion>

        </article>
    )
}


const skills = () => {
    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70 ">

            <h2 className="text-lg font-semibold">Skills</h2>

            <Accordion multiple activeIndex={[0]}>
                <AccordionTab headerTemplate={<h2 className="text-black">Languages</h2>}>
                    <ul className="ml-5 flex flex-col items-start gap-3 list-circle">
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                    </ul>
                </AccordionTab>
                <AccordionTab headerTemplate={<h2 className="text-black">Front-End</h2>}>
                    <ul className="ml-5 flex flex-col items-start gap-3 list-circle">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Tailwindcss</li>
                        <li>UI Libraries: PrimeReact, Ant Design, Shadcn, Chart.js, Magic UI, Chakra UI</li>
                        <li>Animation Libraries: AOS, Framer Motion</li>
                    </ul>
                </AccordionTab>
                <AccordionTab headerTemplate={<h2 className="text-black">Back-End</h2>} >
                    <ul className="ml-5 flex flex-col items-start gap-3 list-circle">
                        <li>Laravel</li>
                        <li>SLIM</li>
                    </ul>
                </AccordionTab>
                <AccordionTab headerTemplate={<h2 className="text-black">Quality Assurance</h2>}>
                    <ul className="ml-5 flex flex-col items-start gap-3 list-circle">
                        <li>Selenium</li>
                        <li>Playwright </li>
                    </ul>
                </AccordionTab>
                <AccordionTab headerTemplate={<h2 className="text-black">Tools</h2>}>
                    <ul className="ml-5 flex flex-col items-start gap-3 list-circle">
                        <li>Git & GitHub</li>
                        <li>npm</li>
                        <li>Vercel</li>
                    </ul>
                </AccordionTab>
            </Accordion>

        </article>
    )
}


const education = () => {
    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70 ">

            <h2 className="text-lg font-semibold">Education</h2>

            <Accordion multiple >
                <AccordionTab headerTemplate={<h2 className="text-black">Bachelor of Science in Information Technology</h2>} >
                    <address className="ml-5 flex flex-col items-start gap-3 list-circle">
                        University of Cape Coast <br />
                        2020 - 2024
                    </address>
                </AccordionTab>
                <AccordionTab headerTemplate={<h2 className="text-black">High School</h2>}>
                    <address className="ml-5 flex flex-col items-start gap-3 list-circle">
                        SIMMS Senior High School <br />
                        2017 - 2020
                    </address>
                </AccordionTab>
            </Accordion>

        </article>
    )
}



function Contact() {

    



    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-4 justify-start text-black/70 ">

            <h2 className="text-lg font-semibold">Contact Details</h2>

            <address dir="rtl" className="ml-5 flex flex-col items-start gap-3 list-circle">
                <div dir="ltr" className="flex items-start gap-2">
                    <span>Phone:</span>
                    <div className="flex flex-col">
                        <span>+233 208104329</span>
                        <span>+233 257756365</span>
                    </div>
                </div>
                <span>Email: kwameicon.gh.bs@gmail.com</span>
                <span>Location: Accra, Ghana</span>
            </address>

            <hr title="Or" />

            <address dir="rtl">
                <p><span>GitHub: </span><Link href={'https://github.com/KwameIcon/'} target="_blank" >https://github.com/KwameIcon</Link></p>
            </address>

        </article>
    )
}





export const resumeTabs = [
    { id: 'general', label: 'General Info', content: generalInfo(), icon: InfoIcon },
    { id: 'whatIDo', label: 'What I do', content: whatIDo(), icon: BsSuitcase2 },
    { id: 'experience', label: 'Experience', content: experience(), icon: TbUserStar },
    { id: 'skills', label: 'Skills', content: skills(), icon: GiSkills },
    { id: 'education', label: 'Education', content: education(), icon: MdSchool },
    { id: 'contact', label: 'Contact Details', content: <Contact />, icon: MdContactMail },
]