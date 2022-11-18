import React from 'react';
import {ReactComponent as LogoIcon} from '../../images/logo.svg';
import {ReactComponent as MenuIcon} from '../../images/icon-menu.svg';
import {NavItem} from '../nav-item';
import {NavMenu} from '../nav-menu';
import {COMPANY, FEATURES} from '../../constants/constants';
import {Button} from '../button';

export const Header = () => {
    return (
        <header className={'flex items-center'}>
            <LogoIcon/>
            <nav className={'hidden xl:flex space-x-6 ml-8 items-center'}>
                <NavItem text={'Feature'}>
                    <NavMenu items={FEATURES}/>
                </NavItem>
                <NavItem text={'Feature'}>
                    <NavMenu items={COMPANY}/>
                </NavItem>
                <NavItem text={'Careers'}/>
                <NavItem text={'About'}/>
            </nav>
            <div className="hidden ml-auto xl:flex space-x-5">
                <Button>Logg in</Button>
                <Button hasBorder>Register</Button>
            </div>
            <div className={'flex xl:hidden ml-auto cursor-pointer z-30'}>
                <MenuIcon/>
            </div>
        </header>
    );
};
