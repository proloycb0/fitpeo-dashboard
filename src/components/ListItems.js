import React, { useState } from 'react';
import { BorderColorOutlined, BusinessCenterOutlined, DateRangeOutlined, EmailOutlined, ExpandLess, ExpandMore, GridViewOutlined, HowToRegOutlined, Inventory2Outlined, LayersOutlined, LocalMallOutlined, SmartphoneOutlined, SmsOutlined, ViewInArOutlined, WifiOutlined } from '@mui/icons-material';
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader, Collapse, List, Chip } from '@mui/material';


const ListItems = () => {
    const [open, setOpen] = useState(true);
    const iconColor = "gray";

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <React.Fragment >

            {/* Menu */}
            <ListSubheader sx={{ marginLeft: "-170px", backgroundColor: '#263238', color: iconColor, textTransform: "uppercase" }}>Menu</ListSubheader>
            <ListItemButton sx={{ color: 'white' }} onClick={handleClick}>
                <ListItemIcon sx={{ color: 'white' }}>
                    <GridViewOutlined />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 9, color: 'white' }}>
                        <ListItemText primary="Ecommerce" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }}>
                        <ListItemText primary="Sass" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 9 }}>
                        <ListItemText primary="Crypto" />
                    </ListItemButton>
                </List>
            </Collapse>

            {/* Applications */}
            <ListSubheader sx={{ marginLeft: "-110px", backgroundColor: '#263238', color: iconColor, textTransform: "uppercase" }}>Applications</ListSubheader>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <DateRangeOutlined />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <SmsOutlined />
                </ListItemIcon>
                <ListItemText primary="Chat" />
                <Chip label="Hot" variant="outlined" color="error" size="small" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <Inventory2Outlined />
                </ListItemIcon>
                <ListItemText primary="File Manager" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <LocalMallOutlined />
                </ListItemIcon>
                <ListItemText primary="Ecommerce" />
                <ExpandMore />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <EmailOutlined />
                </ListItemIcon>
                <ListItemText primary="Email" />
                <ExpandMore />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <SmartphoneOutlined />
                </ListItemIcon>
                <ListItemText primary="Invoices" />
                <ExpandMore />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <BusinessCenterOutlined />
                </ListItemIcon>
                <ListItemText primary="Projects" />
                <ExpandMore />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <WifiOutlined />
                </ListItemIcon>
                <ListItemText primary="Contacts" />
                <ExpandMore />
            </ListItemButton>

            {/* Layouts */}

            <ListSubheader sx={{ marginLeft: "-145px", backgroundColor: '#263238', color: iconColor, textTransform: "uppercase" }}>Layouts</ListSubheader>
            <ListSubheader sx={{ marginLeft: "-160px", backgroundColor: '#263238', color: iconColor, textTransform: "uppercase" }}>Pages</ListSubheader>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <HowToRegOutlined />
                </ListItemIcon>
                <ListItemText primary="Authentication" />
                <Chip label="8" variant="filled" color="info" size="small" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <ViewInArOutlined />
                </ListItemIcon>
                <ListItemText primary="Utility" />
                <ExpandMore />
            </ListItemButton>

            {/* Components */}
            <ListSubheader sx={{ marginLeft: "-115px", backgroundColor: '#263238', color: iconColor, textTransform: "uppercase" }}>Components</ListSubheader>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <LayersOutlined />
                </ListItemIcon>
                <ListItemText primary="UI Elements" />
                <ExpandMore />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{ color: iconColor }}>
                    <BorderColorOutlined />
                </ListItemIcon>
                <ListItemText primary="Forms" />
                <ExpandMore />
            </ListItemButton>
        </React.Fragment >
    );
};

export default ListItems;