import { useState } from 'react';
import styles from "../../styles/screen.module.css";
import Tooltip from '@mui/material/Tooltip';
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
import { DndContext, useSensor, useSensors, MouseSensor, TouchSensor } from "@dnd-kit/core";
import { Draggable } from "../../utils/Draggable";
import { Droppable } from "../../utils/Droppable";
import { onButtonClick } from "../../utils/utils";
import {isMobile} from 'react-device-detect';

import Taskbar from '@/components/Taskbar/Taskbar'

const Computer = () => {
    const [activeComponent, setActiveComponent] = useState(isMobile ? [] : [{ id: 'Projects', position: { x: 0, y: 0 }, isMaximized: false }]);

    const maximizeToggle = (component) => {
        setActiveComponent(activeComponent[0].id === component ? [{ ...activeComponent[0], isMaximized: !activeComponent[0].isMaximized }] : component);
    };

    const toggleComponent = (component) => {
        setActiveComponent(activeComponent[0].id === component ? [{ position: { x: 0, y: 0 }, isMaximized: false }] : component);
    };
console.log(activeComponent)
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
                            {activeComponent && activeComponent.length > 0 &&
                                <Draggable
                                    styles={{
                                        position: "absolute",
                                        left: activeComponent[0].isMaximized
                                            ? "0px"
                                            : `${activeComponent[0].position.x}px`,
                                        top: activeComponent[0].isMaximized
                                            ? "0px"
                                            : `${activeComponent[0].position.y}px`,
                                        zIndex: "100",
                                    }}
                                    key={activeComponent[0].id}
                                    id={activeComponent[0].id}
                                >
                                    {activeComponent[0].id === 'Projects' && <Projects close={() => toggleComponent('Projects')} maximize={() => maximizeToggle('Projects')} />}
                                    {activeComponent[0].id === 'About Me' && <AboutMe close={() => toggleComponent('About Me')} maximize={() => maximizeToggle('About Me')} />}
                                    {activeComponent[0].id === 'Contact Me' && <ContactMe close={() => toggleComponent('Contact Me')} maximize={() => maximizeToggle('Contact Me')} />}
                                    {activeComponent[0].id === 'Thank You' && <ThankYou close={() => toggleComponent('Thank You')} maximize={() => maximizeToggle('Thank You')} />}
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
                            <Taskbar icons={icons} activeComponent={activeComponent} />
                        </div>
                    </div>
                </div>
            </Droppable>
        </DndContext>
    );
};

export default Computer;
