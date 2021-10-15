import React from 'react';
import {styled} from 'baseui';
import {Theme} from 'baseui/theme';

interface WrapperProps {
    $color?: string,
    $theme?: Theme
}
const Wrapper = styled<WrapperProps, 'div'>('div', ({$color }) => ({
    backgroundColor: $color
}))

const Layout: React.FC = ({children}) => {

    return (
        <Wrapper $color='red'>
            {children}
        </Wrapper>
    );
};

export default Layout;
