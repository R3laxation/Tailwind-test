import React from 'react';

export const Wrapper = ({children}) => {
    return (
        <div className={'container mx-auto py-4'} >
            {children}
        </div>
    );
};

