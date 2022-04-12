import React from 'react';

export const Trapezoid = (props: React.SVGProps<SVGSVGElement>) => {

    return (
        <svg width={210} height={30} viewBox="0 0 210 30">
            <polygon points="0, 0 15,30 210,30 210,0"  fill="rgba(0, 0, 0, 0.7)" />
        </svg>
    );
};

