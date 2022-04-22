import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Link from 'next/link';

interface ISidebar {
    placement: 'top' | 'bottom';
}

const Sidebar = (props: ISidebar) => {
    const isSidebarTop: boolean = props?.placement === 'top';
    const iconsLeftArray = [
        { icon: GitHubIcon, href: 'https://github.com/vineethpawar' },
        { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/vineethpawar/' },
        { icon: EmailIcon, href: 'mailto:vineethpawar99@gmail.com' },
    ]

    const [activePage, setActivePage] = useState(0);
    return (
        <div className={styles.container}>
            <div className={isSidebarTop ? styles.icons_container_top : styles.icons_container_bottom}>

                <div className={isSidebarTop ? styles.line_top : styles.line_bottom}></div>
                {!isSidebarTop && iconsLeftArray?.map(icon => <Link passHref href={icon.href}>
                    <a target='_blank' rel="noopener noreferrer">
                        <icon.icon className={styles.icon} />
                    </a>
                </Link>)
                }

                {isSidebarTop && Array(3).fill(0)?.map((item, index) => index === activePage ?
                    <div className='cursor-pointer' onClick={() => { setActivePage(index) }}>
                        <AdjustOutlinedIcon className={styles.icon} />
                    </div>
                    :
                    <div className='cursor-pointer' onClick={() => { setActivePage(index) }}>
                        <CircleOutlinedIcon className={styles.icon} />
                    </div>
                )}
            </div>

        </div>
    )
}

export default Sidebar