import React from 'react';

export const NavMenu = ({items = []}) => {
    return (
        <div className={'flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36px space-y-2 z-30'}>
            {items.map(({text}) => <span>{text}</span>)}
        </div>
    );
};

