// Material-UI-DropdownList: Child Component to Material-UI-Dropdown
import React from 'react';
import { Popover, List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core'

const DropdownList = (props) => {
    const open = (props.open) ? props.open : false;
    const anchorEl = props.anchorEl;
    const onClose = props.onClose;

    const listItemSrc = props.listItemSrc;
    const target = props.target;
    const listOnClick = props.listOnClick;

    const style = props.style;
    const listStyle = props.listStyle;
    const boxStyle = props.boxStyle;

    return (
        <Popover
            open={open}
            style={style}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
        >
            <List style={listStyle}>
                {listItemSrc.map((value) => (
                    <ListItem key={value} button onClick={() => listOnClick(value)}>
                        <ListItemIcon>
                            <Checkbox style={boxStyle}
                                checked={target.indexOf(value) !== -1}
                                tabIndex={-1}
                            />
                        </ListItemIcon>
                        <ListItemText primary={value}/>
                    </ListItem>
                ))}
            </List>
        </Popover>
    )
}

export default DropdownList;
