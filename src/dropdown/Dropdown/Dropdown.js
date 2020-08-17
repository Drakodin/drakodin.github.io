import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import DropdownList from '../DropdownList/DropdownList';
import './dropdown.css';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.anchorRef = React.createRef();
    }

    render() {
        return(
            <>
            <div
                ref={this.anchorRef}
                className={`d-flex flex-row align-items-center ${this.props.className}`}
                onClick={this.props.onClick}
            >
                <Typography className="ml-2 mr-2 no-text-select">{this.props.label}</Typography>
                <IconButton className="cl-borderless" onClick={this.props.onClick}>
                    {(!this.props.open)
                        ? <ArrowDropDown/>
                        : <ArrowDropUp/>
                    }
                </IconButton>
            </div>
            <div>
                <DropdownList
                    open={this.props.open}
                    onClose={this.props.onClose}
                    anchorEl={(this.props.open) ? this.anchorRef.current : null}
                    listItemSrc = {this.props.listSrc}
                    target = {this.props.target}
                    listOnClick = {this.props.listOnClick}
                    style = {this.props.dropStyle}
                    listStyle = {this.props.listStyle}
                    boxStyle = {this.props.boxStyle}
                />
            </div>
            </>
        )
    }
}
