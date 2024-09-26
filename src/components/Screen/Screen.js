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
import { onButtonClick } from "../../utils/utils";
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor, KeyboardSensor } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Draggable } from "../../utils/Draggable";
import { Droppable } from "../../utils/Droppable";


const Computer = () => {
    const [activeComponent, setActiveComponent] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const toggleComponent = (component) => {
        setActiveComponent(activeComponent[0].id === component ? [] : component);
    };

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 8,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 200,
                tolerance: 6,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    const handleDragEnd = (ev) => {
        const component = activeComponent.find((x) => x.id === ev.active.id);
        component.position.x += ev.delta.x;
        component.position.y += ev.delta.y;
        setActiveComponent(activeComponent.map((x) => {
            if (x.id === component.id) return component;
            return x;
        }));
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
            onClick: () => setActiveComponent([{ id: 'About Me', position: { x: 0, y: 0 } }]),
        },
        {
            title: 'Projects',
            src: projects,
            alt: 'projects illustration',
            onClick: () => setActiveComponent([{ id: 'Projects', position: { x: 0, y: 0 } }]),
        },
        {
            title: 'Contact Me',
            src: email,
            alt: 'email illustration',
            onClick: () => setActiveComponent([{ id: 'Contact Me', position: { x: 0, y: 0 } }]),
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
            onClick: () => setActiveComponent([{ id: 'Thank You', position: { x: 0, y: 0 } }]),
        },
    ];

    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Droppable>
                <div className="container">
                    <div className="base">
                        <div className={styles.screen}>
                            {activeComponent.length > 0 &&
                                <Draggable
                                    styles={{
                                        position: "absolute",
                                        left: `${activeComponent[0].position.x}px`,
                                        top: `${activeComponent[0].position.y}px`,
                                    }}
                                    key={activeComponent[0].id}
                                    id={activeComponent[0].id}
                                >
                                    {activeComponent[0].id === 'Projects' && <Projects close={() => toggleComponent('Projects')} />}
                                    {activeComponent[0].id === 'About Me' && <AboutMe close={() => toggleComponent('About Me')} />}
                                    {activeComponent[0].id === 'Contact Me' && <ContactMe close={() => toggleComponent('Contact Me')} />}
                                    {activeComponent[0].id === 'Thank You' && <ThankYou close={() => toggleComponent('Thank You')} />}
                                </Draggable>
                            }
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
                                    {activeComponent.length > 0 &&
                                        <>
                                            {icons.map((item, index) => (
                                                item.title === activeComponent[0].id && (
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
            </Droppable>
        </DndContext>
    );
};

export default Computer;
