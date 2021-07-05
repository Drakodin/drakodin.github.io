import React from 'react';
import './atom.css';

type AtomProps = {
    content: string,
    position: {
        top: number | string,
        left: number | string
    }
};

export class Atom extends React.Component<AtomProps> {
    render() {
        return(
            <div className="atom" style={{
                top: this.props.position.top,
                left: this.props.position.left
            }}>
                <div className="atom-text">
                    {this.props.content}
                </div>
            </div>
        )
    }
}