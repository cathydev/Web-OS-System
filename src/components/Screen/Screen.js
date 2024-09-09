import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import styles from "../../styles/screen.module.css";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import ThankYou from "../ThankYou/ThankYou";
import Image from 'next/image';
import portrait from "../../../public/Icons/portrait.svg";
import heart from "../../../public/Icons/heart.svg";
import download from "../../../public/Icons/download.svg";
import projects from "../../../public/Icons/projects.svg";
import email from "../../../public/Icons/email.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { onButtonClick } from "../../utils";


const Computer = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const toggleComponent = (component) => {
        setActiveComponent(activeComponent === component ? null : component);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const icons = [
        {
            title: 'About Me',
            src: portrait,
            alt: 'My custom SVG',
            onClick: () => toggleComponent('About Me'),
        },
        {
            title: 'Projects',
            src: projects,
            alt: 'projects illustration',
            onClick: () => toggleComponent('Projects'),
        },
        {
            title: 'Contact Me',
            src: email,
            alt: 'email illustration',
            onClick: () => toggleComponent('Contact Me'),
        },
        {
            title: 'Download CV',
            src: download,
            alt: 'download icon',
            onClick: onButtonClick,
        },
        {
            title: 'Thank You',
            src: heart,
            alt: 'a heart',
            onClick: () => toggleComponent('Thank You'),
        },
    ];

    return (
        <div className="container">
            <div className="base">
                <div className={styles.screen}>
                    {activeComponent === 'Projects' && <Projects close={() => toggleComponent('Projects')} />}
                    {activeComponent === 'About Me' && <AboutMe close={() => toggleComponent('About Me')} />}
                    {activeComponent === 'Contact Me' && <ContactMe close={() => toggleComponent('Contact Me')} />}
                    {activeComponent === 'Thank You' && <ThankYou close={() => toggleComponent('Thank You')} />}
                    <div>
                        <ul className={styles.apps}>
                            {icons.map((item, index) => (
                                <li key={index}>
                                    <Tooltip title={item.title}>
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={60}
                                            height={70}
                                            onClick={item.onClick}
                                        />
                                    </Tooltip>
                                    <div>{item.title}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.taskbar}>
                        <div className={styles.taskbarContent}>
                            <Image
                                src={"/Icons/menu.png"}
                                alt="menu icon"
                                width={35}
                                height={35}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <LinkedInIcon />
                                    LinkedIn
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <GitHubIcon />
                                    GitHub
                                </MenuItem>
                            </Menu>
                            {activeComponent &&
                                <>
                                    {icons.map((item, index) => (
                                        item.title === activeComponent && (
                                            <div key={index} className={styles.open_window}>
                                                <Tooltip title={item.title}>
                                                    <Image
                                                        src={item.src}
                                                        alt={item.alt}
                                                        width={25}
                                                        height={25}
                                                        onClick={item.onClick}
                                                    />
                                                </Tooltip>
                                                <span>{item.title}</span>
                                            </div>
                                        )
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Computer;
