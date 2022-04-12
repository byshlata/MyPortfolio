import React from 'react';

export const LogoSVGCss = (props: React.SVGProps<SVGSVGElement>) => {

    return (
        <svg viewBox="-52.5 52.5 361 361" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="xMidYMid" {...props}>
            <path d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z" fill="#264DE4"/>
            <path d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z" fill="#2965F1"/>
            <path d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z"
                  fill="#EBEBEB"/>
            <path d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576z"
                  fill="#FFF"/>
        </svg>
    );
};
