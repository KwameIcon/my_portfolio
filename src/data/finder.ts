import { GrProjects, GrResume } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { MdContactPage, MdRoomPreferences } from 'react-icons/md';
import { LocateIcon } from 'lucide-react';
import { PiBrowser } from 'react-icons/pi';
import { SiNetflix } from 'react-icons/si';
import { BiMusic } from 'react-icons/bi';


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
            },
            {
                icon: MdRoomPreferences,
                title: 'Preferences',
                url: 'preferences'
            }
        ]
    },
    forYou: {
        title: 'For You',
        links: [
            {
                icon: PiBrowser,
                title: 'Browse',
                url: 'browse'
            },
            {
                icon: SiNetflix,
                title: 'Netflix And Chill',
                url: 'netflix-and-chill'
            },
            {
                icon: BiMusic,
                title: 'Music',
                url: 'music'
            }
        ]
    }
}