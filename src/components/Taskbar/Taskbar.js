import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import styles from '../../styles/Taskbar.module.css';

export default function Taskbar({ icons, activeComponent }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.taskbar}>
            <div className={styles.taskbarContent}>
                <WidgetsRoundedIcon
                    fontSize='large'
                    sx={{ cursor: "pointer", color: "#d3d3d3", marginRight: "5px" }}
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
    )
}
