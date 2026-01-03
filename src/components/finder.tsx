"use client";;
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { finderLinks, Links } from '@/data/finder';
import { RootState } from '@/store/store';
import { closeTaskbarIcon, openTaskbarIcon } from '@/store/slice/taskbarSlice';





export default function Finder() {

    const isFinderOpened = useSelector((state: RootState) => state.taskbar.taskbarIcons.find(icon => icon.id === 'finder')?.isOpen);
    // const taskbarIcons = useSelector((state: RootState) => state.taskbar.taskbarIcons);
    const dispatch = useDispatch();


    const handleOpenLink = (file: Links) => {
        dispatch(closeTaskbarIcon({ id: 'finder' }));
        dispatch(openTaskbarIcon({ id: file.url }));
    };





    return (
        <>
            <Modal
                centered
                open={isFinderOpened}
                footer={false}
                closable={false}
                width={800}
                styles={{ body: { height: 600 } }}
                onCancel={() => dispatch(closeTaskbarIcon({ id: 'finder' }))}
                className='!relative !overflow-hidden !rounded-lg'
            >
                <div className='absolute left-0 top-0 w-[250px] h-full bg-[#FFD098] flex flex-col items-start justify-start gap-10'>
                    <header className='w-full h-32 text-lg font-bold border-b border-[#ADA339] flex flex-wrap items-end justify-start gap-5 p-2'>
                        <Image src="/me/me_2.jpg" alt="User Avatar" width={55} height={50} className='w-auto h-auto rounded-full' />
                        <div className='grid grid-cols-1 gap-1'>
                            <span className='font-bold text-xs'>ANAG-BEY KWAME</span>
                            <span className='text-xs text-gray-500 whitespace-break-spaces'>Fullstack Web Developer</span>
                        </div>
                    </header>
                    <main className='w-full h-full overflow-y-auto flex flex-col items-start justify-start gap-8 p-4'>
                        <section className='w-full flex flex-col items-start justify-start gap-3'>
                            <h2 className='text-md font-semibold pb-2 w-full border-b border-[#ADA339]'>{finderLinks.quickLinks.title}</h2>
                            <ul className='w-full flex flex-col items-start justify-start gap-3'>
                                {finderLinks.quickLinks.links.map(link => (
                                    <li key={link.url} className='w-full h-8 flex items-center gap-2 cursor-pointer border-b border-[#FFD098] transition-colors duration-200 ease-linear hover:border-white' onClick={() => handleOpenLink(link)}>
                                        <link.icon className='' />
                                        <span className='text-sm'>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className='w-full flex flex-col items-start justify-start gap-3'>
                            <h2 className='text-md font-semibold pb-2 w-full border-b border-[#ADA339]'>{finderLinks.forYou.title}</h2>
                            <ul className='w-full flex flex-col items-start justify-start gap-3'>
                                {finderLinks.forYou.links.map(link => (
                                    <li key={link.url} className='w-full h-8 flex items-center gap-2 cursor-pointer border-b border-[#FFD098] transition-colors duration-200 ease-linear hover:border-white' onClick={() => handleOpenLink(link)}>
                                        <link.icon className='' />
                                        <span className='text-sm'>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
                <div className='absolute right-0 top-0 w-[549px] h-full overflow-y-scroll scrollbar-hide bg-white flex flex-col items-center justify-start gap-2 px-3 '>
                    <p className='w-full border-b border-[#FFD098] p-2 flex items-center justify-end text-xs'>ABOUT THE DEVELOPER (ME)</p>
                    <main className='w-full flex flex-col items-center justify-start gap-5 p-4'>
                        <div className='w-full flex flex-col items-center justify-center gap-1'>
                            <div className='w-32 h-32 rounded-full border-2 border-[#FFD098] p-2 overflow-hidden'>
                                <Image src="/me/me_1.jpg" alt="User Avatar" width={55} height={50} className='w-full h-full rounded-full object-cover' />
                            </div>
                            <h2 className='text-md font-semibold w-full text-center'>I’M ANAG-BEY</h2>
                        </div>
                        <h2 className='w-full text-center text-md font-semibold -mt-3'>I&apos;M THE CREATOR OF IKOS WEB</h2>
                        <div className='w-full flex flex-col items-center justify-center gap-3'>
                            <p className='text-sm text-gray-700'>
                                I am a Fullstack Web Developer with a passion for frontend excellence, specializing in JavaScript, TypeScript, and modern frameworks like React and Next.js, alongside UI libraries such as Ant Design, Shadcn/UI, and PrimeReact.
                            </p>

                            <p>
                                However, my expertise extends to the server side. I enjoy architecting backend APIs and managing databases, with a particular fondness for PHP and the Laravel ecosystem.
                            </p>

                            {/* New AI Agent Section */}
                            <p>
                                I am also deeply involved in <strong>Agentic Engineering</strong>, where I build autonomous AI agents to automate complex tasks. This includes developing agents that can assess insurance claims, handle real-time user queries, and interact directly with backend APIs to perform data operations on behalf of the user.
                            </p>

                            <p>
                                Additionally, I have a strong focus on Quality Assurance (QA). I ensure high-performance user experiences by combining manual testing with automated workflows using tools like Playwright.
                            </p>

                            <p className="italic">
                                Want to know more? There’s always more to discover, as I’m constantly evolving and learning. 😂
                            </p>

                            <p>
                                Loiter around, enjoy my handiwork, and remember: <strong>&lt;h1&gt;I'm the coder's code&lt;/h1&gt;</strong>
                            </p>
                        </div>
                    </main>
                </div>

            </Modal>
        </>
    );
}

