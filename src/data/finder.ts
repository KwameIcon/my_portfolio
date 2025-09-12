import { GrProjects, GrResume } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { MdContactPage } from 'react-icons/md';
import { LocateIcon } from 'lucide-react';
import { PiBrowser } from 'react-icons/pi';


export type Links = {
    icon: IconType;
    title: string;
    url: string;
}


export type finderLinks = {
    quickLinks: {
        title: string;
        links: Links[];
    }
    forYou: {
        title: string;
        links: Links[];
    }
}



export const finderLinks: finderLinks = {
    quickLinks: {
        title: 'Quick Links',
        links: [
            {
                icon: GrProjects,
                title: 'My Projects',
                url: 'projects'
            },
            {
                icon: GrResume,
                title: 'My Resume',
                url: 'resume'
            },
            {
                icon: MdContactPage,
                title: 'Contact Me',
                url: 'contact'
            },
            {
                icon: LocateIcon,
                title: 'Locate Me',
                url: 'locate'
            }
        ]
    },
    forYou: {
        title: 'For You',
        links: [
            {
                icon: PiBrowser,
                title: 'Edge',
                url: 'edge'
            }
        ]
    }
}