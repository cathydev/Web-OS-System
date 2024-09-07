import { useState } from 'react';
import styles from "../../styles/screen.module.css";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import ThankYou from "../ThankYou/ThankYou";
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import portrait from "../../../public/Icons/portrait.svg";
import heart from "../../../public/Icons/heart.svg";
import download from "../../../public/Icons/download.svg";
import projects from "../../../public/Icons/projects.svg";
import email from "../../../public/Icons/email.svg";

const Computer = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const toggleComponent = (component) => {
        setActiveComponent(activeComponent === component ? null : component);
    };

    const onButtonClick = () => {
        const pdfFilename = "CV_Catherine.pdf";
        const link = document.createElement("a");
        link.href = pdfFilename;
        link.download = pdfFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const items = [
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
                            {items.map((item, index) => (
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
                            />
                            {activeComponent &&
                                <>
                                    {items.map((item, index) => (
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
