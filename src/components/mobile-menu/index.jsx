import React from 'react';
import {COMPANY, FEATURES} from '../../constants/constants';
import {MenuItem} from '../menu-item';
import {NavItem} from '../nav-item';

export const MobileMenu = ({isOpen}) => {
    return (
        <>
            <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}></div>
            <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-height-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
                <nav className={'my-20'}>
                    <NavItem text={'Features'}>
                        <div className={'flex flex-col space-y-5 p-2'}>
                            {FEATURES.map(({text, icon}) => <MenuItem text={text} icon={icon} key={text}/>)}
                        </div>
                    </NavItem>
                    <NavItem text={'Company'}>
                        <div className={'flex flex-col space-y-5 p-2'}>
                            {COMPANY.map(({text, icon}) => <MenuItem text={text} icon={icon} key={text}/>)}
                        </div>
                    </NavItem >
                    <NavItem text={'Career'}/>
                    <NavItem text={'About'}/>
                    <div className={'flex flex-col space-y-5'}>

                    </div>
                </nav>
            </div>
        </>
    );
};

