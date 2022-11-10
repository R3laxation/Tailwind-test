import React from 'react';

export const NavItem = ({text = ''}) => {
    return (
        <div className={'relative'}>
            <div className={'flex space-x-2 cursor-pointer'}>
                <span className={'text-medium-gray'}>{text}</span>
            </div>

        </div>
    );
};
