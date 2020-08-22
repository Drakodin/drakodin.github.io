import * as React from 'react';

export interface DropdownProps {
    open?: boolean,
    variant?: 'default' | 'light' | 'dark' | 'custom',
    label?: string,

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