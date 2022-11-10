import React from 'react';
import {ReactComponent as LogoIcon} from '../../images/logo.svg';
import {NavItem} from '../nav-item';
import {NavMenu} from '../nav-menu';

export const Header = () => {
    return (
        <header className={'flex'}>
            <LogoIcon/>
            <nav className={'flex space-x-6 ml-8 items-center'}>
                <NavItem text={'Feature'}>
                    <NavMenu/>
                </NavItem>
                <NavItem text={'Company'}/>
                <NavItem text={'Careers'}/>
                <NavItem text={'About'}/>
            </nav>
        </header>
    );
};
