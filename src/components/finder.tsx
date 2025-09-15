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
                onCancel={() =>  dispatch(closeTaskbarIcon({ id: 'finder' })) }
                className='!relative !overflow-hidden !rounded-lg'
            >
                <div className='absolute left-0 top-0 w-[250px] h-full bg-[#FFD098] flex flex-col items-start justify-start gap-10'>
                    <header className='w-full h-32 text-lg font-bold border-b border-[#ADA339] flex flex-wrap items-end justify-start gap-5 p-2'>
                        <Image src="/me/me.jpg" alt="User Avatar" width={55} height={50} className='w-auto h-auto rounded-full' />
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
                <div className='absolute right-0 top-0 w-[549px] h-full bg-white flex flex-col items-center justify-start gap-2 px-3 '>
                    <p className='w-full border-b border-[#FFD098] p-2 flex items-center justify-end text-xs'>ABOUT THE DEVELOPER (ME)</p>
                    <main className='w-full flex flex-col items-center justify-start gap-5 p-4'>
                        <div className='w-full flex flex-col items-center justify-center gap-1'>
                            <div className='w-32 h-32 rounded-full border-2 border-[#FFD098] p-2 overflow-hidden'>
                                <Image src="/me/me.jpg" alt="User Avatar" width={55} height={50} className='w-full h-full rounded-full object-cover' />
                            </div>
                            <h2 className='text-md font-semibold w-full text-center'>I’M ANAG-BEY</h2>
                        </div>
                        <h2 className='w-full text-center text-md font-semibold -mt-3'>I&apos;M THE CREATOR OF IKOS WEB</h2>
                        <div className='w-full flex flex-col items-center justify-center gap-3'>
                            <p className='text-sm text-gray-700'>
                                
                                I am a fullstack web developer&#44; with an infinite amount of love for frontend web development&#44; esp JavaScript&#44; TypeScript&#44; and for popular frontend frameworks like React and Next js. UI libraries such as ANTD&#44; SHADCN&#44; PRIMEREACT etc.
                            </p>
                            <p>
                                However&#44; my love for tech doesn&apos;t end there. I enjoy writing backend APIs&#44; scripts&#44; working with databases&#44; and my fav platforms are PHP&#44; (Laravel&#44; SLIM).
                            </p>
                            <p>
                                Additionally&#44; I have a strong interest in Quality Assurance (QA) and ensuring that applications are thoroughly tested for bugs and user experience. I enjoy performing manual testing and automated testing using tools like Playwright to ensure applications are of high quality and perform well.
                            </p>
                            <p>
                                Want to know more&#44; yes there are more to know about me because I&apos;m still new. 😂
                            </p>
                            <p>
                                Loiter around&#44; enjoy my handiwork and do remember that <strong> &lt;h1&gt;I&apos;m the coders code&lt;/h1&gt; </strong>
                            </p>
                        </div>
                    </main>
                </div>

            </Modal>
        </>
    );
}

