import React from 'react';

export const NavMenu = ({items = []}) => {
    return (
        <div>
            {items.map(({text}) => <span>{text}</span>)}
        </div>
    );
};

