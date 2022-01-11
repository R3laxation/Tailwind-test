import React from 'react';

export const MobileMenu = ({isOpen}) => {
    return (
        <>
            <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}></div>
            <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-height-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
                <nav className={'my-20'}>

                </nav>
            </div>
        </>
    );
};

