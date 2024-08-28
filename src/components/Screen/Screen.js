import { useState } from 'react';
import styles from "../../styles/screen.module.css";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
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

    return (
        <div className="container">
            <div className="base"> 
                <div className={styles.screen}>
                    {activeComponent === 'projects' && <Projects close={() => toggleComponent('projects')} />}
                    {activeComponent === 'about' && <AboutMe close={() => toggleComponent('about')} />}
                    <div>
                        <ul className={styles.apps}>
                            <li>
                                <Tooltip title="About Me">
                                    <Image
                                        src={portrait}
                                        alt="My custom SVG"
                                        width={50}
                                        height={50}
                                        onClick={() => toggleComponent('about')}
                                    />
                                </Tooltip>
                                <div>About me</div>
                            </li>
                            <li>
                                <Tooltip title="Projects">
                                    <Image
                                        src={projects}
                                        alt="projects illustration"
                                        width={50}
                                        height={50}
                                        onClick={() => toggleComponent('projects')}
                                    />
                                </Tooltip>
                                <div>Projects</div>
                            </li>
                            <li>
                                <Tooltip title="Contact Me">
                                <Image
                                        src={email}
                                        alt="email illustration"
                                        width={50}
                                        height={50}
                                    />
                                </Tooltip>
                                <div>Contact me</div>
                            </li>
                            <li>
                                <Tooltip title="Download CV">
                                    <Image
                                        src={download}
                                        alt="download icon"
                                        width={50}
                                        height={50}
                                        onClick={onButtonClick}
                                    />
                                </Tooltip>
                                <div>CV</div>
                            </li>
                            <li>
                                <Tooltip title="Thank you">
                                    <Image
                                        src={heart}
                                        alt="a heart"
                                        width={50}
                                        height={50}
                                    />
                                </Tooltip>
                                <div>Thank you</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Computer;
