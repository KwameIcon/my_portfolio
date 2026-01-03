import { Lens } from "@/components/magicui/lens";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { BsEyeSlash, BsMarkdown, BsRobot } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import { MdAnimation, MdSms } from "react-icons/md";
import { useSelector } from "react-redux";


function Glaucoma() {

    const mouse = useSelector((state: RootState) => state.mouse);


    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-5 justify-start text-black/70 text-[16px]">

            <h2 className="text-xl font-semibold">GLAUCOMA DIAGNOSIS AI</h2>

            <p className="tracking-wider leading-loose">
                The Glaucoma Diagnosis AI is an intelligent system designed to assist clinicians in the accurate prediction of a patient&apos;s glaucoma state. Glaucoma is a leading cause of irreversible blindness, and its early detection is crucial for effective treatment. This project addresses this challenge by generating report based on the scanned values provided. The system predict on the report, the glaucoma status, functional and structural damage of Left eye and the Right eye. Stating the status of the eye either early glaucoma, Moderate or Severe based on the predicted results.
            </p>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Dashboard</h2>
                <Lens position={mouse} zoomFactor={2} lensSize={200} >
                    <div className="w-[400px] h-[300px]">
                        <Image
                            src="/docs/g_dashboard.png"
                            alt="Welcome"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Lens>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Sample Generated report</h2>
                <Lens defaultPosition={{ x: 20, y: 3 }} position={mouse} zoomFactor={2} lensSize={200} >
                    <div className="w-[400px] h-[300px]">
                        <Image
                            src="/docs/g_report.png"
                            alt="Welcome"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Lens>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">My Role & Contributions</h2>

                <p className="tracking-wider leading-loose">
                    As the lead front-end developer, I was responsible for creating the entire user-facing application for this system. My work spanned the full front-end development cycle, from initial design to final implementation and integration.
                </p>
                <ul className="ml-10 list-disc">
                    <li>Front-End Development: Architected and built the application using Next.js to ensure a fast, scalable, and SEO-friendly user interface.</li>
                    <li>API Integration: Successfully connected the front end to the back-end AI model, allowing for a seamless flow of data between the user interface and the diagnostic engine.</li>
                    <li>Interactive Animations: Utilized animation libraries like Framer Motion and AOS to create a smooth, intuitive, and visually engaging user experience.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">Technical Stack</h2>
                <ul className="ml-10 list-disc">
                    <li><span>Language: Typescript</span></li>
                    <li><span>Framework: Next.js</span></li>
                    <li><span>Styling: Tailwindcss</span></li>
                    <li><span>UI Libraries: PrimeReact, Antd</span></li>
                    <li><span>Animation Libraries: Framer Motion, AOS (Animate on Scroll)</span></li>
                </ul>
            </div>

        </article>
    )
}



function SMS() {
    const mouse = useSelector((state: RootState) => state.mouse);



    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-5 justify-start text-black/70 text-[16px]">

            <h2 className="text-xl font-semibold">SMS MANAGEMENT PROXY SYSTEM</h2>

            <p className="tracking-wider leading-loose">
                The SMS Management System is an internal, full-stack application developed for RX Health Info Systems (National Service Personel), a software developing company specialized in health applications. The primary goal of the project was to provide the company with granular control and visibility over its SMS API usage, which was a critical, but unmanaged, resource shared across all client projects. The system provides real-time monitoring, usage analytics, and a powerful control mechanism to manage quotas and prevent misuse.
            </p>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Sample Admin Dashboard</h2>
                <Lens defaultPosition={{ x: 20, y: 3 }} position={mouse} zoomFactor={2} lensSize={200} >
                    <div className="w-[400px] h-[300px]">
                        <Image
                            src="/docs/sms_d.png"
                            alt="Welcome"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Lens>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Sample Developer Dashboard</h2>
                <Lens defaultPosition={{ x: 20, y: 3 }} position={mouse} zoomFactor={2} lensSize={200} >
                    <div className="w-[400px] h-[300px]">
                        <Image
                            src="/docs/sms_dd.png"
                            alt="Welcome"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Lens>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">My Role & Contributions</h2>

                <p className="tracking-wider leading-loose">
                    As a full-stack developer, I was responsible for the end-to-end development of the entire application, from the database design to the user-facing interface. </p>
                <ul className="ml-10 list-disc">
                    <li>Full-Stack Architecture: Architected and developed a robust, scalable system with Laravel for the back-end, typescript and Next.js for the front-end.</li>
                    <li>API & Logic: Built the back-end APIs to securely track and log SMS usage from all company projects. This included implementing logic to set consumption limits for each product over specific time periods.</li>
                    <li>Data Visualization & Analytics: Designed and implemented a comprehensive dashboard that allowed the company to monitor SMS usage across all projects, draw insights from analytics, and manage resource allocation.</li>
                    <li>Intuitive UI/UX: Utilized a combination of UI libraries such as PrimeReact and Ant Design (AntD), alongside Chart.js for data visualization, to create a user-friendly and highly functional interface.</li>
                    <li>utilizes React Query for smooth data fetching and other minor libraries such as loaders and toastifies to enhance user experience and user-feedbacks</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">Technical Stack</h2>
                <ul className="ml-10 list-disc">
                    <li><span>Language: Typescript, PHP</span></li>
                    <li><span>Frameworks: Next.js, Laravel</span></li>
                    <li><span>Styling: Tailwindcss</span></li>
                    <li><span>UI Libraries: PrimeReact, Antd, Chart.js</span></li>
                </ul>
            </div>

        </article>
    )
}



function AnimateHub() {



    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-5 justify-start text-black/70 text-[16px]">

            <h2 className="text-xl font-semibold">RX HEALTH INFO SYSTEM WEBSITE CLONE</h2>

            <p className="tracking-wider leading-loose">
                Animate Hub is a website clone of RX Health Info Systems portfolio website, it was my second justification (National Service Personel) project given by my supervisor to built to demonstrate a mastery of front-end development, modern UI design, and web animations. The project focuses on recreating a professional company website while incorporating dynamic animations to create a more engaging and visually rich user experience. It serves as a comprehensive portfolio piece, highlighting skills in building complex, multi-page applications.</p>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">My Role & Contributions</h2>

                <p className="tracking-wider leading-loose">
                    I was the sole developer on this project, responsible for the cloning. </p>
                <ul className="ml-10 list-disc">
                    <li>Full Website Development: Developed the complete front-end for the site, from the homepage to all subsequent pages, using React.js with TypeScript to ensure a robust and maintainable codebase.</li>
                    <li>Dynamic Animations: Integrated the Animate on Scroll (AOS) library to add a layer of dynamic visual interest, making the user experience more interactive and memorable.</li>
                    <li>Responsive Design: Ensured the website&apos;s layout and animations are fully responsive, providing a seamless and consistent experience across all devices and screen sizes.</li>
                </ul>
            </div>


            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">Technical Stack</h2>
                <ul className="ml-10 list-disc">
                    <li><span>Language: Typescript</span></li>
                    <li><span>Framework: React.js</span></li>
                    <li><span>Styling: Tailwindcss</span></li>
                    <li><span>Animation Libraries: AOS (Animate on Scroll)</span></li>
                    <li><span>Deployment: Vercel</span></li>
                </ul>
            </div>


            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">View Live Project</h2>
                <ul className="ml-10 list-disc">
                    <li><span>URL: </span><Link href={"https://animate-icon.vercel.app/"} target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>animate-icon.vercel.app</Link></li>
                </ul>
            </div>
        </article>
    )
}



function Game() {



    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-5 justify-start text-black/70 text-[16px]">

            <h2 className="text-xl font-semibold">TILE FLIP GAME</h2>

            <p className="tracking-wider leading-loose">
                The Tile Flip Game is a classic memory matching game developed as a lightweight, single-page web application. This game was my introductory project at Rx Health and it&apos;s purpose was to demonstrate proficiency in front-end development by creating an interactive and responsive user experience with a focus on clean design and efficient code. The game challenges users to find matching pairs of flags, and its simple, engaging nature makes it a perfect example of a small-scale, polished project.</p>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">My Role & Contributions</h2>

                <p className="tracking-wider leading-loose">
                    As the sole developer, I was responsible for the entire project, from coding the game logic to designing its interface. </p>
                <ul className="ml-10 list-disc">
                    <li>Game Logic Implementation: Developed the core game mechanics, including shuffling tiles, managing the state of flipped cards, checking for matches, and tracking the number of moves.</li>
                    <li>Front-End Development: Built the user interface using React.js with TypeScript for strong typing and code robustness.</li>
                    <li>Styling: Used Tailwind CSS to create a modern, clean, and highly customizable design with a responsive layout that works on all devices.</li>
                </ul>
            </div>


            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">Technical Stack</h2>
                <ul className="ml-10 list-disc">
                    <li><span>Language: Typescript</span></li>
                    <li><span>Framework: React.js</span></li>
                    <li><span>Styling: Tailwindcss</span></li>
                    <li><span>Deployment: Vercel</span></li>
                </ul>
            </div>


            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">View Live Project</h2>
                <ul className="ml-10 list-disc">
                    <li><span>URL: </span><Link href={"https://tile-flip-game-chi.vercel.app/"} target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>tile-flip-game-chi.vercel.app</Link></li>
                </ul>
            </div>
        </article>
    )
}


function BrowserMarkdown() {



    return (
        <article id="general" className="w-full h-full p-4 flex flex-col gap-5 justify-start text-black/70 text-[16px]">

            <h2 className="text-xl font-semibold">IN BROWSER MARKDOWN</h2>

            <p className="tracking-wider leading-loose">
The In-Browser Markdown application is a personal (school) project designed to be a lightweight and efficient tool for writers and developers. It provides a clean, distraction-free environment for creating and editing markdown files, with a real-time preview of the formatted text. The application prioritizes user experience by managing all files locally, ensuring that users&apos; work is secure and accessible without the need for a server.</p>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">My Role & Contributions</h2>

                <p className="tracking-wider leading-loose">
                    I was the sole developer on this project, responsible for its full-stack implementation and design. </p>
                <ul className="ml-10 list-disc">
                    <li>Front-End Development: Built the entire user interface using React.js with TypeScript for type safety and code quality. The application was styled using Styled Components to ensure a modular and maintainable codebase.</li>
                    <li>Local File Management: Implemented a file management system using the browser&apos;s Local Storage to save and retrieve user files, providing a seamless and secure experience without a server.</li>
                    <li>Responsive Design: Ensured the application is fully responsive, offering an optimal user experience on both desktop and mobile devices.</li>
                </ul>
            </div>


            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">Technical Stack</h2>
                <ul className="ml-10 list-disc">
                    <li><span>Language: Typescript</span></li>
                    <li><span>Framework: React.js</span></li>
                    <li><span>Styling: Styled Components</span></li>
                    <li><span>Data Storage: LocalStorage</span></li>
                    <li><span>Deployment: Vercel</span></li>
                </ul>
            </div>


            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">View Live Project</h2>
                <ul className="ml-10 list-disc">
                    <li><span>URL: </span><Link href={"https://iconinbrowsermarkdown.vercel.app/"} target="_blank" style={{ color: 'black', textDecoration: 'underline' }}>iconinbrowsermarkdown.vercel.app</Link></li>
                </ul>
            </div>
        </article>
    )
}




// Agentic Engineering Projects
function AgenticEngineering() {
    return (
        <article id="agentic-engineering" className="w-full h-full p-4 flex flex-col gap-5 justify-start text-black/70 text-[16px]">
            <h2 className="text-xl font-semibold uppercase">Autonomous AI Agents & Automation</h2>

            <p className="tracking-wider leading-loose">
                In my current role, I architect and deploy <strong>Agentic Workflows</strong> designed to bridge the gap between Large Language Models and real-world business operations. Unlike standard chatbots, these agents are equipped with &quot;tools&quot; that allow them to interact with internal systems, process complex documentation, and perform autonomous data management. My work focuses on transforming static AI into a proactive workforce that handles repetitive tasks with precision.
            </p>

            <div className="flex flex-col gap-2">
                <h2 className="font-semibold">Key Implementations & Contributions</h2>
                <p className="tracking-wider leading-loose">
                    I am responsible for the end-to-end development of these agents, ensuring they can safely and accurately execute operations within our ecosystem.
                </p>
                <ul className="ml-10 list-disc flex flex-col gap-2">
                    <li><strong>Automated Claims Processing:</strong> Built an agent capable of accessing and assessing insurance applications, extracting key data points, and determining claim validity based on predefined business logic.</li>
                    <li><strong>Action-Oriented Chatbots:</strong> Developed conversational interfaces that do more than answer questions; they interact with <strong>Backend APIs</strong> to create, update, and retrieve user data in real-time.</li>
                    <li><strong>Tool & Function Calling:</strong> Engineered the communication layer between AI models and Laravel-based APIs, allowing the agent to &quot;choose&quot; the correct endpoint to call based on the user&apos;s intent.</li>
                    <li><strong>Data Orchestration:</strong> Automated the lifecycle of data entry and validation, significantly reducing manual overhead for administrative tasks.</li>
                </ul>
            </div>

            <div className="flex flex-col gap-2 pb-5">
                <h2 className="font-semibold">Technical Stack</h2>
                <ul className="ml-10 list-disc">
                    <li><span>AI Orchestration: OpenAI SDK / Digital Ocean Agent Platform</span></li>
                    <li><span>Backend Integration: PHP (Laravel) & RESTful APIs</span></li>
                    <li><span>State Management: Real-time Database Synchronization</span></li>
                    <li><span>Automation Focus: Function Calling & Agentic Workflows</span></li>
                </ul>
            </div>
        </article>
    )
}



export const projectsTabs = [
    { id: 'glaucoma', label: 'Glaucoma AI P.', content: <Glaucoma />, icon: BsEyeSlash },
    { id: 'sms', label: 'SMS Man. Sys.', content: <SMS />, icon: MdSms },
    { id: 'animateHub', label: 'Animate Hub', content: <AnimateHub />, icon: MdAnimation },
    { id: 'game', label: 'Tile Flip Game', content: <Game />, icon: GiGamepad },
    { id: 'browserMarkdown', label: 'B. Markdown', content: <BrowserMarkdown />, icon: BsMarkdown },
    { id: 'agenticEngineering', label: 'Agentic Eng.', content: <AgenticEngineering />, icon: BsRobot },    
]