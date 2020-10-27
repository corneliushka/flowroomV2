import React from "react";
import RouterLink from "../../routes/RouterLink"
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";

import CategoriesIcon from '@material-ui/icons/Class';
import HomeIcon from '@material-ui/icons/Home';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';

import { makeStylesGlobal } from "../../themes/GlobalTheme"


const useStyles = makeStylesGlobal((theme) => ({

    AlignedItemIcon : {
        marginLeft: theme.spacing(1),
        marginRight: -theme.spacing(1)
    }

}))


const MenuItem = (title, icon, path) => {
    const classes = useStyles();

    const effectivePath = "/work/" + path;
    const isActive = document.location.pathname.startsWith(effectivePath);
    return (
        <ListItem
            button
            key={title}
            component={RouterLink}
            to={effectivePath}
            selected={isActive}
        >
            <ListItemIcon className={classes.AlignedItemIcon}
            
            >{icon}</ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    );
};

const Menu = () => {
    return (
        <>
            <List>
                {MenuItem("Home", <HomeIcon />, "home")}
                {MenuItem("D3 Graphs", <GraphicEqIcon />, "d3graphs")}
            </List>
        </>
    )
}
export default Menu;