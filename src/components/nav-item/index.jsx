import React from 'react';
import {ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';

export const NavItem = ({text = ''}) => {
    return (
        <div className={'relative'}>
            <div className={'flex space-x-2 cursor-pointer items-center'}>
                <span className={'text-medium-gray hover:text-almost-black'}>{text}</span>
                <ArrowDownIcon/>
            </div>
        </div>
    );
};
