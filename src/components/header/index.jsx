import React from 'react';
import {ReactComponent as LogoIcon} from '../../images/logo.svg';
import {NavItem} from '../nav-item';

export const Header = () => {
    return (
        <header className={'flex'}>
            <LogoIcon/>
            <nav className={'flex'}>
                <NavItem />
                <NavItem/>
                <NavItem/>
            </nav>
        </header>
    );
};
