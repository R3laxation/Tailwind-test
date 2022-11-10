import React from 'react';


export const NavItem = ({text = 'asd'}) => {
    return (
        <div className={'relative'}>
            <div className={'flex space-x-2 cursor-pointer'}>
                <span className={'text-medium-gray hover:text-almost-black'}>{text}</span>
            </div>
        </div>
    );
};
