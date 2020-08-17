import * as React from 'react';

export interface DropdownListProps {
    open?: boolean,
    anchorEl?: Node,
    listItemSrc?: Array<any>,
    target?: Array<any>,

    onClose?: () => void,
    listOnClick?: (value: any) => void,

    style?: CSSStyleDeclaration,
    listStyle?: CSSStyleDeclaration,
    boxStyle?: CSSStyleDeclaration
}

export default function DropdownListProps(props: DropdownListProps): JSX.Element;
