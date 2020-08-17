import * as React from 'react';

export interface DropdownProps {
    open?: Boolean,
    className?: String,
    label?: String,

    onClick: () => void,
    onClose: () => void,
    listOnClick: (value: any) => void,

    target: Array<any>,
    listSrc: Array<any>,
    
    style: CSSStyleDeclaration,
    dropStyle: CSSStyleDeclaration,
    listStyle: CSSStyleDeclaration,
    boxStyle: CSSStyleDeclaration,
}

export default function Dropdown(props: DropdownProps): JSX.Element;