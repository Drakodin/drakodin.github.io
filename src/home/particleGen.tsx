import React from 'react';
import './particles.scss';

export const ParticleGen = (): JSX.Element => {
    return (
        <div className='anim-root'>
            <div className='bubble bubble-p1'></div>
            <div className='bubble bubble-p2'></div>
        </div>
    );
}