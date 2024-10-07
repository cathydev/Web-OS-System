import { useState } from 'react';
import { Menu, MenuItem, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Taskbar.module.css';
 
interface TaskbarProps {
    icons:  {
        title: string;
        src: string;
        alt: string;
        onClick: () => void;
      }[];
    activeComponent: { id: string }[];
}

export default function Taskbar({ icons, activeComponent }: TaskbarProps) {
    const [anchorEl, setAnchorEl] = useState<null | SVGElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<SVGElement>) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.taskbar}>
            <div className={styles.taskbarContent}>
                <Tooltip title="Menu">
                    <WidgetsRoundedIcon
                        fontSize='large'
                        sx={{ cursor: "pointer", color: "#63595C", marginRight: "5px" }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    />
                </Tooltip>
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
                    <Link href="https://www.linkedin.com/in/catherine-mejias/" target="_blank" className={styles.menu_item}>
                        <MenuItem onClick={handleClose}>
                            <LinkedInIcon />
                            LinkedIn
                        </MenuItem>
                    </Link>
                    <Link href="https://github.com/cathydev" target="_blank" className={styles.menu_item}>
                        <MenuItem onClick={handleClose}>
                            <GitHubIcon />
                            GitHub
                        </MenuItem>
                    </Link>
                </Menu>
                {activeComponent && activeComponent.length > 0 &&
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
    )
}
