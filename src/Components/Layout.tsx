import React from 'react';
import {styled} from 'baseui';

interface WrapperProps {
    $color?: string
}
const Wrapper = styled<WrapperProps, 'div'>('div', () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
}))

const Layout: React.FC = ({children}) => {

    return (
        <Wrapper>
            <div>
                {children}
            </div>
        </Wrapper>
    );
};

export default Layout;
