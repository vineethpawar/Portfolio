import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import LightOutlinedIcon from '@mui/icons-material/LightOutlined';
import LightIcon from '@mui/icons-material/Light';
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
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    return (
        <div className={styles.container}>
            <div className={isSidebarTop ? styles.icons_container_top : styles.icons_container_bottom}>

                <div className={isSidebarTop ? styles.line_top : styles.line_bottom}></div>
                {!isSidebarTop && iconsLeftArray?.map(icon => <Link passHref href={icon.href} key={icon.href}>
                    <a target='_blank' rel="noopener noreferrer">
                        <icon.icon className={styles.icon} />
                    </a>
                </Link>)
                }

                {isSidebarTop &&
                    <div className='overflow-hidden'>
                        {Array(3).fill(0)?.map((item, index) => index === activePage ?
                            <div className='py-2' onClick={() => { setActivePage(index) }}>
                                <AdjustOutlinedIcon className={styles.icon} />
                            </div>
                            :
                            <div className='py-2' onClick={() => { setActivePage(index) }}>
                                <CircleOutlinedIcon className={styles.icon} />
                            </div>
                        )}
                        <div className={styles.bulb_icon}>
                            {isDarkTheme ?
                                <LightOutlinedIcon onClick={() => setIsDarkTheme(theme => !theme)} className=' h-9 w-9 opacity-90' style={{ marginTop: '-5px' }} />
                                :
                                <LightIcon onClick={() => setIsDarkTheme(theme => !theme)} className=' h-9 w-9' style={{ marginTop: '-5px' }} />
                            }
                        </div>
                    </div>

                }


            </div>

        </div>
    )
}

export default Sidebar